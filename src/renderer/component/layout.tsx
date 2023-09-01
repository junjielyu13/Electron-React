import React from 'react';
import { Layout, Space } from 'antd';
import Toolbar from './header';

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: '15vh',
  backgroundColor: '#fff',
  padding: '14px',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  height: '85vh',
  backgroundColor: '#3ba0e9',
};

function MainLayout() {
  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Layout>
          <Header style={headerStyle}>
            <Toolbar />
          </Header>
          <Layout hasSider>
            <Sider style={siderStyle} width="25%">
              Sider
            </Sider>
            <Content style={contentStyle}>Content</Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default MainLayout;