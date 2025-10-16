import React, { useState, useEffect, useRef } from 'react';
import { Card, Input, Button, Space, Avatar, Typography, List, Spin } from 'antd';
import { SendOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Text } = Typography;
const { TextArea } = Input;

interface ChatProps {
  token: string;
  companyId: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat: React.FC<ChatProps> = ({ token, companyId }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Здравствуйте! Я AI-ассистент AISYA. Как я могу помочь вам сегодня?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulated bot response for demo purposes
      // In production, replace with actual API call:
      // const response = await axios.post('/api/chat', {
      //   message: inputValue,
      //   token,
      //   companyId
      // });

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Спасибо за ваш вопрос! Я обрабатываю ваш запрос с помощью AI. В реальном приложении здесь будет интеллектуальный ответ на основе вашей базы знаний.',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card
      style={{
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        border: 'none'
      }}
      bodyStyle={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div style={{
        flex: 1,
        overflow: 'auto',
        padding: '16px',
        backgroundColor: '#fafafa'
      }}>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start'
              }}
            >
              {message.sender === 'bot' && (
                <Avatar
                  icon={<RobotOutlined />}
                  style={{
                    backgroundColor: '#1890ff',
                    marginRight: 8,
                    flexShrink: 0
                  }}
                />
              )}
              <Card
                size="small"
                style={{
                  maxWidth: '70%',
                  backgroundColor: message.sender === 'user' ? '#1890ff' : '#ffffff',
                  color: message.sender === 'user' ? '#ffffff' : '#000000',
                  borderRadius: 12,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                bodyStyle={{ padding: '8px 12px' }}
              >
                <Text style={{ color: message.sender === 'user' ? '#ffffff' : '#000000' }}>
                  {message.text}
                </Text>
              </Card>
              {message.sender === 'user' && (
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: '#87d068',
                    marginLeft: 8,
                    flexShrink: 0
                  }}
                />
              )}
            </div>
          ))}
          {isLoading && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                icon={<RobotOutlined />}
                style={{
                  backgroundColor: '#1890ff',
                  marginRight: 8
                }}
              />
              <Card
                size="small"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 12,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                bodyStyle={{ padding: '8px 12px' }}
              >
                <Spin size="small" />
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </Space>
      </div>
      <div style={{
        padding: '16px',
        borderTop: '1px solid #f0f0f0',
        backgroundColor: '#ffffff'
      }}>
        <Space.Compact style={{ width: '100%' }}>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите ваше сообщение..."
            autoSize={{ minRows: 1, maxRows: 3 }}
            style={{ resize: 'none' }}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            style={{ height: 'auto' }}
          >
            Отправить
          </Button>
        </Space.Compact>
      </div>
    </Card>
  );
};

export default Chat;
