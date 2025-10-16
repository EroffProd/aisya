import React, { useState, useEffect, useRef } from 'react';
import { Layout, Row, Col, Card, Button, Typography, Space, Tag, Badge, List, Divider, Avatar, Input } from 'antd';
import {
  RocketOutlined,
  MessageOutlined,
  MailOutlined,
  PhoneOutlined,
  SoundOutlined,
  ApiOutlined,
  DatabaseOutlined,
  CloudServerOutlined,
  SettingOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  CloseOutlined,
  StarFilled,
  PaperClipOutlined,
  UserOutlined,
  RobotOutlined,
  SendOutlined,
  DeleteOutlined,
  SearchOutlined
} from '@ant-design/icons';
import HeroAnimations from './HeroAnimations';
import HeroBackground from './HeroBackground';
import ROICalculator from './ROICalculator';
import AITrainingSimulator from './AITrainingSimulator';
import '../styles/AntLanding.css';
import '../styles/HeroAnimations.css';
import '../styles/HeroBackground.css';
import '../styles/ROICalculator.css';
import '../styles/AITrainingSimulator.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface AntLandingProps {
  onGetStarted: () => void;
}

type ProductType = 'chat' | 'email' | 'phone' | 'sufler' | null;

const AntLanding: React.FC<AntLandingProps> = ({ onGetStarted }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [showDemo, setShowDemo] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const handleProductClick = (product: ProductType) => {
    if (selectedProduct === product) {
      setShowDemo(false);
      setTimeout(() => setSelectedProduct(null), 300);
    } else {
      setSelectedProduct(product);
      setShowDemo(true);
      setTimeout(() => {
        demoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const handleCloseDemo = () => {
    setShowDemo(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const features = [
    {
      icon: <DatabaseOutlined />,
      title: 'Обучение Моделей',
      description: 'Fine-tuning на корпоративных данных. Continuous learning и A/B тестирование моделей.',
      tags: ['Custom Training', 'Fine-tuning', 'ML Ops']
    },
    {
      icon: <ApiOutlined />,
      title: 'RAG Системы',
      description: 'Retrieval-Augmented Generation для точных ответов на основе вашей базы знаний.',
      tags: ['Vector DB', 'Semantic Search', 'Context-aware']
    },
    {
      icon: <CloudServerOutlined />,
      title: 'Микросервисная Архитектура',
      description: 'Масштабируемая архитектура с независимыми сервисами для каждой функции.',
      tags: ['Scalable', 'High Availability', 'Cloud Native']
    },
    {
      icon: <SettingOutlined />,
      title: 'Кастомизация',
      description: 'Доработка и настройка решений под конкретные бизнес-процессы вашей компании.',
      tags: ['Custom Workflows', 'CRM/ERP', 'White Label']
    }
  ];

  const products = [
    {
      id: 'chat',
      icon: <MessageOutlined />,
      title: 'AI Чат-Агент',
      description: 'Интеллектуальный чат-бот для автоматизации общения с клиентами на сайте и в мессенджерах',
      tags: ['24/7', 'Мультиязычность', 'Контекстная память'],
      color: '#1890ff'
    },
    {
      id: 'email',
      icon: <MailOutlined />,
      title: 'AI Email-Агент',
      description: 'Автоматическая обработка входящих писем, классификация и генерация ответов',
      tags: ['Автоклассификация', 'Smart Replies', 'Приоритизация'],
      color: '#52c41a'
    },
    {
      id: 'phone',
      icon: <PhoneOutlined />,
      title: 'AI Консультант',
      description: 'Голосовой AI-ассистент для телефонии с распознаванием речи и синтезом голоса',
      tags: ['Speech-to-Text', 'Text-to-Speech', 'NLU'],
      color: '#722ed1'
    },
    {
      id: 'sufler',
      icon: <SoundOutlined />,
      title: 'AI Суфлёр',
      description: 'Система помощи менеджерам продаж в реальном времени с подсказками и рекомендациями',
      tags: ['Real-time Hints', 'Обучение', 'Аналитика'],
      color: '#fa8c16'
    }
  ];

  const stats = [
    { value: '24/7', label: 'Работа без перерывов' },
    { value: '10x', label: 'Ускорение процессов' },
    { value: '87%', label: 'Точность ответов' },
    { value: '< 1s', label: 'Время ответа' }
  ];

  return (
    <Layout className="ant-landing">
      {/* Header with Navigation */}
      <Header className="landing-header">
        <div className="header-content">
          <div className="logo">
            <RocketOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Text strong style={{ fontSize: '20px', color: '#ffffff', marginLeft: '12px' }}>AISYA</Text>
          </div>
          <nav className="header-nav">
            <a href="#hero">Главная</a>
            <a href="#features">Возможности</a>
            <a href="#training">Обучение AI</a>
            <a href="#roi">ROI Калькулятор</a>
            <a href="#products">Продукты</a>
            <a href="https://wa.me/79272550532" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>WhatsApp</a>
            <Button
              type="primary"
              href="https://wa.me/79272550532"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: '16px' }}
            >
              Свяжитесь с нами в WhatsApp
            </Button>
          </nav>
        </div>
      </Header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <HeroBackground />
        <Content className="hero-content">
          <Row gutter={[48, 32]} align="middle" style={{ minHeight: '85vh' }}>
            {/* Left Column - Text Content */}
            <Col xs={24} lg={10}>
              <Space direction="vertical" size="large" className="hero-text-content">
                <Tag color="blue" className="hero-badge">
                  <RocketOutlined /> AI-Powered Business Solutions
                </Tag>

                <Title level={1} className="hero-title">
                  Экосистема <span className="gradient-text">ИИ-Агентов</span>
                </Title>

                <Paragraph className="hero-description">
                  Автоматизируйте бизнес-процессы с помощью передовых AI-агентов.<br />
                  Обучение моделей, RAG системы, микросервисная архитектура.
                </Paragraph>

                <Space size="middle" className="hero-buttons">
                  <Button
                    type="primary"
                    size="large"
                    icon={<RocketOutlined />}
                    href="https://wa.me/79272550532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Свяжитесь с нами в WhatsApp
                  </Button>
                  <Button
                    size="large"
                    icon={<PlayCircleOutlined />}
                    href="#products"
                    className="btn-secondary"
                  >
                    Посмотреть демо
                  </Button>
                </Space>

                <Row gutter={[24, 16]} className="hero-stats-inline">
                  {stats.map((stat, index) => (
                    <Col key={index} xs={12} sm={6}>
                      <div className="stat-item">
                        <div className="stat-number">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Space>
            </Col>

            {/* Right Column - Animated Demo */}
            <Col xs={24} lg={14}>
              <HeroAnimations />
            </Col>
          </Row>
        </Content>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <Content className="section-content">
          <div className="section-header">
            <Title level={2}>Ключевые Возможности</Title>
            <Paragraph className="section-subtitle">
              Полный набор инструментов для создания и управления AI-агентами
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col key={index} xs={24} sm={12} lg={6}>
                <Card
                  hoverable
                  className="feature-card"
                  bordered={false}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <Title level={4}>{feature.title}</Title>
                  <Paragraph>{feature.description}</Paragraph>
                  <Space wrap>
                    {feature.tags.map((tag, i) => (
                      <Tag key={i} color="blue">{tag}</Tag>
                    ))}
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </section>

      {/* AI Training Simulator Section */}
      <section id="training">
        <AITrainingSimulator />
      </section>

      {/* ROI Calculator Section */}
      <section id="roi">
        <ROICalculator />
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <Content className="section-content">
          <div className="section-header">
            <Title level={2}>Наши Продукты</Title>
            <Paragraph className="section-subtitle">
              Выберите решение для вашего бизнеса
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {products.map((product) => (
              <Col key={product.id} xs={24} sm={12} lg={6}>
                <Card
                  hoverable
                  className={`product-card ${selectedProduct === product.id ? 'active' : ''}`}
                  onClick={() => handleProductClick(product.id as ProductType)}
                  bordered={false}
                  style={{ borderTop: `4px solid ${product.color}` }}
                >
                  <div className="product-icon" style={{ color: product.color }}>
                    {product.icon}
                  </div>
                  <Title level={4}>{product.title}</Title>
                  <Paragraph>{product.description}</Paragraph>
                  <Space wrap className="product-tags">
                    {product.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </Space>
                  <Button
                    type="primary"
                    size="large"
                    icon={<PlayCircleOutlined />}
                    className="product-demo-button"
                    style={{ marginTop: '16px', width: '100%' }}
                  >
                    Посмотреть Демо
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </section>

      {/* Demo Section */}
      {selectedProduct && (
        <section
          ref={demoRef}
          className={`demo-section ${showDemo ? 'demo-visible' : ''}`}
        >
          <Content className="section-content">
            <div className="demo-header">
              <Space align="center">
                {selectedProduct === 'chat' && <><MessageOutlined style={{ fontSize: 24, color: '#1890ff' }} /> <Title level={2}>AI Чат-Агент - Демо</Title></>}
                {selectedProduct === 'email' && <><MailOutlined style={{ fontSize: 24, color: '#52c41a' }} /> <Title level={2}>AI Email-Агент - Демо</Title></>}
                {selectedProduct === 'phone' && <><MessageOutlined style={{ fontSize: 24, color: '#722ed1' }} /> <Title level={2}>AI Чат-Консультант - Демо</Title></>}
                {selectedProduct === 'sufler' && <><SoundOutlined style={{ fontSize: 24, color: '#fa8c16' }} /> <Title level={2}>AI Суфлёр - Демо</Title></>}
              </Space>
              <Button
                type="text"
                size="large"
                icon={<CloseOutlined />}
                onClick={handleCloseDemo}
                className="demo-close-btn"
              />
            </div>

            <div className="demo-container">
              {selectedProduct === 'chat' && (
                <ChatDemo />
              )}

              {selectedProduct === 'email' && (
                <EmailDemo />
              )}

              {selectedProduct === 'phone' && (
                <PhoneDemo />
              )}

              {selectedProduct === 'sufler' && (
                <SuflerDemo />
              )}
            </div>
          </Content>
        </section>
      )}

      {/* Footer */}
      <Footer className="landing-footer">
        <div style={{ textAlign: 'center' }}>
          <Title level={4}>AISYA</Title>
          <Space direction="vertical" size="small" style={{ marginTop: '16px' }}>
            <Text style={{ fontSize: '16px' }}>
              📞 <a href="tel:+79272550532" style={{ color: 'inherit' }}>+7 (927) 255-05-32</a>
            </Text>
            <Text style={{ fontSize: '16px' }}>
              ✉️ <a href="mailto:ai-prod@aisya.online" style={{ color: 'inherit' }}>ai-prod@aisya.online</a>
            </Text>
            <Text style={{ fontSize: '16px' }}>
              WhatsApp: <a href="https://wa.me/79272550532" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>wa.me/79272550532</a>
            </Text>
          </Space>
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Text>© 2025 AISYA. Все права защищены.</Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

// Chat Demo Component with Two Scenarios
const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Array<{speaker: string; text: string; type?: string; file?: string; link?: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const runScenarios = () => {
      const timers: NodeJS.Timeout[] = [];
      let currentTime = 0;

      // Scenario 1: Order and Invoice
      const scenario1 = () => {
        setMessages([]);

        // Client asks about product
        timers.push(setTimeout(() => {
          setMessages([{ speaker: 'client', text: 'Здравствуйте! Расскажите, пожалуйста, про товар "Ноутбук ProBook X15"' }]);
        }, currentTime));
        currentTime += 2000;

        // AI responds about product
        timers.push(setTimeout(() => {
          setIsTyping(true);
        }, currentTime));
        currentTime += 1000;

        timers.push(setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: 'Добрый день! ProBook X15 - это профессиональный ноутбук с процессором Intel Core i7, 16GB RAM и SSD 512GB. Отлично подходит для работы и графики. Цена: 89 990₽'
          }]);
        }, currentTime));
        currentTime += 3500;

        // Client asks about delivery
        timers.push(setTimeout(() => {
          setMessages(prev => [...prev, { speaker: 'client', text: 'Какие сроки доставки в Москву?' }]);
        }, currentTime));
        currentTime += 2000;

        // AI responds about delivery
        timers.push(setTimeout(() => {
          setIsTyping(true);
        }, currentTime));
        currentTime += 1000;

        timers.push(setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: 'Доставка по Москве осуществляется курьером в течение 1-2 рабочих дней. Стоимость доставки - 500₽ (бесплатно при заказе от 50 000₽).'
          }]);
        }, currentTime));
        currentTime += 3000;

        // Client requests invoice
        timers.push(setTimeout(() => {
          setMessages(prev => [...prev, { speaker: 'client', text: 'Отлично! Выставите счет на оплату' }]);
        }, currentTime));
        currentTime += 2000;

        // AI generates invoice
        timers.push(setTimeout(() => {
          setIsTyping(true);
        }, currentTime));
        currentTime += 1500;

        timers.push(setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: 'Конечно! Я подготовил для вас счет на оплату.',
            type: 'invoice'
          }]);
        }, currentTime));
        currentTime += 2000;

        timers.push(setTimeout(() => {
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: '',
            type: 'file',
            file: 'Счет_№12345_ProBook_X15.pdf'
          }]);
        }, currentTime));
        currentTime += 3000;

        return currentTime;
      };

      // Scenario 2: Product recommendation and cart
      const scenario2 = (startTime: number) => {
        setMessages([]);

        // Client asks for GPU recommendation
        timers.push(setTimeout(() => {
          setMessages([{ speaker: 'client', text: 'Посоветуйте видеокарту для работы с 3D графикой' }]);
        }, startTime));
        startTime += 2000;

        // AI typing
        timers.push(setTimeout(() => {
          setIsTyping(true);
        }, startTime));
        startTime += 1500;

        // AI recommends options
        timers.push(setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: 'Для работы с 3D графикой рекомендую следующие варианты:\n\n1️⃣ NVIDIA RTX 4070 Ti - 85 990₽\n   • 12GB GDDR6X, отлично для профессиональной работы\n\n2️⃣ NVIDIA RTX 4080 - 129 990₽\n   • 16GB GDDR6X, топовый выбор для сложных проектов\n\n3️⃣ AMD Radeon RX 7900 XTX - 99 990₽\n   • 24GB GDDR6, лучшая цена/производительность'
          }]);
        }, startTime));
        startTime += 4000;

        // Client chooses option
        timers.push(setTimeout(() => {
          setMessages(prev => [...prev, { speaker: 'client', text: 'Возьму RTX 4070 Ti' }]);
        }, startTime));
        startTime += 2000;

        // AI adds to cart
        timers.push(setTimeout(() => {
          setIsTyping(true);
        }, startTime));
        startTime += 1000;

        timers.push(setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: '✅ Отличный выбор! Я добавил NVIDIA RTX 4070 Ti в вашу корзину.',
            type: 'success'
          }]);
        }, startTime));
        startTime += 2500;

        // AI provides payment link
        timers.push(setTimeout(() => {
          setMessages(prev => [...prev, {
            speaker: 'ai',
            text: 'Вот ссылка для оплаты:',
            type: 'link',
            link: 'https://shop.aisya.ru/cart/checkout?id=RTX4070Ti'
          }]);
        }, startTime));
        startTime += 3000;

        return startTime;
      };

      // Run both scenarios
      currentTime = scenario1();
      currentTime += 2000; // Pause between scenarios
      currentTime = scenario2(currentTime);
      currentTime += 2000;

      // Loop
      timers.push(setTimeout(() => {
        runScenarios();
      }, currentTime));

      return timers;
    };

    const timers = runScenarios();
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="chat-demo">
      <Card style={{ maxWidth: 900, margin: '0 auto' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%)',
            borderRadius: '12px',
            border: '1px solid #91d5ff'
          }}>
            <Row gutter={[16, 16]} align="middle">
              <Col>
                <Avatar size={64} icon={<MessageOutlined />} style={{
                  background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                  boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
                }} />
              </Col>
              <Col flex="auto">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Title level={4} style={{ margin: 0, color: '#096dd9' }}>AI Чат-Агент</Title>
                  <Space wrap size="small">
                    <Tag color="blue" icon={<CheckCircleOutlined />}>24/7 Доступность</Tag>
                    <Tag color="cyan" icon={<RocketOutlined />}>Мгновенные ответы</Tag>
                    <Tag color="geekblue" icon={<ApiOutlined />}>Контекстная память</Tag>
                    <Tag color="blue" icon={<DatabaseOutlined />}>Мультиязычность</Tag>
                  </Space>
                </Space>
              </Col>
            </Row>
          </div>

          <Divider style={{ margin: '8px 0' }} />

          <div ref={chatContainerRef} className="chat-transcript" style={{ minHeight: '450px', maxHeight: '450px', overflow: 'auto', padding: '8px' }}>
            <Space direction="vertical" style={{ width: '100%' }} size="middle">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message chat-${msg.speaker}`}>
                  {msg.type === 'file' ? (
                    <Card
                      size="small"
                      className="file-card"
                      style={{
                        maxWidth: '400px',
                        marginLeft: 'auto',
                        background: 'linear-gradient(135deg, #e6f7ff 0%, #f0f8ff 100%)',
                        border: '2px solid #1890ff'
                      }}
                    >
                      <Space>
                        <PaperClipOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                        <div>
                          <Text strong>{msg.file}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: '12px' }}>245 KB • PDF</Text>
                        </div>
                        <Button type="primary" size="small">Скачать</Button>
                      </Space>
                    </Card>
                  ) : msg.type === 'link' ? (
                    <Card
                      size="small"
                      style={{
                        maxWidth: '500px',
                        marginLeft: 'auto',
                        background: '#f0f8ff',
                        borderLeft: '4px solid #1890ff'
                      }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Text>{msg.text}</Text>
                        <Button type="link" href={msg.link} target="_blank" icon={<ArrowRightOutlined />}>
                          {msg.link}
                        </Button>
                      </Space>
                    </Card>
                  ) : (
                    <Card
                      size="small"
                      style={{
                        maxWidth: '70%',
                        marginLeft: msg.speaker === 'ai' ? 0 : 'auto',
                        marginRight: msg.speaker === 'ai' ? 'auto' : 0,
                        background: msg.speaker === 'ai' ? '#f0f8ff' : '#f5f5f5',
                        borderLeft: `4px solid ${msg.speaker === 'ai' ? '#1890ff' : '#8c8c8c'}`,
                        ...(msg.type === 'success' && { background: '#f6ffed', borderLeft: '4px solid #52c41a' }),
                        ...(msg.type === 'invoice' && { background: '#fff7e6', borderLeft: '4px solid #faad14' })
                      }}
                    >
                      <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <Text strong style={{ color: msg.speaker === 'ai' ? '#1890ff' : '#8c8c8c' }}>
                          {msg.speaker === 'ai' ? '🤖 AI Агент' : '👤 Клиент'}
                        </Text>
                        <Text style={{ whiteSpace: 'pre-line' }}>{msg.text}</Text>
                      </Space>
                    </Card>
                  )}
                </div>
              ))}
              {isTyping && (
                <Card
                  size="small"
                  style={{
                    maxWidth: '70%',
                    background: '#f0f8ff',
                    borderLeft: '4px solid #1890ff'
                  }}
                >
                  <Space>
                    <div className="pulse-indicator"></div>
                    <Text type="secondary">AI печатает...</Text>
                  </Space>
                </Card>
              )}
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
};

// Email Demo Component with Multi-Email Animated Workflow
const EmailDemo: React.FC = () => {
  const [emails, setEmails] = useState<any[]>([]);
  const [spamEmails, setSpamEmails] = useState<any[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [step, setStep] = useState<string>('idle');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({ from: '', subject: '' });
  const [aiReplyText, setAiReplyText] = useState('');
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [spamDetected, setSpamDetected] = useState(false);
  const [movingToSpam, setMovingToSpam] = useState(false);

  const emailsData = [
    {
      id: 1,
      from: 'client@example.com',
      subject: 'Запрос счета на продукцию',
      preview: 'Добрый день! Пожалуйста, выставите счет на...',
      body: 'Добрый день! Пожалуйста, выставите счет на продукцию по заказу №A1234. Нужно 50 единиц товара. Спасибо!',
      time: 'Сейчас',
      unread: true,
      aiReply: 'Здравствуйте! Я подготовил счет на 50 единиц товара по заказу №A1234. Счет прикреплен к письму. Срок оплаты - 5 рабочих дней. С уважением, AI Агент AISYA.',
      attachment: 'Счет_A1234.pdf'
    },
    {
      id: 2,
      from: 'partner@logistics.ru',
      subject: 'Вопрос по доставке товара',
      preview: 'Здравствуйте! Уточните, пожалуйста, сроки доставки...',
      body: 'Здравствуйте! Уточните, пожалуйста, сроки доставки товара в Санкт-Петербург. Адрес доставки: ул. Невская, 123. Когда можно ожидать?',
      time: 'Сейчас',
      unread: true,
      aiReply: 'Здравствуйте! Доставка в Санкт-Петербург занимает 2-3 рабочих дня. По адресу ул. Невская, 123 доставка будет осуществлена курьерской службой. Стоимость доставки - 500₽. С уважением, AI Агент AISYA.',
      attachment: null
    },
    {
      id: 3,
      from: 'promo@mega-sale.com',
      subject: '🎉 СУПЕР АКЦИЯ! Скидки до 90%!',
      preview: 'Только сегодня! Невероятные скидки на все товары...',
      body: 'СУПЕР ПРЕДЛОЖЕНИЕ! Скидки до 90%! Успейте купить! Кликните здесь для получения скидки! Торопитесь, предложение ограничено!',
      time: 'Сейчас',
      unread: true,
      isSpam: true
    }
  ];

  useEffect(() => {
    const runDemo = () => {
      const timers: NodeJS.Timeout[] = [];
      let intervalId: any;

      const processEmail = (emailIndex: number, startTime: number) => {
        const email = emailsData[emailIndex];

        // Show notification
        timers.push(setTimeout(() => {
          setNotificationData({ from: email.from, subject: email.subject });
          setShowNotification(true);
        }, startTime));

        // Add email to list
        timers.push(setTimeout(() => {
          setEmails(prev => [{ ...email, index: emailIndex }, ...prev]);
          setShowNotification(false);
          setCurrentEmailIndex(emailIndex);
        }, startTime + 1500));

        // Open email
        timers.push(setTimeout(() => {
          setSelectedEmail(0);
          setStep(`opening-${emailIndex}`);
        }, startTime + 2500));

        // Handle spam email differently
        if (email.isSpam) {
          // AI Processing
          timers.push(setTimeout(() => {
            setIsProcessing(true);
            setStep(`processing-${emailIndex}`);
          }, startTime + 3500));

          // Detect spam
          timers.push(setTimeout(() => {
            setIsProcessing(false);
            setSpamDetected(true);
            setStep(`spam-detected-${emailIndex}`);
          }, startTime + 5000));

          // Move to spam
          timers.push(setTimeout(() => {
            setMovingToSpam(true);
            setStep(`moving-to-spam-${emailIndex}`);
          }, startTime + 6500));

          // Complete spam move
          timers.push(setTimeout(() => {
            setSpamEmails(prev => [email, ...prev]);
            setEmails(prev => prev.filter((_, idx) => idx !== 0));
            setMovingToSpam(false);
            setSpamDetected(false);
            setSelectedEmail(null);
            setStep('idle');
          }, startTime + 8000));

          return startTime + 9000;
        } else {
          // Normal email processing
          // AI Processing
          timers.push(setTimeout(() => {
            setIsProcessing(true);
            setStep(`processing-${emailIndex}`);
          }, startTime + 3500));

          // Start typing
          timers.push(setTimeout(() => {
            setIsProcessing(false);
            setStep(`typing-${emailIndex}`);
            let currentText = '';
            let charIndex = 0;

            if (email.aiReply) {
              intervalId = setInterval(() => {
                if (charIndex < email.aiReply!.length) {
                  currentText += email.aiReply![charIndex];
                  setAiReplyText(currentText);
                  charIndex++;
                } else {
                  clearInterval(intervalId);
                }
              }, 40);
            }
          }, startTime + 5000));

          // Attach file if exists
          if (email.attachment) {
            timers.push(setTimeout(() => {
              setAttachedFile(email.attachment);
              setStep(`attaching-${emailIndex}`);
            }, startTime + 8000));
          }

          // Send
          timers.push(setTimeout(() => {
            setStep(`sending-${emailIndex}`);
          }, startTime + 9500));

          // Success
          timers.push(setTimeout(() => {
            setStep(`sent-${emailIndex}`);
          }, startTime + 10500));

          // Clear for next email
          timers.push(setTimeout(() => {
            setSelectedEmail(null);
            setAiReplyText('');
            setAttachedFile(null);
            setStep('idle');
          }, startTime + 11500));

          return startTime + 12000;
        }
      };

      // Process all three emails
      let currentTime = 1000;
      currentTime = processEmail(0, currentTime); // First email (invoice)
      currentTime = processEmail(1, currentTime); // Second email (delivery)
      currentTime = processEmail(2, currentTime); // Third email (spam)

      // Reset and loop
      timers.push(setTimeout(() => {
        setEmails([]);
        setSpamEmails([]);
        setSelectedEmail(null);
        setStep('idle');
        setAiReplyText('');
        setAttachedFile(null);
        setIsProcessing(false);
        setSpamDetected(false);
        setMovingToSpam(false);
        setCurrentEmailIndex(0);
      }, currentTime));

      return timers;
    };

    const timers = runDemo();
    const loopInterval = setInterval(() => {
      timers.forEach(timer => clearTimeout(timer));
      runDemo();
    }, 36000); // Loop every 36 seconds

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className="email-demo">
      {/* Notification */}
      {showNotification && (
        <div className="email-notification">
          <Card style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1000,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            minWidth: 300
          }}>
            <Space>
              <Badge status="processing" />
              <div>
                <Text strong>Новое письмо!</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>{notificationData.from}</Text>
              </div>
            </Space>
          </Card>
        </div>
      )}

      <Row gutter={0} style={{ height: '600px', border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Email List */}
        <Col span={8} style={{ borderRight: '1px solid #f0f0f0', background: '#fafafa', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', background: '#fff' }}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Поиск писем..."
              size="large"
            />
          </div>

          {/* Inbox Section */}
          <div style={{ flex: 1, overflow: 'auto' }}>
            <div style={{ padding: '12px 16px', background: '#f0f0f0', borderBottom: '1px solid #d9d9d9' }}>
              <Space>
                <MailOutlined />
                <Text strong>Входящие</Text>
                <Badge count={emails.filter(e => e.unread).length} style={{ backgroundColor: '#1890ff' }} />
              </Space>
            </div>
            <List
              dataSource={emails}
              renderItem={(email, index) => (
                <List.Item
                  key={email.id}
                  className={`email-list-item ${selectedEmail === index ? 'email-selected' : ''} ${email.unread ? 'email-unread' : ''} ${index === 0 && step.includes('opening') ? 'email-new-arrive' : ''} ${movingToSpam && index === 0 ? 'email-moving-to-spam' : ''}`}
                  style={{
                    padding: '16px',
                    cursor: 'pointer',
                    background: selectedEmail === index ? '#e6f7ff' : '#fff',
                    borderBottom: '1px solid #f0f0f0'
                  }}
                >
                  <List.Item.Meta
                    title={
                      <Space>
                        {email.unread && <Badge status="processing" />}
                        <Text strong={email.unread}>{email.from}</Text>
                      </Space>
                    }
                    description={
                      <>
                        <div style={{ fontWeight: email.unread ? 600 : 400, marginBottom: 4 }}>{email.subject}</div>
                        <Text type="secondary" style={{ fontSize: '12px' }}>{email.preview}</Text>
                      </>
                    }
                  />
                </List.Item>
              )}
            />

            {/* Spam Section */}
            <div style={{ padding: '12px 16px', background: '#f0f0f0', borderBottom: '1px solid #d9d9d9', marginTop: 16 }}>
              <Space>
                <DeleteOutlined style={{ color: '#ff4d4f' }} />
                <Text strong style={{ color: '#ff4d4f' }}>Спам</Text>
                {spamEmails.length > 0 && <Badge count={spamEmails.length} style={{ backgroundColor: '#ff4d4f' }} />}
              </Space>
            </div>
            {spamEmails.length > 0 && (
              <List
                dataSource={spamEmails}
                renderItem={(email) => (
                  <List.Item
                    key={email.id}
                    className="spam-email-item"
                    style={{
                      padding: '16px',
                      background: '#fff1f0',
                      borderBottom: '1px solid #f0f0f0',
                      opacity: 0.7
                    }}
                  >
                    <List.Item.Meta
                      title={<Text delete type="secondary">{email.from}</Text>}
                      description={<Text type="secondary" style={{ fontSize: '12px' }}>{email.subject}</Text>}
                    />
                  </List.Item>
                )}
              />
            )}
          </div>
        </Col>

        {/* Email Content */}
        <Col span={16} style={{ background: '#fff', display: 'flex', flexDirection: 'column' }}>
          {selectedEmail !== null && emails[selectedEmail] ? (
            <>
              <div style={{ padding: '20px', borderBottom: '1px solid #f0f0f0' }} className={step.includes('opening') ? 'email-opening' : ''}>
                <Space direction="vertical" style={{ width: '100%' }} size="small">
                  <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                    <Title level={4} style={{ margin: 0 }}>{emails[selectedEmail].subject}</Title>
                  </Space>
                  <Space>
                    <Avatar icon={<UserOutlined />} />
                    <div>
                      <div><Text strong>{emails[selectedEmail].from}</Text></div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>{emails[selectedEmail].time}</Text>
                    </div>
                  </Space>
                </Space>
              </div>

              <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
                <Paragraph>{emails[selectedEmail].body}</Paragraph>

                {/* AI Processing Indicator */}
                {isProcessing && (
                  <div className="ai-processing" style={{ marginTop: 20 }}>
                    <Card style={{ background: '#f0f8ff', border: '2px dashed #1890ff' }}>
                      <Space>
                        <div className="pulse-indicator"></div>
                        <Text strong>AI анализирует письмо...</Text>
                      </Space>
                    </Card>
                  </div>
                )}

                {/* Spam Detection */}
                {spamDetected && (
                  <div className="spam-detected" style={{ marginTop: 20 }}>
                    <Card style={{
                      background: 'linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%)',
                      border: '2px solid #ff4d4f',
                      borderRadius: '8px'
                    }}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Space>
                          <Avatar icon={<RobotOutlined />} style={{ background: '#ff4d4f' }} />
                          <Tag color="error" icon={<DeleteOutlined />}>AI обнаружил спам</Tag>
                        </Space>
                        <Text strong style={{ color: '#ff4d4f' }}>
                          Это письмо содержит признаки спама и рекламы. Перемещаю в папку "Спам"...
                        </Text>
                      </Space>
                    </Card>
                  </div>
                )}

                {/* AI Reply Section */}
                {(step.includes('typing') || step.includes('attaching') || step.includes('sending') || step.includes('sent')) && !spamDetected && (
                  <div className="ai-reply-section" style={{ marginTop: 20 }}>
                    <Divider />
                    <Card
                      style={{
                        background: 'linear-gradient(135deg, #e6f7ff 0%, #f0f8ff 100%)',
                        border: '2px solid #1890ff',
                        borderRadius: '8px'
                      }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Space>
                          <Avatar icon={<RobotOutlined />} style={{ background: '#1890ff' }} />
                          <Tag color="blue" icon={<CheckCircleOutlined />}>AI генерирует ответ</Tag>
                        </Space>

                        <div style={{ minHeight: '60px' }}>
                          <Text>{aiReplyText}</Text>
                          {step.includes('typing') && <span className="typing-cursor">|</span>}
                        </div>

                        {/* Attached File */}
                        {attachedFile && (
                          <div className={`attached-file ${step.includes('attaching') ? 'file-attaching' : ''}`}>
                            <Card size="small" style={{ background: '#f0f0f0', marginTop: 8 }}>
                              <Space>
                                <PaperClipOutlined style={{ fontSize: 18, color: '#1890ff' }} />
                                <Text strong>{attachedFile}</Text>
                                <Tag color="green">156 KB</Tag>
                              </Space>
                            </Card>
                          </div>
                        )}

                        <Space style={{ width: '100%', justifyContent: 'flex-end', marginTop: 8 }}>
                          {step.includes('sent') ? (
                            <Tag color="success" icon={<CheckCircleOutlined />} style={{ fontSize: '14px' }}>
                              Отправлено успешно!
                            </Tag>
                          ) : (
                            <>
                              <Button icon={<DeleteOutlined />}>Отклонить</Button>
                              <Button
                                type="primary"
                                icon={<SendOutlined />}
                                loading={step.includes('sending')}
                                className={step.includes('sending') ? 'button-sending' : ''}
                              >
                                {step.includes('sending') ? 'Отправка...' : 'Отправить'}
                              </Button>
                            </>
                          )}
                        </Space>
                      </Space>
                    </Card>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Text type="secondary">Выберите письмо для просмотра</Text>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

// Phone Consultant Demo Component with Animated Flow Diagram
const PhoneDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [clientVoice, setClientVoice] = useState('');
  const [sttText, setSttText] = useState('');
  const [agentResponse, setAgentResponse] = useState('');
  const [ttsVoice, setTtsVoice] = useState('');

  useEffect(() => {
    const runAnimation = () => {
      const timers: NodeJS.Timeout[] = [];
      let currentTime = 0;

      // Step 1: Incoming call
      timers.push(setTimeout(() => {
        setActiveStep(1);
        setClientVoice('Звонок поступает...');
        setSttText('');
        setAgentResponse('');
        setTtsVoice('');
      }, currentTime));
      currentTime += 2000;

      // Step 2: Client speaking (voice input)
      timers.push(setTimeout(() => {
        setActiveStep(2);
        setClientVoice('Добрый день! Какие у вас есть условия доставки?');
      }, currentTime));
      currentTime += 2500;

      // Step 3: STT Processing
      timers.push(setTimeout(() => {
        setActiveStep(3);
        setSttText('Обработка речи...');
      }, currentTime));
      currentTime += 1500;

      // Step 4: STT Result
      timers.push(setTimeout(() => {
        setActiveStep(4);
        setSttText('Добрый день! Какие у вас есть условия доставки?');
      }, currentTime));
      currentTime += 2000;

      // Step 5: AI Agent Processing with RAG
      timers.push(setTimeout(() => {
        setActiveStep(5);
        setAgentResponse('Анализ запроса и поиск в базе знаний...');
      }, currentTime));
      currentTime += 2000;

      // Step 6: AI Agent Response Generated
      timers.push(setTimeout(() => {
        setActiveStep(6);
        setAgentResponse('Добрый день! Доставка осуществляется курьером в течение 1-2 рабочих дней. По Москве - бесплатно при заказе от 3000₽, в регионы - от 500₽.');
      }, currentTime));
      currentTime += 2500;

      // Step 7: TTS Processing
      timers.push(setTimeout(() => {
        setActiveStep(7);
        setTtsVoice('Синтез речи...');
      }, currentTime));
      currentTime += 1500;

      // Step 8: TTS Output
      timers.push(setTimeout(() => {
        setActiveStep(8);
        setTtsVoice('Голосовой ответ передается клиенту');
      }, currentTime));
      currentTime += 2500;

      // Reset and loop
      timers.push(setTimeout(() => {
        setActiveStep(0);
        setClientVoice('');
        setSttText('');
        setAgentResponse('');
        setTtsVoice('');
      }, currentTime));
      currentTime += 1000;

      timers.push(setTimeout(() => {
        runAnimation();
      }, currentTime));

      return timers;
    };

    const timers = runAnimation();
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const getStepStyle = (step: number) => {
    return {
      opacity: activeStep >= step ? 1 : 0.3,
      transform: activeStep === step ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.3s ease',
      border: activeStep === step ? '2px solid #722ed1' : '2px solid transparent'
    };
  };

  return (
    <div className="phone-demo">
      <Card style={{ maxWidth: 900, margin: '0 auto' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #f0e6ff 0%, #d3adf7 100%)',
            borderRadius: '12px',
            border: '1px solid #b37feb'
          }}>
            <Row gutter={[16, 16]} align="middle">
              <Col>
                <Avatar size={64} icon={<PhoneOutlined />} style={{
                  background: 'linear-gradient(135deg, #722ed1 0%, #531dab 100%)',
                  boxShadow: '0 4px 12px rgba(114, 46, 209, 0.3)'
                }} />
              </Col>
              <Col flex="auto">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Title level={4} style={{ margin: 0, color: '#531dab' }}>AI Консультант</Title>
                  <Space wrap size="small">
                    <Tag color="purple" icon={<SoundOutlined />}>Speech-to-Text</Tag>
                    <Tag color="magenta" icon={<MessageOutlined />}>Text-to-Speech</Tag>
                    <Tag color="purple" icon={<ApiOutlined />}>Natural Language</Tag>
                    <Tag color="geekblue" icon={<CheckCircleOutlined />}>Голосовой AI</Tag>
                  </Space>
                </Space>
              </Col>
            </Row>
          </div>

          <Divider style={{ margin: '8px 0' }} />

          <div style={{ minHeight: '450px', padding: '20px' }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">

              {/* Step 1-2: Incoming Call & Client Voice */}
              <Card
                style={{
                  ...getStepStyle(1),
                  background: 'linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%)',
                  borderRadius: '12px'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Avatar icon={<PhoneOutlined />} style={{ background: '#1890ff' }} />
                    <Text strong style={{ fontSize: '16px', color: '#096dd9' }}>
                      {activeStep >= 2 ? '📞 Входящий звонок - Клиент говорит' : '📞 Входящий звонок'}
                    </Text>
                  </Space>
                  {activeStep >= 2 && clientVoice && (
                    <div style={{
                      padding: '12px',
                      background: '#fff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #1890ff'
                    }}>
                      <Space>
                        <SoundOutlined style={{ fontSize: 20, color: '#1890ff' }} />
                        {activeStep === 2 && <div className="pulse-indicator"></div>}
                        <Text style={{ fontSize: '14px' }}>{clientVoice}</Text>
                      </Space>
                    </div>
                  )}
                </Space>
              </Card>

              {/* Arrow Down */}
              {activeStep >= 3 && (
                <div style={{ textAlign: 'center' }}>
                  <ArrowRightOutlined rotate={90} style={{ fontSize: 24, color: '#722ed1' }} />
                </div>
              )}

              {/* Step 3-4: STT Processing */}
              <Card
                style={{
                  ...getStepStyle(3),
                  background: 'linear-gradient(135deg, #f9f0ff 0%, #efdbff 100%)',
                  borderRadius: '12px'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Avatar icon={<SoundOutlined />} style={{ background: '#722ed1' }} />
                    <Text strong style={{ fontSize: '16px', color: '#531dab' }}>🎤 Speech-to-Text (STT)</Text>
                    {activeStep === 3 && <Tag color="purple">Обработка...</Tag>}
                    {activeStep >= 4 && <Tag color="success" icon={<CheckCircleOutlined />}>Готово</Tag>}
                  </Space>
                  {activeStep >= 4 && sttText && (
                    <div style={{
                      padding: '12px',
                      background: '#fff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #722ed1'
                    }}>
                      <Text style={{ fontSize: '14px', fontFamily: 'monospace' }}>{sttText}</Text>
                    </div>
                  )}
                </Space>
              </Card>

              {/* Arrow Down */}
              {activeStep >= 5 && (
                <div style={{ textAlign: 'center' }}>
                  <ArrowRightOutlined rotate={90} style={{ fontSize: 24, color: '#722ed1' }} />
                </div>
              )}

              {/* Step 5-6: AI Agent + RAG */}
              <Card
                style={{
                  ...getStepStyle(5),
                  background: 'linear-gradient(135deg, #e6fffb 0%, #b5f5ec 100%)',
                  borderRadius: '12px'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Avatar icon={<ApiOutlined />} style={{ background: '#13c2c2' }} />
                    <Text strong style={{ fontSize: '16px', color: '#08979c' }}>🤖 AI Агент + RAG</Text>
                    {activeStep === 5 && <Tag color="cyan">Обработка...</Tag>}
                    {activeStep >= 6 && <Tag color="success" icon={<CheckCircleOutlined />}>Готово</Tag>}
                  </Space>
                  {activeStep === 5 && (
                    <div style={{
                      padding: '12px',
                      background: '#fff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #13c2c2'
                    }}>
                      <Space>
                        <DatabaseOutlined style={{ fontSize: 18, color: '#13c2c2' }} />
                        <div className="pulse-indicator"></div>
                        <Text type="secondary">Поиск в базе знаний...</Text>
                      </Space>
                    </div>
                  )}
                  {activeStep >= 6 && agentResponse && (
                    <div style={{
                      padding: '12px',
                      background: '#fff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #13c2c2'
                    }}>
                      <Text style={{ fontSize: '14px' }}>{agentResponse}</Text>
                    </div>
                  )}
                </Space>
              </Card>

              {/* Arrow Down */}
              {activeStep >= 7 && (
                <div style={{ textAlign: 'center' }}>
                  <ArrowRightOutlined rotate={90} style={{ fontSize: 24, color: '#722ed1' }} />
                </div>
              )}

              {/* Step 7-8: TTS Processing */}
              <Card
                style={{
                  ...getStepStyle(7),
                  background: 'linear-gradient(135deg, #fff0f6 0%, #ffd6e7 100%)',
                  borderRadius: '12px'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Avatar icon={<MessageOutlined />} style={{ background: '#eb2f96' }} />
                    <Text strong style={{ fontSize: '16px', color: '#c41d7f' }}>🔊 Text-to-Speech (TTS)</Text>
                    {activeStep === 7 && <Tag color="magenta">Синтез...</Tag>}
                    {activeStep >= 8 && <Tag color="success" icon={<CheckCircleOutlined />}>Отправлено</Tag>}
                  </Space>
                  {activeStep >= 7 && ttsVoice && (
                    <div style={{
                      padding: '12px',
                      background: '#fff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #eb2f96'
                    }}>
                      <Space>
                        <SoundOutlined style={{ fontSize: 20, color: '#eb2f96' }} />
                        {activeStep === 7 && <div className="pulse-indicator"></div>}
                        <Text style={{ fontSize: '14px' }}>{ttsVoice}</Text>
                      </Space>
                    </div>
                  )}
                </Space>
              </Card>

            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
};

// Sufler Demo Component
const SuflerDemo: React.FC = () => {
  const [transcript, setTranscript] = useState<Array<{ id: string; type: 'manager' | 'client'; text: string; time: string }>>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [hints, setHints] = useState<Array<{ id: string; type: string; title: string; text: string }>>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const runDemo = () => {
      const timers: NodeJS.Timeout[] = [];
      let currentTime = 0;

      // Step 1: Client greeting
      timers.push(setTimeout(() => {
        setActiveStep(1);
        setTranscript([{
          id: '1',
          type: 'client',
          text: 'Добрый день! Расскажите, пожалуйста, подробнее про ваше решение для автоматизации продаж.',
          time: '14:23:10'
        }]);
      }, currentTime));
      currentTime += 2000;

      // Step 2: Show contextual hint
      timers.push(setTimeout(() => {
        setActiveStep(2);
        setHints([{
          id: 'h1',
          type: 'insight',
          title: '💡 Контекстная подсказка',
          text: 'Клиент интересуется автоматизацией. Акцентируйте внимание на экономии времени и повышении конверсии.'
        }]);
      }, currentTime));
      currentTime += 2500;

      // Step 3: Manager response
      timers.push(setTimeout(() => {
        setActiveStep(3);
        setTranscript(prev => [...prev, {
          id: '2',
          type: 'manager',
          text: 'Здравствуйте! Наше решение AISYA автоматизирует работу с клиентами через AI-агентов. Это экономит до 70% времени менеджеров.',
          time: '14:23:18'
        }]);
      }, currentTime));
      currentTime += 3000;

      // Step 4: Client question
      timers.push(setTimeout(() => {
        setActiveStep(4);
        setTranscript(prev => [...prev, {
          id: '3',
          type: 'client',
          text: 'А какие каналы поддерживаются? Нам нужны чат, email и телефония.',
          time: '14:23:25'
        }]);
      }, currentTime));
      currentTime += 2500;

      // Step 5: Detect question
      timers.push(setTimeout(() => {
        setActiveStep(5);
        setCurrentQuestion('Какие каналы поддерживаются?');
      }, currentTime));
      currentTime += 1000;

      // Step 6: Generate answer
      timers.push(setTimeout(() => {
        setActiveStep(6);
        setCurrentAnswer('Обработка запроса...');
      }, currentTime));
      currentTime += 1500;

      // Step 7: Show answer
      timers.push(setTimeout(() => {
        setActiveStep(7);
        setCurrentAnswer('Мы поддерживаем все основные каналы: AI Чат-Агент для сайта и мессенджеров, AI Email-Агент для автоматической обработки писем, и AI Консультант для голосовой телефонии с распознаванием речи.');
      }, currentTime));
      currentTime += 3000;

      // Step 8: Additional hint
      timers.push(setTimeout(() => {
        setActiveStep(8);
        setHints(prev => [...prev, {
          id: 'h2',
          type: 'keypoint',
          title: '📌 Ключевой момент',
          text: 'Упомяните интеграцию с CRM системами и возможность кастомизации под бизнес-процессы.'
        }]);
      }, currentTime));
      currentTime += 2000;

      // Step 9: Manager uses the answer
      timers.push(setTimeout(() => {
        setActiveStep(9);
        setTranscript(prev => [...prev, {
          id: '4',
          type: 'manager',
          text: 'Да, конечно! Мы поддерживаем чат-агента, email-агента и голосовую телефонию. Все интегрируется с CRM и настраивается под ваши процессы.',
          time: '14:23:35'
        }]);
        setCurrentQuestion('');
        setCurrentAnswer('');
      }, currentTime));
      currentTime += 3500;

      // Step 10: New hint - pricing
      timers.push(setTimeout(() => {
        setActiveStep(10);
        setHints(prev => [...prev, {
          id: 'h3',
          type: 'action',
          title: '⚡ Рекомендация',
          text: 'Клиент заинтересован. Предложите демонстрацию и обсудите тарифные планы.'
        }]);
      }, currentTime));
      currentTime += 2500;

      // Step 11: Client interested
      timers.push(setTimeout(() => {
        setActiveStep(11);
        setTranscript(prev => [...prev, {
          id: '5',
          type: 'client',
          text: 'Звучит интересно! А какова стоимость решения?',
          time: '14:23:42'
        }]);
      }, currentTime));
      currentTime += 2000;

      // Reset and loop
      timers.push(setTimeout(() => {
        setTranscript([]);
        setCurrentQuestion('');
        setCurrentAnswer('');
        setHints([]);
        setActiveStep(0);
      }, currentTime));
      currentTime += 1000;

      timers.push(setTimeout(() => {
        runDemo();
      }, currentTime));

      return timers;
    };

    const timers = runDemo();
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const getHintColor = (type: string) => {
    switch (type) {
      case 'insight': return { bg: '#fffbeb', border: '#fbbf24', icon: '💡' };
      case 'keypoint': return { bg: '#ede9fe', border: '#8b5cf6', icon: '📌' };
      case 'action': return { bg: '#f0fdf4', border: '#10b981', icon: '⚡' };
      default: return { bg: '#f3f4f6', border: '#6b7280', icon: '📝' };
    }
  };

  return (
    <div className="sufler-demo">
      <Row gutter={[16, 16]}>
        {/* Left Panel - Transcript */}
        <Col xs={24} lg={12}>
          <Card
            style={{
              height: '550px',
              background: '#1e293b',
              border: '1px solid #334155'
            }}
          >
            <Space direction="vertical" style={{ width: '100%' }} size="middle">
              <div style={{
                padding: '12px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '8px'
              }}>
                <Space>
                  <SoundOutlined style={{ fontSize: 20, color: '#fff' }} />
                  <Text strong style={{ color: '#fff', fontSize: '16px' }}>🎙️ Транскрипция разговора</Text>
                  {activeStep > 0 && <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#ef4444',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}></div>}
                </Space>
              </div>

              <div style={{
                height: '420px',
                overflowY: 'auto',
                padding: '8px',
                background: '#0f172a',
                borderRadius: '8px'
              }}>
                <Space direction="vertical" style={{ width: '100%' }} size="small">
                  {transcript.map((msg, index) => (
                    <div
                      key={msg.id}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        background: msg.type === 'manager' ? '#1e3a8a' : '#065f46',
                        border: `1px solid ${msg.type === 'manager' ? '#3b82f6' : '#10b981'}`,
                        opacity: 0,
                        animation: 'fadeInUp 0.5s forwards',
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <Space>
                          <Tag color={msg.type === 'manager' ? 'blue' : 'green'}>
                            {msg.type === 'manager' ? '🎤 Менеджер' : '👤 Клиент'}
                          </Tag>
                          <Text style={{ fontSize: '12px', color: '#94a3b8' }}>{msg.time}</Text>
                        </Space>
                        <Text style={{ color: '#e2e8f0', fontSize: '14px' }}>{msg.text}</Text>
                      </Space>
                    </div>
                  ))}
                </Space>
              </div>
            </Space>
          </Card>
        </Col>

        {/* Right Panel - AI Assistant */}
        <Col xs={24} lg={12}>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">

            {/* Question Detection */}
            {currentQuestion && (
              <Card
                style={{
                  background: '#1e293b',
                  border: '2px solid #3b82f6',
                  animation: 'fadeInUp 0.5s forwards'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Avatar icon={<MessageOutlined />} style={{ background: '#3b82f6' }} />
                    <Text strong style={{ color: '#60a5fa', fontSize: '14px' }}>❓ Обнаружен вопрос</Text>
                    {activeStep === 6 && <div className="pulse-indicator"></div>}
                  </Space>
                  <Text style={{ color: '#e2e8f0', fontSize: '13px' }}>{currentQuestion}</Text>
                </Space>
              </Card>
            )}

            {/* AI Answer */}
            {currentAnswer && (
              <Card
                style={{
                  background: '#1e293b',
                  border: '2px solid #10b981',
                  animation: 'fadeInUp 0.5s forwards'
                }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Avatar icon={<RobotOutlined />} style={{ background: '#10b981' }} />
                    <Text strong style={{ color: '#34d399', fontSize: '14px' }}>🤖 Ответ AI</Text>
                    {activeStep === 6 && <Tag color="processing">Генерация...</Tag>}
                    {activeStep >= 7 && <Tag color="success" icon={<CheckCircleOutlined />}>Готово</Tag>}
                  </Space>
                  <Text style={{ color: '#e2e8f0', fontSize: '13px' }}>{currentAnswer}</Text>
                </Space>
              </Card>
            )}

            {/* Contextual Hints */}
            {hints.map((hint, index) => {
              const colors = getHintColor(hint.type);
              return (
                <Card
                  key={hint.id}
                  style={{
                    background: colors.bg,
                    borderLeft: `4px solid ${colors.border}`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    animation: 'fadeInUp 0.5s forwards',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space>
                      <span style={{ fontSize: '18px' }}>{colors.icon}</span>
                      <Text strong style={{ fontSize: '14px' }}>{hint.title}</Text>
                    </Space>
                    <Text style={{ fontSize: '13px', color: '#4b5563' }}>{hint.text}</Text>
                  </Space>
                </Card>
              );
            })}

          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default AntLanding;
