import React from 'react';

import { Button } from 'antd';

const toolBarStyle: React.CSSProperties = {
  height: '100%',
  border: '2px solid #4096ff',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-between',
};

const toolBlockStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #389e0d',
  marginLeft: '10px',
  marginRight: '10px',
  fontWeight: 'bolder',
  padding: '0 50px',
  fontSize: '1.5rem',
  height: '70%',
};

function Toolbar() {
  return (
    <div style={toolBarStyle}>
      <div style={toolBlockStyle}>
        <Button style={buttonStyle} size="large">
          设置
        </Button>
        <Button style={buttonStyle} size="large">
          打开钱箱
        </Button>
      </div>
      <div style={toolBlockStyle}>
        {' '}
        <Button style={buttonStyle} size="large">
          统计
        </Button>
        <Button danger style={buttonStyle} size="large">
          退出
        </Button>
      </div>
    </div>
  );
}

export default Toolbar;
