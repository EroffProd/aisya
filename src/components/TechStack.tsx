import React, { useState } from 'react';
import { Card, Typography, Space, Tag } from 'antd';
import {
  CloudOutlined,
  ApiOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import '../styles/TechStack.css';

const { Title, Text, Paragraph } = Typography;

interface Technology {
  name: string;
  category: string;
  icon: string;
  color: string;
  description: string;
}

const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies: Technology[] = [
    // AI & ML
    { name: 'OpenAI GPT-4', category: 'AI', icon: '🤖', color: '#10a37f', description: 'Генеративная AI модель' },
    { name: 'Anthropic Claude', category: 'AI', icon: '🧠', color: '#d97706', description: 'AI ассистент' },
    { name: 'LangChain', category: 'AI', icon: '🔗', color: '#00d4aa', description: 'Фреймворк для LLM' },
    { name: 'TensorFlow', category: 'AI', icon: '🔥', color: '#ff6f00', description: 'ML библиотека' },

    // Databases
    { name: 'MongoDB', category: 'Database', icon: '🍃', color: '#47a248', description: 'NoSQL база данных' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', color: '#336791', description: 'SQL база данных' },
    { name: 'Redis', category: 'Database', icon: '⚡', color: '#dc382d', description: 'In-memory кэш' },
    { name: 'Pinecone', category: 'Database', icon: '📍', color: '#8b5cf6', description: 'Vector Database' },

    // Backend
    { name: 'FastAPI', category: 'Backend', icon: '⚙️', color: '#009688', description: 'Python фреймворк' },
    { name: 'Node.js', category: 'Backend', icon: '💚', color: '#339933', description: 'JavaScript runtime' },
    { name: 'Express', category: 'Backend', icon: '🚂', color: '#000000', description: 'Web фреймворк' },

    // DevOps
    { name: 'Docker', category: 'DevOps', icon: '🐳', color: '#2496ed', description: 'Контейнеризация' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️', color: '#326ce5', description: 'Оркестрация' },
    { name: 'GitHub Actions', category: 'DevOps', icon: '🔄', color: '#2088ff', description: 'CI/CD' },

    // Security
    { name: 'JWT', category: 'Security', icon: '🔐', color: '#000000', description: 'Авторизация' },
    { name: 'OAuth2', category: 'Security', icon: '🛡️', color: '#eb5424', description: 'Аутентификация' },
  ];

  const categories = [
    { name: 'AI', icon: <ThunderboltOutlined />, color: '#722ed1' },
    { name: 'Database', icon: <DatabaseOutlined />, color: '#1890ff' },
    { name: 'Backend', icon: <ApiOutlined />, color: '#52c41a' },
    { name: 'DevOps', icon: <CloudOutlined />, color: '#fa8c16' },
    { name: 'Security', icon: <SafetyOutlined />, color: '#f5222d' }
  ];

  const getTechsByCategory = (category: string) => {
    return technologies.filter(tech => tech.category === category);
  };

  return (
    <div className="tech-stack-container">
      <div className="tech-header">
        <Title level={2}>Передовой технологический стек</Title>
        <Paragraph style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
          Мы используем проверенные enterprise-решения для создания надежной и масштабируемой AI-платформы
        </Paragraph>
      </div>

      <div className="tech-categories">
        {categories.map((category, index) => (
          <div key={category.name} className="tech-category-section" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="category-header">
              <Space>
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <Title level={4} style={{ margin: 0 }}>{category.name}</Title>
              </Space>
              <Tag color={category.color}>{getTechsByCategory(category.name).length} технологий</Tag>
            </div>

            <div className="tech-grid">
              {getTechsByCategory(category.name).map((tech, techIndex) => (
                <div
                  key={tech.name}
                  className={`tech-card ${hoveredTech === tech.name ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                >
                  <div className="tech-card-inner">
                    <div className="tech-icon" style={{ background: `${tech.color}15` }}>
                      <span style={{ fontSize: '32px' }}>{tech.icon}</span>
                    </div>
                    <div className="tech-info">
                      <Text strong style={{ fontSize: '15px' }}>{tech.name}</Text>
                      <Text type="secondary" style={{ fontSize: '12px', display: 'block', marginTop: '4px' }}>
                        {tech.description}
                      </Text>
                    </div>
                    <div className="tech-glow" style={{ background: tech.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Tech Badges */}
      <div className="floating-badges">
        <div className="floating-badge badge-1">
          <Space>
            <ThunderboltOutlined style={{ color: '#faad14' }} />
            <Text strong style={{ fontSize: '12px' }}>High Performance</Text>
          </Space>
        </div>
        <div className="floating-badge badge-2">
          <Space>
            <SafetyOutlined style={{ color: '#52c41a' }} />
            <Text strong style={{ fontSize: '12px' }}>Enterprise Security</Text>
          </Space>
        </div>
        <div className="floating-badge badge-3">
          <Space>
            <CloudOutlined style={{ color: '#1890ff' }} />
            <Text strong style={{ fontSize: '12px' }}>Cloud Native</Text>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
