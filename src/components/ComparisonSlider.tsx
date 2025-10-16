import React, { useState } from 'react';
import { Card, Typography, Row, Col, Space, Statistic, Progress } from 'antd';
import {
  CloseCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  DollarOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import '../styles/ComparisonSlider.css';

const { Title, Text, Paragraph } = Typography;

const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="comparison-slider-container">
      <div className="comparison-header">
        <Title level={2}>Работа без AI vs С AI</Title>
        <Paragraph style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
          Перетащите слайдер, чтобы увидеть разницу в эффективности работы
        </Paragraph>
      </div>

      {/* Interactive Comparison Slider */}
      <div
        className="comparison-visual"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Before (Without AI) */}
        <div className="comparison-side before" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Card className="comparison-card card-before" bordered={false}>
            <div className="card-badge badge-before">
              <CloseCircleOutlined /> Без AI
            </div>
            <Title level={4} style={{ color: '#ff4d4f', marginTop: 16 }}>
              Традиционный подход
            </Title>

            <div className="comparison-stats">
              <div className="stat-item">
                <ClockCircleOutlined style={{ fontSize: 24, color: '#ff4d4f' }} />
                <div className="stat-content">
                  <Text strong style={{ fontSize: 28, color: '#ff4d4f' }}>2 часа</Text>
                  <Text type="secondary">на 20 писем</Text>
                </div>
              </div>

              <div className="stat-item">
                <TeamOutlined style={{ fontSize: 24, color: '#ff4d4f' }} />
                <div className="stat-content">
                  <Text strong style={{ fontSize: 28, color: '#ff4d4f' }}>5 менеджеров</Text>
                  <Text type="secondary">постоянно заняты</Text>
                </div>
              </div>

              <div className="stat-item">
                <DollarOutlined style={{ fontSize: 24, color: '#ff4d4f' }} />
                <div className="stat-content">
                  <Text strong style={{ fontSize: 28, color: '#ff4d4f' }}>150,000₽</Text>
                  <Text type="secondary">в месяц на зарплаты</Text>
                </div>
              </div>
            </div>

            <div className="efficiency-bar">
              <Text type="secondary" style={{ marginBottom: 8, display: 'block' }}>Эффективность</Text>
              <Progress percent={30} strokeColor="#ff4d4f" showInfo={false} />
            </div>

            <ul className="comparison-list">
              <li className="negative">
                <CloseCircleOutlined /> Медленная обработка запросов
              </li>
              <li className="negative">
                <CloseCircleOutlined /> Человеческие ошибки
              </li>
              <li className="negative">
                <CloseCircleOutlined /> Работа только в рабочее время
              </li>
              <li className="negative">
                <CloseCircleOutlined /> Высокие затраты на персонал
              </li>
            </ul>
          </Card>
        </div>

        {/* After (With AI) */}
        <div className="comparison-side after" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
          <Card className="comparison-card card-after" bordered={false}>
            <div className="card-badge badge-after">
              <CheckCircleOutlined /> С AI
            </div>
            <Title level={4} style={{ color: '#52c41a', marginTop: 16 }}>
              AI-автоматизация
            </Title>

            <div className="comparison-stats">
              <div className="stat-item">
                <ThunderboltOutlined style={{ fontSize: 24, color: '#52c41a' }} />
                <div className="stat-content">
                  <Text strong style={{ fontSize: 28, color: '#52c41a' }}>5 минут</Text>
                  <Text type="secondary">на 200 писем</Text>
                </div>
              </div>

              <div className="stat-item">
                <TeamOutlined style={{ fontSize: 24, color: '#52c41a' }} />
                <div className="stat-content">
                  <Text strong style={{ fontSize: 28, color: '#52c41a' }}>1 оператор</Text>
                  <Text type="secondary">контроль качества</Text>
                </div>
              </div>

              <div className="stat-item">
                <DollarOutlined style={{ fontSize: 24, color: '#52c41a' }} />
                <div className="stat-content">
                  <Text strong style={{ fontSize: 28, color: '#52c41a' }}>35,000₽</Text>
                  <Text type="secondary">экономия в месяц</Text>
                </div>
              </div>
            </div>

            <div className="efficiency-bar">
              <Text type="secondary" style={{ marginBottom: 8, display: 'block' }}>Эффективность</Text>
              <Progress percent={95} strokeColor="#52c41a" showInfo={false} />
            </div>

            <ul className="comparison-list">
              <li className="positive">
                <CheckCircleOutlined /> Мгновенная обработка
              </li>
              <li className="positive">
                <CheckCircleOutlined /> 99.4% точность ответов
              </li>
              <li className="positive">
                <CheckCircleOutlined /> Работа 24/7 без перерывов
              </li>
              <li className="positive">
                <CheckCircleOutlined /> Снижение затрат на 77%
              </li>
            </ul>
          </Card>
        </div>

        {/* Slider Handle */}
        <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
          <div className="handle-bar"></div>
          <div className="handle-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 19l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <Row gutter={[24, 24]} style={{ marginTop: 40 }}>
        <Col xs={24} sm={8}>
          <Card className="bottom-stat-card" bordered={false}>
            <Statistic
              title="Ускорение работы"
              value="24x"
              valueStyle={{ color: '#1890ff', fontSize: '32px', fontWeight: 700 }}
              prefix={<ThunderboltOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bottom-stat-card" bordered={false}>
            <Statistic
              title="Экономия времени"
              value="95"
              suffix="%"
              valueStyle={{ color: '#52c41a', fontSize: '32px', fontWeight: 700 }}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bottom-stat-card" bordered={false}>
            <Statistic
              title="Снижение затрат"
              value="77"
              suffix="%"
              valueStyle={{ color: '#fa8c16', fontSize: '32px', fontWeight: 700 }}
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ComparisonSlider;
