import React from 'react';
import { Button } from 'antd';

const operaBoxStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  border: '2px solid #4096ff',
  borderRadius: '15px',
  padding: '15px 10px',
};

const operaListAreaStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '75%',
  width: '100%',
  border: '2px solid #4096ff',
  borderRadius: '15px',
  padding: '10px 10px',
};

const operaListStyle: React.CSSProperties = {
  width: '100%',
  height: '78%',
  overflow: 'auto',
};

const operaItem: React.CSSProperties = {
  width: '100%',
  height: '23%',
  border: '2px solid #4096ff',
  borderRadius: '15px',
  margin: '5px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px',
  fontWeight: '500',
  fontSize: '1.25rem',
};

const resultListStyle: React.CSSProperties = {
  width: '100%',
  height: '20%',
  border: '2px solid #4096ff',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bolder',
  fontSize: '1.25rem',
};

const operaButtonAreaStyle: React.CSSProperties = {
  height: '25%',
  width: '100%',
  padding: '10px 15px',
};

const operaSmallButtonAreaStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
};

const operaSmallButtonStyle: React.CSSProperties = {
  width: '45%',
  border: '2px solid #ff4d4f',
  borderRadius: '7px',
  fontWeight: 'bolder',
  fontSize: '1.15rem',
};

const operaBigButtonStyle: React.CSSProperties = {
  height: '40px',
  border: '2px solid #ff4d4f',
  borderRadius: '7px',
  fontWeight: 'bolder',
  fontSize: '1.15rem',
  marginTop: '10px',
};

function Opera({ onShow }: { onShow: () => void }) {
  return (
    <div style={operaBoxStyle}>
      <div style={operaListAreaStyle}>
        <div style={operaListStyle}>
          <div style={operaItem}>
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
          <div style={operaItem}>
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>{' '}
          <div style={operaItem}>
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>{' '}
          <div style={operaItem}>
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>{' '}
          <div style={operaItem}>
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>{' '}
          <div style={operaItem}>
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
        </div>
        <div style={resultListStyle}>总价格: 10000.00€</div>
      </div>
      <div style={operaButtonAreaStyle}>
        <div style={operaSmallButtonAreaStyle}>
          <Button style={operaSmallButtonStyle} size="large">
            清空
          </Button>
          <Button style={operaSmallButtonStyle} size="large" onClick={onShow}>
            挂单
          </Button>
        </div>
        <div>
          <Button style={operaBigButtonStyle} block>
            结账
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Opera;
