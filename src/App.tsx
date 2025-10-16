import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import AntLanding from './components/AntLanding';
import Chat from './components/Chat';

type ViewMode = 'landing' | 'auth' | 'chat';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [token, setToken] = useState('');
  const [companyId, setCompanyId] = useState('');

  const handleGetStarted = () => {
    // For demo purposes, we'll go directly to chat
    // In production, this would navigate to an authentication page
    setViewMode('chat');
  };

  return (
    <ConfigProvider locale={ruRU}>
      <div className="App">
        {viewMode === 'landing' && (
          <AntLanding onGetStarted={handleGetStarted} />
        )}
        {viewMode === 'chat' && (
          <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <Chat token={token} companyId={companyId} />
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;
