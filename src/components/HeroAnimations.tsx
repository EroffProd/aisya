import React, { useState, useEffect } from 'react';
import { Card, Avatar, Tag, Space, Typography, Button, Badge } from 'antd';
import {
  MailOutlined,
  MessageOutlined,
  SoundOutlined,
  CheckCircleOutlined,
  RobotOutlined,
  UserOutlined,
  SendOutlined,
  PaperClipOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

const { Text } = Typography;

type ScenarioType = 'email' | 'chat' | 'sales';

const HeroAnimations: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('email');
  const [scenarioStep, setScenarioStep] = useState(0);

  useEffect(() => {
    // Auto-rotate scenarios every 10 seconds
    const scenarioTimer = setInterval(() => {
      setActiveScenario(prev => {
        if (prev === 'email') return 'chat';
        if (prev === 'chat') return 'sales';
        return 'email';
      });
      setScenarioStep(0);
    }, 10000);

    return () => clearInterval(scenarioTimer);
  }, []);

  useEffect(() => {
    // Steps animation within each scenario
    const stepTimer = setInterval(() => {
      setScenarioStep(prev => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(stepTimer);
  }, [activeScenario]);

  const scenarios = [
    { key: 'email', icon: <MailOutlined />, label: 'Email' },
    { key: 'chat', icon: <MessageOutlined />, label: 'Chat' },
    { key: 'sales', icon: <SoundOutlined />, label: 'Sales' }
  ];

  return (
    <div className="hero-animations">
      {/* Scenario Indicators */}
      <div className="scenario-indicators">
        {scenarios.map((scenario) => (
          <button
            key={scenario.key}
            className={`scenario-indicator ${activeScenario === scenario.key ? 'active' : ''}`}
            onClick={() => {
              setActiveScenario(scenario.key as ScenarioType);
              setScenarioStep(0);
            }}
          >
            <span className="indicator-icon">{scenario.icon}</span>
            <span className="indicator-label">{scenario.label}</span>
          </button>
        ))}
      </div>

      {/* Animation Container */}
      <div className="animation-container">
        <div className={`animation-scene ${activeScenario === 'email' ? 'active' : ''}`}>
          <EmailScenario step={scenarioStep} />
        </div>
        <div className={`animation-scene ${activeScenario === 'chat' ? 'active' : ''}`}>
          <ChatScenario step={scenarioStep} />
        </div>
        <div className={`animation-scene ${activeScenario === 'sales' ? 'active' : ''}`}>
          <SalesScenario step={scenarioStep} />
        </div>
      </div>

      {/* Progress bar */}
      <div className="scenario-progress">
        <div className="progress-bar" key={activeScenario}></div>
      </div>
    </div>
  );
};

// Email Scenario Component
const EmailScenario: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="email-scenario">
      <Card className="email-window" bordered={false}>
        {/* Email Header */}
        <div className="email-header">
          <Space>
            <MailOutlined style={{ fontSize: 20, color: '#1890ff' }} />
            <Text strong>Входящие письма</Text>
            <Badge count={3} style={{ backgroundColor: '#52c41a' }} />
          </Space>
        </div>

        {/* Email List */}
        <div className="email-list">
          {/* Email 1 */}
          <div className={`email-item ${step >= 1 ? 'visible' : ''}`}>
            <div className="email-content">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Text strong>client@company.com</Text>
                  <Tag color="orange">Важное</Tag>
                </div>
                <Text type="secondary" style={{ fontSize: '12px' }}>Вопрос по заказу #12345</Text>
              </Space>
            </div>
            {step >= 2 && (
              <div className="ai-processing">
                <Space size="small">
                  <Avatar size="small" icon={<RobotOutlined />} style={{ background: '#1890ff' }} />
                  <Text style={{ fontSize: '12px', color: '#1890ff' }}>AI обрабатывает...</Text>
                </Space>
              </div>
            )}
            {step >= 3 && (
              <div className="ai-reply">
                <Card size="small" style={{ background: '#e6f7ff', border: '1px solid #91d5ff' }}>
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      <Text strong style={{ fontSize: '12px' }}>Ответ готов</Text>
                    </Space>
                    <Text style={{ fontSize: '11px' }}>
                      Здравствуйте! Заказ #12345 отправлен. Трек-номер: ABC123...
                    </Text>
                    <Space>
                      <PaperClipOutlined style={{ fontSize: 12 }} />
                      <Text type="secondary" style={{ fontSize: '10px' }}>invoice.pdf</Text>
                    </Space>
                  </Space>
                </Card>
              </div>
            )}
            {step >= 4 && (
              <div className="ai-sent">
                <Tag color="success" icon={<CheckCircleOutlined />}>Отправлено</Tag>
              </div>
            )}
          </div>

          {/* Email 2 */}
          {step >= 2 && (
            <div className={`email-item ${step >= 2 ? 'visible' : ''}`}>
              <div className="email-content">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Text strong>partner@business.ru</Text>
                    <Tag color="blue">Доставка</Tag>
                  </div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Уточнение по срокам</Text>
                </Space>
              </div>
            </div>
          )}

          {/* Email 3 - Spam */}
          {step >= 3 && (
            <div className={`email-item spam ${step >= 4 ? 'deleted' : ''}`}>
              <div className="email-content">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Text strong>spam@promo.com</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>АКЦИЯ! Скидки 90%!</Text>
                </Space>
              </div>
              {step >= 4 && (
                <Tag color="error">Спам</Tag>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

// Chat Scenario Component
const ChatScenario: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="chat-scenario">
      <Card className="chat-window" bordered={false}>
        {/* Chat Header */}
        <div className="chat-header">
          <Space>
            <Avatar icon={<MessageOutlined />} style={{ background: '#1890ff' }} />
            <div>
              <Text strong>Поддержка клиентов</Text>
              <br />
              <Text type="secondary" style={{ fontSize: '11px' }}>AI Агент онлайн</Text>
            </div>
            <Badge status="processing" />
          </Space>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {step >= 1 && (
            <div className="message user-message">
              <Card size="small" style={{ background: '#f0f0f0', maxWidth: '80%' }}>
                <Text style={{ fontSize: '12px' }}>Здравствуйте! Какие у вас тарифы?</Text>
              </Card>
            </div>
          )}

          {step >= 2 && (
            <div className="message ai-message">
              <Space>
                <Avatar size="small" icon={<RobotOutlined />} style={{ background: '#1890ff' }} />
                {step === 2 ? (
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                ) : (
                  <Card size="small" style={{ background: '#e6f7ff', maxWidth: '80%' }}>
                    <Text style={{ fontSize: '12px' }}>
                      Добрый день! У нас 3 тарифа: Стартовый (5000₽/мес), Бизнес (15000₽/мес), Премиум (30000₽/мес).
                    </Text>
                  </Card>
                )}
              </Space>
            </div>
          )}

          {step >= 4 && (
            <div className="message user-message">
              <Card size="small" style={{ background: '#f0f0f0', maxWidth: '80%' }}>
                <Text style={{ fontSize: '12px' }}>Хочу попробовать Бизнес тариф</Text>
              </Card>
            </div>
          )}

          {step >= 4 && (
            <div className="message ai-message">
              <Space>
                <Avatar size="small" icon={<RobotOutlined />} style={{ background: '#1890ff' }} />
                <Card size="small" style={{ background: '#e6f7ff', maxWidth: '80%' }}>
                  <Space direction="vertical" size="small">
                    <Text style={{ fontSize: '12px' }}>
                      Отлично! Бизнес тариф включает: 10 000 запросов, RAG систему, интеграции.
                    </Text>
                    <Button type="primary" size="small" icon={<ThunderboltOutlined />}>
                      Оформить за 15 000₽
                    </Button>
                  </Space>
                </Card>
              </Space>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <Space.Compact style={{ width: '100%' }}>
            <input placeholder="Введите сообщение..." disabled />
            <Button type="primary" icon={<SendOutlined />} disabled />
          </Space.Compact>
        </div>
      </Card>
    </div>
  );
};

// Sales Scenario Component
const SalesScenario: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="sales-scenario">
      {/* Manager Side */}
      <Card className="sales-window manager-side" bordered={false}>
        <div className="sales-header">
          <Space>
            <Avatar icon={<UserOutlined />} style={{ background: '#52c41a' }} />
            <div>
              <Text strong>Менеджер Иван</Text>
              <br />
              <Text type="secondary" style={{ fontSize: '11px' }}>В разговоре</Text>
            </div>
          </Space>
        </div>

        {/* Conversation Transcript */}
        <div className="sales-transcript">
          {step >= 1 && (
            <div className="transcript-line client">
              <Tag color="blue">Клиент</Tag>
              <Text style={{ fontSize: '11px' }}>Расскажите про интеграцию с CRM</Text>
            </div>
          )}

          {step >= 2 && (
            <div className="transcript-line manager">
              <Tag color="green">Менеджер</Tag>
              <Text style={{ fontSize: '11px' }}>Да, конечно! Мы интегрируемся с...</Text>
            </div>
          )}

          {step >= 3 && (
            <div className="transcript-line client">
              <Tag color="blue">Клиент</Tag>
              <Text style={{ fontSize: '11px' }}>А какая стоимость внедрения?</Text>
            </div>
          )}
        </div>
      </Card>

      {/* AI Sufler Side */}
      {step >= 3 && (
        <Card className="sales-window ai-hints" bordered={false}>
          <div className="ai-hint-header">
            <Space>
              <Avatar icon={<RobotOutlined />} style={{ background: '#fa8c16' }} />
              <Text strong style={{ fontSize: '12px' }}>AI Суфлёр</Text>
            </Space>
          </div>

          <div className="hints-list">
            <div className="hint-card recommended">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Space>
                  <ThunderboltOutlined style={{ color: '#faad14' }} />
                  <Text strong style={{ fontSize: '11px' }}>Рекомендация</Text>
                </Space>
                <Text style={{ fontSize: '10px' }}>
                  Стоимость внедрения: от 150 000₽. Упомяните, что первый месяц бесплатно.
                </Text>
              </Space>
            </div>

            {step >= 4 && (
              <div className="hint-card keypoint">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Space>
                    <CheckCircleOutlined style={{ color: '#52c41a' }} />
                    <Text strong style={{ fontSize: '11px' }}>Ключевой момент</Text>
                  </Space>
                  <Text style={{ fontSize: '10px' }}>
                    Клиент спрашивал про аналитику 2 раза - акцентируйте на отчётах.
                  </Text>
                </Space>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default HeroAnimations;
