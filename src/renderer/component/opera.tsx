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

function Opera({ onShow }: { onShow: () => void }) {
  return (
    <div style={operaBoxStyle}>
      <div style={operaListAreaStyle}>
        <div style={operaListStyle}>
          <div className="operaItem">
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
          <div className="operaItem">
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
          <div className="operaItem">
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
          <div className="operaItem">
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
          <div className="operaItem">
            <div>菜品4</div>
            <div>x10</div>
            <div>20.0</div>
          </div>
          <div className="operaItem">
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
          <Button className="operaBigButton" block>
            结账
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Opera;
