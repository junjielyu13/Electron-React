import React, { useState } from 'react';
import { Layout, Space } from 'antd';
import Toolbar from './toolbar';
import Desk from './desk';
import Menu from './menu';
import Opera from './opera';

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: '15vh',
  backgroundColor: '#fff',
  padding: '14px',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '14px',
};

const siderStyle: React.CSSProperties = {
  height: '85vh',
  backgroundColor: '#fff',
  padding: '14px',
};

function MainLayout() {
  const [showMenu, setShowMenu] = useState(0);

  const displayMeunu = () => {
    if (showMenu) {
      return <Menu />;
    }
    return <Desk onShow={() => setShowMenu(1)} />;
  };

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Layout>
          <Header style={headerStyle}>
            <Toolbar />
          </Header>
          <Layout hasSider>
            <Sider style={siderStyle} width="25%">
              <Opera onShow={() => setShowMenu(0)} />
            </Sider>
            <Content style={contentStyle}>{displayMeunu()}</Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default MainLayout;
