import React, { useState } from 'react';
import Chat from './Chat';
import '../styles/ModernLanding.css';

interface ModernLandingProps {
  onGetStarted: () => void;
}

type ProductType = 'chat' | 'email' | 'phone' | 'sufler' | null;

const ModernLanding: React.FC<ModernLandingProps> = ({ onGetStarted }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [showDemo, setShowDemo] = useState(false);

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
    setShowDemo(true);
  };

  const closeDemo = () => {
    setShowDemo(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="modern-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">🤖 AI-Powered Business Solutions</div>
            <h1 className="hero-title">
              Экосистема <span className="gradient-text">ИИ-Агентов</span><br />
              для Вашего Бизнеса
            </h1>
            <p className="hero-description">
              Автоматизируйте бизнес-процессы с помощью передовых AI-агентов.<br />
              Обучение моделей, RAG системы, микросервисная архитектура.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onGetStarted}>
                Начать работу
                <span className="btn-icon">→</span>
              </button>
              <button className="btn btn-secondary" onClick={() => handleProductClick('chat')}>
                Посмотреть демо
                <span className="btn-icon">▶</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Работа без перерывов</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Ускорение процессов</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Точность ответов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ключевые Возможности</h2>
            <p className="section-subtitle">
              Полный набор инструментов для создания и управления AI-агентами
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3 className="feature-title">Обучение Моделей</h3>
              <p className="feature-description">
                Обучайте AI на ваших данных. Настраивайте модели под специфику бизнеса и постоянно улучшайте качество ответов.
              </p>
              <ul className="feature-list">
                <li>Fine-tuning на корпоративных данных</li>
                <li>Continuous learning</li>
                <li>A/B тестирование моделей</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">RAG Системы</h3>
              <p className="feature-description">
                Retrieval-Augmented Generation для точных ответов на основе вашей базы знаний и документов.
              </p>
              <ul className="feature-list">
                <li>Векторные БД для быстрого поиска</li>
                <li>Semantic search</li>
                <li>Контекстные ответы</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3 className="feature-title">Микросервисная Архитектура</h3>
              <p className="feature-description">
                Масштабируемая и надежная архитектура с независимыми сервисами для каждой функции.
              </p>
              <ul className="feature-list">
                <li>Независимое масштабирование</li>
                <li>Высокая доступность</li>
                <li>Легкая интеграция</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3 className="feature-title">Кастомизация</h3>
              <p className="feature-description">
                Доработка и настройка решений под конкретные бизнес-процессы вашей компании.
              </p>
              <ul className="feature-list">
                <li>Custom workflows</li>
                <li>Интеграция с CRM/ERP</li>
                <li>Брендинг и UI customization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Наши Продукты</h2>
            <p className="section-subtitle">
              Выберите решение для вашего бизнеса
            </p>
          </div>
          <div className="products-grid">
            <div
              className={`product-card ${selectedProduct === 'chat' ? 'active' : ''}`}
              onClick={() => handleProductClick('chat')}
            >
              <div className="product-icon">💬</div>
              <h3 className="product-title">AI Чат-Агент</h3>
              <p className="product-description">
                Интеллектуальный чат-бот для автоматизации общения с клиентами на сайте и в мессенджерах
              </p>
              <div className="product-features">
                <span className="feature-badge">24/7 поддержка</span>
                <span className="feature-badge">Мультиязычность</span>
                <span className="feature-badge">Контекстная память</span>
              </div>
              <div className="product-action">
                <span className="action-text">Посмотреть демо</span>
                <span className="action-icon">→</span>
              </div>
            </div>

            <div
              className={`product-card ${selectedProduct === 'email' ? 'active' : ''}`}
              onClick={() => handleProductClick('email')}
            >
              <div className="product-icon">📧</div>
              <h3 className="product-title">AI Email-Агент</h3>
              <p className="product-description">
                Автоматическая обработка входящих писем, классификация и генерация ответов
              </p>
              <div className="product-features">
                <span className="feature-badge">Автоклассификация</span>
                <span className="feature-badge">Smart replies</span>
                <span className="feature-badge">Приоритизация</span>
              </div>
              <div className="product-action">
                <span className="action-text">Посмотреть демо</span>
                <span className="action-icon">→</span>
              </div>
            </div>

            <div
              className={`product-card ${selectedProduct === 'phone' ? 'active' : ''}`}
              onClick={() => handleProductClick('phone')}
            >
              <div className="product-icon">📞</div>
              <h3 className="product-title">AI Консультант</h3>
              <p className="product-description">
                Голосовой AI-ассистент для телефонии с распознаванием речи и синтезом голоса
              </p>
              <div className="product-features">
                <span className="feature-badge">Speech-to-text</span>
                <span className="feature-badge">Text-to-speech</span>
                <span className="feature-badge">NLU</span>
              </div>
              <div className="product-action">
                <span className="action-text">Посмотреть демо</span>
                <span className="action-icon">→</span>
              </div>
            </div>

            <div
              className={`product-card ${selectedProduct === 'sufler' ? 'active' : ''}`}
              onClick={() => handleProductClick('sufler')}
            >
              <div className="product-icon">🎙️</div>
              <h3 className="product-title">AI Суфлёр</h3>
              <p className="product-description">
                Система помощи менеджерам продаж в реальном времени с подсказками и рекомендациями
              </p>
              <div className="product-features">
                <span className="feature-badge">Real-time hints</span>
                <span className="feature-badge">Обучение</span>
                <span className="feature-badge">Аналитика</span>
              </div>
              <div className="product-action">
                <span className="action-text">Посмотреть демо</span>
                <span className="action-icon">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className={`demo-modal ${showDemo ? 'show' : ''}`}>
          <div className="demo-backdrop" onClick={closeDemo}></div>
          <div className="demo-content">
            <button className="demo-close" onClick={closeDemo}>×</button>
            <div className="demo-header">
              <h2 className="demo-title">
                {selectedProduct === 'chat' && '💬 AI Чат-Агент'}
                {selectedProduct === 'email' && '📧 AI Email-Агент'}
                {selectedProduct === 'phone' && '📞 AI Консультант'}
                {selectedProduct === 'sufler' && '🎙️ AI Суфлёр'}
              </h2>
              <p className="demo-subtitle">Интерактивная демонстрация</p>
            </div>
            <div className="demo-body">
              {selectedProduct === 'chat' && (
                <div className="chat-demo">
                  <Chat token="" companyId="" />
                </div>
              )}
              {selectedProduct === 'email' && (
                <div className="email-demo">
                  <div className="email-inbox">
                    <div className="email-item">
                      <div className="email-header">
                        <span className="email-from">client@example.com</span>
                        <span className="email-badge priority">Высокий приоритет</span>
                      </div>
                      <div className="email-subject">Вопрос по заказу #12345</div>
                      <div className="email-preview">Добрый день! Подскажите, пожалуйста, когда...</div>
                      <div className="email-ai-reply">
                        <div className="ai-badge">🤖 AI сгенерировал ответ</div>
                        <div className="ai-reply-text">
                          Здравствуйте! Заказ #12345 находится в обработке. Ожидаемая дата отправки: 15.10.2025...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedProduct === 'phone' && (
                <div className="phone-demo">
                  <div className="phone-interface">
                    <div className="phone-status">
                      <span className="status-indicator active"></span>
                      <span className="status-text">Звонок активен</span>
                    </div>
                    <div className="phone-transcript">
                      <div className="transcript-item user">
                        <span className="speaker">Клиент:</span>
                        <span className="text">Здравствуйте, хочу узнать про ваши услуги</span>
                      </div>
                      <div className="transcript-item ai">
                        <span className="speaker">AI:</span>
                        <span className="text">Добрый день! Рад помочь. Мы предлагаем...</span>
                      </div>
                    </div>
                    <div className="phone-controls">
                      <button className="phone-btn mute">🔇 Mute</button>
                      <button className="phone-btn end">📞 Завершить</button>
                    </div>
                  </div>
                </div>
              )}
              {selectedProduct === 'sufler' && (
                <div className="sufler-demo">
                  <div className="sufler-interface">
                    <div className="sufler-listening">
                      <div className="listening-indicator">
                        <span className="pulse"></span>
                        <span className="listening-text">Слушаю разговор...</span>
                      </div>
                    </div>
                    <div className="sufler-hints">
                      <div className="hint-card recommended">
                        <div className="hint-label">💡 Рекомендуемый ответ</div>
                        <div className="hint-text">
                          "Наш продукт идеально подходит для вашего бизнеса, потому что..."
                        </div>
                      </div>
                      <div className="hint-card">
                        <div className="hint-label">📊 Статистика</div>
                        <div className="hint-text">
                          Клиент заинтересован в функции X (упоминал 3 раза)
                        </div>
                      </div>
                      <div className="hint-card">
                        <div className="hint-label">⚠️ Важно</div>
                        <div className="hint-text">
                          Не забудьте упомянуть про акцию до конца месяца
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Готовы начать?</h2>
            <p className="cta-description">
              Попробуйте AISYA бесплатно и убедитесь в эффективности AI-агентов
            </p>
            <button className="btn btn-cta" onClick={onGetStarted}>
              Начать бесплатно
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-logo">AISYA</h3>
              <p className="footer-tagline">Экосистема ИИ-агентов для бизнеса</p>
              <div className="footer-social">
                <a href="#" className="social-link">VK</a>
                <a href="#" className="social-link">Telegram</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Продукты</h4>
              <ul className="footer-links">
                <li><a href="#" onClick={() => handleProductClick('chat')}>AI Чат-Агент</a></li>
                <li><a href="#" onClick={() => handleProductClick('email')}>AI Email-Агент</a></li>
                <li><a href="#" onClick={() => handleProductClick('phone')}>AI Консультант</a></li>
                <li><a href="#" onClick={() => handleProductClick('sufler')}>AI Суфлёр</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Компания</h4>
              <ul className="footer-links">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Тарифы</a></li>
                <li><a href="#">Документация</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Контакты</h4>
              <ul className="footer-links">
                <li><a href="mailto:info@aisya.ru">info@aisya.ru</a></li>
                <li><a href="tel:+74951234567">+7 (495) 123-45-67</a></li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AISYA. Все права защищены.</p>
            <div className="footer-legal">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLanding;
