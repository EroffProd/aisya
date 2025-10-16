import React, { useState, useEffect } from 'react';
import { Card, Typography, Row, Col, Progress, Statistic, Tag, Space, Divider } from 'antd';
import {
  RocketOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  DatabaseOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  RiseOutlined,
  FireOutlined
} from '@ant-design/icons';
import '../styles/AITrainingSimulator.css';

const { Title, Text, Paragraph } = Typography;

interface TrainingMetrics {
  epoch: number;
  accuracy: number;
  loss: number;
  samplesProcessed: number;
  stage: 'idle' | 'pre-training' | 'fine-tuning' | 'continuous-learning' | 'completed';
}

const AITrainingSimulator: React.FC = () => {
  const [metrics, setMetrics] = useState<TrainingMetrics>({
    epoch: 0,
    accuracy: 65,
    loss: 0.82,
    samplesProcessed: 0,
    stage: 'idle'
  });

  const [chartData, setChartData] = useState<Array<{ epoch: number; accuracy: number }>>([
    { epoch: 0, accuracy: 65 }
  ]);

  const [isTraining, setIsTraining] = useState(false);

  // Training stages configuration - REALISTIC ACCURACY BASED ON 2024-2025 RESEARCH
  const stages = [
    { name: 'pre-training', label: 'Pre-Training', color: '#1890ff', targetAccuracy: 78, epochs: 20 },
    { name: 'fine-tuning', label: 'Fine-Tuning', color: '#52c41a', targetAccuracy: 85, epochs: 30 },
    { name: 'continuous-learning', label: 'Continuous Learning', color: '#722ed1', targetAccuracy: 90, epochs: 50 }
  ];

  useEffect(() => {
    const runTraining = () => {
      setIsTraining(true);
      let currentEpoch = 0;
      let currentStageIndex = 0;

      const trainingInterval = setInterval(() => {
        currentEpoch++;

        // Determine current stage
        let stage = stages[currentStageIndex];
        if (currentEpoch > stage.epochs && currentStageIndex < stages.length - 1) {
          currentStageIndex++;
          stage = stages[currentStageIndex];
        }

        // Calculate metrics based on stage
        const progress = Math.min(currentEpoch / stage.epochs, 1);
        const baseAccuracy = currentStageIndex > 0 ? stages[currentStageIndex - 1].targetAccuracy : 65;
        const targetAccuracy = stage.targetAccuracy;

        // Non-linear growth (logarithmic curve for realistic ML training)
        const accuracyGrowth = baseAccuracy + (targetAccuracy - baseAccuracy) * (1 - Math.exp(-3 * progress));
        const accuracy = Math.min(accuracyGrowth, targetAccuracy);

        const loss = 0.82 - (accuracy - 65) * 0.028; // Loss decreases as accuracy increases
        const samplesProcessed = currentEpoch * 50000; // 50k samples per epoch

        setMetrics({
          epoch: currentEpoch,
          accuracy: Math.round(accuracy * 10) / 10,
          loss: Math.round(loss * 100) / 100,
          samplesProcessed,
          stage: stage.name as any
        });

        // Update chart data (sample every few epochs to keep it clean)
        if (currentEpoch % 2 === 0 || currentEpoch === 1) {
          setChartData(prev => [...prev, { epoch: currentEpoch, accuracy: Math.round(accuracy * 10) / 10 }]);
        }

        // Complete training
        if (currentEpoch >= 50) {
          clearInterval(trainingInterval);
          setMetrics(prev => ({ ...prev, stage: 'completed' }));
          setIsTraining(false);

          // Reset and restart after pause
          setTimeout(() => {
            setMetrics({
              epoch: 0,
              accuracy: 65,
              loss: 0.82,
              samplesProcessed: 0,
              stage: 'idle'
            });
            setChartData([{ epoch: 0, accuracy: 65 }]);
            setTimeout(runTraining, 1000);
          }, 5000);
        }
      }, 200); // Faster animation (200ms per epoch)
    };

    // Start training after initial delay
    const timeout = setTimeout(runTraining, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const getStageColor = () => {
    switch (metrics.stage) {
      case 'pre-training': return '#1890ff';
      case 'fine-tuning': return '#52c41a';
      case 'continuous-learning': return '#722ed1';
      case 'completed': return '#faad14';
      default: return '#8c8c8c';
    }
  };

  const getStageLabel = () => {
    switch (metrics.stage) {
      case 'pre-training': return 'Pre-Training на базовом датасете';
      case 'fine-tuning': return 'Fine-Tuning на корпоративных данных';
      case 'continuous-learning': return 'Continuous Learning в продакшене';
      case 'completed': return 'Модель обучена! Accuracy: 90%';
      default: return 'Инициализация...';
    }
  };

  return (
    <div className="training-simulator-container">
      <div className="training-header">
        <Title level={2}>
          <FireOutlined style={{ marginRight: '12px', color: '#ff4d4f' }} />
          AI Training Simulator
        </Title>
        <Paragraph style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
          Наблюдайте как AI-модель обучается в реальном времени от базовой точности 65% до 90% (реальные показатели 2024-2025)
        </Paragraph>
      </div>

      <div className="training-content">
        {/* Stage Indicator */}
        <Card className="stage-indicator-card" bordered={false}>
          <Space size="large" style={{ width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Tag
              icon={<RocketOutlined />}
              color={metrics.stage === 'pre-training' ? 'processing' : metrics.epoch >= 20 ? 'success' : 'default'}
              className={`stage-tag ${metrics.stage === 'pre-training' ? 'active' : ''}`}
            >
              Pre-Training
            </Tag>
            <Tag
              icon={<ThunderboltOutlined />}
              color={metrics.stage === 'fine-tuning' ? 'processing' : metrics.epoch >= 30 ? 'success' : 'default'}
              className={`stage-tag ${metrics.stage === 'fine-tuning' ? 'active' : ''}`}
            >
              Fine-Tuning
            </Tag>
            <Tag
              icon={<SyncOutlined spin={metrics.stage === 'continuous-learning'} />}
              color={metrics.stage === 'continuous-learning' ? 'processing' : metrics.stage === 'completed' ? 'success' : 'default'}
              className={`stage-tag ${metrics.stage === 'continuous-learning' ? 'active' : ''}`}
            >
              Continuous Learning
            </Tag>
            {metrics.stage === 'completed' && (
              <Tag icon={<CheckCircleOutlined />} color="success" className="stage-tag completed-tag">
                Завершено!
              </Tag>
            )}
          </Space>
        </Card>

        {/* Main Training Visualization */}
        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          {/* Left: Chart */}
          <Col xs={24} lg={14}>
            <Card className="chart-card" bordered={false}>
              <div className="chart-header">
                <Text strong style={{ fontSize: '16px' }}>Рост точности модели</Text>
                <Tag color={getStageColor()}>{getStageLabel()}</Tag>
              </div>

              {/* SVG Chart */}
              <div className="accuracy-chart">
                <svg width="100%" height="300" viewBox="0 0 600 300">
                  {/* Grid lines */}
                  <g className="grid">
                    {[0, 25, 50, 75, 100].map((y) => (
                      <g key={y}>
                        <line
                          x1="50"
                          y1={250 - (y * 2)}
                          x2="580"
                          y2={250 - (y * 2)}
                          stroke="#f0f0f0"
                          strokeWidth="1"
                        />
                        <text x="20" y={255 - (y * 2)} fontSize="12" fill="#8c8c8c">
                          {y}%
                        </text>
                      </g>
                    ))}
                  </g>

                  {/* Accuracy line */}
                  <polyline
                    fill="none"
                    stroke="#1890ff"
                    strokeWidth="3"
                    points={chartData.map((point, index) => {
                      const x = 50 + (index * (530 / 50));
                      const y = 250 - ((point.accuracy - 0) * 2);
                      return `${x},${y}`;
                    }).join(' ')}
                    className="accuracy-line"
                  />

                  {/* Data points */}
                  {chartData.map((point, index) => {
                    const x = 50 + (index * (530 / 50));
                    const y = 250 - ((point.accuracy - 0) * 2);
                    return (
                      <g key={index}>
                        <circle
                          cx={x}
                          cy={y}
                          r="5"
                          fill="#ffffff"
                          stroke="#1890ff"
                          strokeWidth="2"
                          className="data-point"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        />
                      </g>
                    );
                  })}

                  {/* Current point highlight */}
                  {chartData.length > 0 && (
                    <g>
                      <circle
                        cx={50 + ((chartData.length - 1) * (530 / 50))}
                        cy={250 - ((chartData[chartData.length - 1].accuracy - 0) * 2)}
                        r="7"
                        fill="#ffffff"
                        stroke="#ff4d4f"
                        strokeWidth="3"
                        className="current-point"
                      />
                      <circle
                        cx={50 + ((chartData.length - 1) * (530 / 50))}
                        cy={250 - ((chartData[chartData.length - 1].accuracy - 0) * 2)}
                        r="3"
                        fill="#ff4d4f"
                        className="current-point-inner"
                      />
                    </g>
                  )}

                  {/* Stage markers */}
                  <line x1={50 + (20 * 530 / 50)} y1="250" x2={50 + (20 * 530 / 50)} y2="50" stroke="#1890ff" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                  <line x1={50 + (30 * 530 / 50)} y1="250" x2={50 + (30 * 530 / 50)} y2="50" stroke="#52c41a" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                </svg>
              </div>

              {/* Progress bar */}
              <div className="training-progress">
                <Text type="secondary" style={{ fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                  Эпоха {metrics.epoch} / 50
                </Text>
                <Progress
                  percent={Math.round((metrics.epoch / 50) * 100)}
                  strokeColor={{
                    '0%': '#1890ff',
                    '40%': '#52c41a',
                    '60%': '#722ed1',
                    '100%': '#faad14'
                  }}
                  showInfo={false}
                />
              </div>
            </Card>
          </Col>

          {/* Right: Metrics */}
          <Col xs={24} lg={10}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {/* Accuracy */}
              <Card className="metric-card accuracy-card" bordered={false}>
                <Statistic
                  title="Текущая точность"
                  value={metrics.accuracy}
                  suffix="%"
                  prefix={<RiseOutlined />}
                  valueStyle={{ color: '#52c41a', fontSize: '36px', fontWeight: 700 }}
                />
                <div className="metric-badge">
                  {metrics.accuracy >= 88 ? (
                    <Tag color="success" icon={<TrophyOutlined />}>Превосходно!</Tag>
                  ) : metrics.accuracy >= 82 ? (
                    <Tag color="processing" icon={<ThunderboltOutlined />}>Высокая точность</Tag>
                  ) : (
                    <Tag color="default">Обучение...</Tag>
                  )}
                </div>
              </Card>

              {/* Loss */}
              <Card className="metric-card loss-card" bordered={false}>
                <Statistic
                  title="Loss функция"
                  value={metrics.loss}
                  precision={2}
                  valueStyle={{ color: '#ff4d4f', fontSize: '28px', fontWeight: 600 }}
                />
                <Progress
                  percent={Math.round((1 - metrics.loss) * 100)}
                  strokeColor="#ff4d4f"
                  showInfo={false}
                  size="small"
                />
              </Card>

              {/* Samples Processed */}
              <Card className="metric-card samples-card" bordered={false}>
                <Statistic
                  title="Обработано примеров"
                  value={metrics.samplesProcessed}
                  prefix={<DatabaseOutlined />}
                  valueStyle={{ fontSize: '24px', fontWeight: 600, color: '#1890ff' }}
                  formatter={(value) => {
                    const num = Number(value);
                    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
                    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
                    return num.toString();
                  }}
                />
              </Card>

              {/* Dataset Info */}
              <Card className="metric-card dataset-card" bordered={false}>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Text strong style={{ fontSize: '14px' }}>📊 Датасет для обучения</Text>
                  <Divider style={{ margin: '8px 0' }} />
                  <div className="dataset-item">
                    <Text type="secondary">Диалоги</Text>
                    <Text strong>1.2M</Text>
                  </div>
                  <div className="dataset-item">
                    <Text type="secondary">Email переписки</Text>
                    <Text strong>800K</Text>
                  </div>
                  <div className="dataset-item">
                    <Text type="secondary">Транскрипции звонков</Text>
                    <Text strong>500K</Text>
                  </div>
                  <Divider style={{ margin: '8px 0' }} />
                  <Tag color="purple" style={{ width: 'fit-content' }}>Всего: 2.5M примеров</Tag>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>

        {/* Bottom: Model Comparison */}
        <Card className="comparison-card" bordered={false} style={{ marginTop: 24 }}>
          <Title level={4} style={{ marginBottom: 24 }}>
            Сравнение: Базовая модель vs Обученная модель
          </Title>
          <Row gutter={[32, 16]}>
            <Col xs={24} sm={12}>
              <div className="model-comparison-item base-model">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Text strong style={{ fontSize: '16px', color: '#8c8c8c' }}>
                    🔹 Базовая модель (GPT-4 Baseline)
                  </Text>
                  <Divider style={{ margin: '12px 0' }} />
                  <div className="comparison-metric">
                    <Text type="secondary">Accuracy</Text>
                    <Text>65-70%</Text>
                  </div>
                  <div className="comparison-metric">
                    <Text type="secondary">Response Time</Text>
                    <Text>800ms</Text>
                  </div>
                  <div className="comparison-metric">
                    <Text type="secondary">Context Understanding</Text>
                    <Text>Общий</Text>
                  </div>
                  <div className="comparison-metric">
                    <Text type="secondary">Domain Knowledge</Text>
                    <Text type="danger">❌ Отсутствует</Text>
                  </div>
                </Space>
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className="model-comparison-item trained-model">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Text strong style={{ fontSize: '16px', color: '#52c41a' }}>
                    🔸 Обученная модель (AISYA Fine-tuned)
                  </Text>
                  <Divider style={{ margin: '12px 0' }} />
                  <div className="comparison-metric">
                    <Text type="secondary">Accuracy</Text>
                    <Text strong style={{ color: '#52c41a' }}>88-91%</Text>
                  </div>
                  <div className="comparison-metric">
                    <Text type="secondary">Response Time</Text>
                    <Text strong style={{ color: '#52c41a' }}>200ms</Text>
                  </div>
                  <div className="comparison-metric">
                    <Text type="secondary">Context Understanding</Text>
                    <Text strong style={{ color: '#52c41a' }}>Специализированный</Text>
                  </div>
                  <div className="comparison-metric">
                    <Text type="secondary">Domain Knowledge</Text>
                    <Text strong style={{ color: '#52c41a' }}>✅ Полное</Text>
                  </div>
                </Space>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default AITrainingSimulator;
