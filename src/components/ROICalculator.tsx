import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Slider, Typography, Space, InputNumber, Statistic } from 'antd';
import {
  TeamOutlined,
  MailOutlined,
  DollarOutlined,
  RiseOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import '../styles/ROICalculator.css';

const { Title, Text, Paragraph } = Typography;

const ROICalculator: React.FC = () => {
  const [managers, setManagers] = useState(5);
  const [messagesPerDay, setMessagesPerDay] = useState(100);
  const [hourlyRate, setHourlyRate] = useState(500);
  const [timePerMessage, setTimePerMessage] = useState(5);

  // Расчеты
  const [calculations, setCalculations] = useState({
    hoursWithoutAI: 0,
    hoursWithAI: 0,
    savedHours: 0,
    costWithoutAI: 0,
    costWithAI: 0,
    monthlySavings: 0,
    yearlySavings: 0,
    roi: 0
  });

  const AI_COST_PER_REQUEST = 0.5; // ₽ за запрос
  const AI_TIME_MULTIPLIER = 0.1; // AI работает в 10 раз быстрее

  useEffect(() => {
    // Расчет времени БЕЗ AI
    const totalMessagesPerMonth = messagesPerDay * 22; // 22 рабочих дня
    const hoursPerMonth = (totalMessagesPerMonth * timePerMessage) / 60;

    // Расчет времени С AI
    const hoursWithAI = hoursPerMonth * AI_TIME_MULTIPLIER;
    const savedHours = hoursPerMonth - hoursWithAI;

    // Расчет стоимости БЕЗ AI
    const costWithoutAI = hoursPerMonth * hourlyRate * managers;

    // Расчет стоимости С AI
    const aiServiceCost = totalMessagesPerMonth * AI_COST_PER_REQUEST;
    const costWithAI = (hoursWithAI * hourlyRate * managers) + aiServiceCost;

    // Экономия
    const monthlySavings = costWithoutAI - costWithAI;
    const yearlySavings = monthlySavings * 12;

    // ROI
    const roi = ((monthlySavings * 12) / (costWithAI * 12)) * 100;

    setCalculations({
      hoursWithoutAI: Math.round(hoursPerMonth),
      hoursWithAI: Math.round(hoursWithAI),
      savedHours: Math.round(savedHours),
      costWithoutAI: Math.round(costWithoutAI),
      costWithAI: Math.round(costWithAI),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      roi: Math.round(roi)
    });
  }, [managers, messagesPerDay, hourlyRate, timePerMessage]);

  const formatCurrency = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="roi-calculator-container">
      <div className="roi-header">
        <Title level={2}>Рассчитайте окупаемость AI-системы</Title>
        <Paragraph style={{ fontSize: '16px', opacity: 0.85 }}>
          Настройте параметры вашего бизнеса и узнайте, сколько вы сможете сэкономить
        </Paragraph>
      </div>

      <Row gutter={[32, 32]}>
        {/* Левая колонка - параметры */}
        <Col xs={24} lg={12}>
          <Card className="roi-params-card" bordered={false}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {/* Количество менеджеров */}
              <div className="param-group">
                <div className="param-header">
                  <Space>
                    <TeamOutlined style={{ fontSize: 20, color: '#1890ff' }} />
                    <Text strong style={{ fontSize: 16 }}>Количество менеджеров</Text>
                  </Space>
                  <InputNumber
                    min={1}
                    max={100}
                    value={managers}
                    onChange={(value) => setManagers(value || 1)}
                    className="param-input"
                  />
                </div>
                <Slider
                  min={1}
                  max={50}
                  value={managers}
                  onChange={setManagers}
                  marks={{ 1: '1', 25: '25', 50: '50+' }}
                />
              </div>

              {/* Сообщений в день */}
              <div className="param-group">
                <div className="param-header">
                  <Space>
                    <MailOutlined style={{ fontSize: 20, color: '#52c41a' }} />
                    <Text strong style={{ fontSize: 16 }}>Сообщений в день</Text>
                  </Space>
                  <InputNumber
                    min={10}
                    max={10000}
                    value={messagesPerDay}
                    onChange={(value) => setMessagesPerDay(value || 10)}
                    className="param-input"
                  />
                </div>
                <Slider
                  min={10}
                  max={500}
                    step={10}
                  value={messagesPerDay}
                  onChange={setMessagesPerDay}
                  marks={{ 10: '10', 250: '250', 500: '500+' }}
                />
              </div>

              {/* Стоимость часа */}
              <div className="param-group">
                <div className="param-header">
                  <Space>
                    <DollarOutlined style={{ fontSize: 20, color: '#faad14' }} />
                    <Text strong style={{ fontSize: 16 }}>Стоимость часа менеджера (₽)</Text>
                  </Space>
                  <InputNumber
                    min={100}
                    max={5000}
                    step={50}
                    value={hourlyRate}
                    onChange={(value) => setHourlyRate(value || 100)}
                    className="param-input"
                  />
                </div>
                <Slider
                  min={100}
                  max={2000}
                  step={50}
                  value={hourlyRate}
                  onChange={setHourlyRate}
                  marks={{ 100: '100₽', 1000: '1000₽', 2000: '2000₽' }}
                />
              </div>

              {/* Время на сообщение */}
              <div className="param-group">
                <div className="param-header">
                  <Space>
                    <ClockCircleOutlined style={{ fontSize: 20, color: '#722ed1' }} />
                    <Text strong style={{ fontSize: 16 }}>Время на сообщение (мин)</Text>
                  </Space>
                  <InputNumber
                    min={1}
                    max={30}
                    value={timePerMessage}
                    onChange={(value) => setTimePerMessage(value || 1)}
                    className="param-input"
                  />
                </div>
                <Slider
                  min={1}
                  max={15}
                  value={timePerMessage}
                  onChange={setTimePerMessage}
                  marks={{ 1: '1', 7: '7', 15: '15+' }}
                />
              </div>
            </Space>
          </Card>
        </Col>

        {/* Правая колонка - результаты */}
        <Col xs={24} lg={12}>
          <div className="roi-results">
            {/* Главный результат */}
            <Card className="roi-result-main" bordered={false}>
              <div className="result-icon">
                <RiseOutlined />
              </div>
              <Title level={3} style={{ marginBottom: 8 }}>Экономия в месяц</Title>
              <div className="result-value">
                <span className="currency">₽</span>
                <span className="amount">{formatCurrency(calculations.monthlySavings)}</span>
              </div>
              <div className="result-yearly">
                В год: <strong>₽{formatCurrency(calculations.yearlySavings)}</strong>
              </div>
            </Card>

            {/* Дополнительные метрики */}
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card className="roi-metric-card" bordered={false}>
                  <Statistic
                    title="Сэкономлено часов"
                    value={calculations.savedHours}
                    suffix="ч/мес"
                    prefix={<ClockCircleOutlined />}
                    valueStyle={{ color: '#52c41a', fontSize: '24px' }}
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card className="roi-metric-card" bordered={false}>
                  <Statistic
                    title="ROI"
                    value={calculations.roi}
                    suffix="%"
                    prefix={<RiseOutlined />}
                    valueStyle={{ color: '#1890ff', fontSize: '24px' }}
                  />
                </Card>
              </Col>
            </Row>

            {/* Сравнение */}
            <Card className="roi-comparison-card" bordered={false}>
              <Title level={5}>
                <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                Что изменится с AI?
              </Title>
              <div className="comparison-list">
                <div className="comparison-item">
                  <span className="comparison-label">Затраты на персонал:</span>
                  <div className="comparison-values">
                    <span className="before">₽{formatCurrency(calculations.costWithoutAI)}</span>
                    <span className="arrow">→</span>
                    <span className="after">₽{formatCurrency(calculations.costWithAI)}</span>
                  </div>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Время обработки:</span>
                  <div className="comparison-values">
                    <span className="before">{calculations.hoursWithoutAI} ч</span>
                    <span className="arrow">→</span>
                    <span className="after">{calculations.hoursWithAI} ч</span>
                  </div>
                </div>
                <div className="comparison-item highlight">
                  <span className="comparison-label">Эффективность:</span>
                  <div className="comparison-values">
                    <span className="after">↑ в 10 раз</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ROICalculator;
