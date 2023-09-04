import React from 'react';
import { Button } from 'antd';

function Opera({ onShow }: { onShow: () => void }) {
  return (
    <div className="opera-box">
      <div className="opera-list-area">
        <div className="opera-list">
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
        <div className="opera-result-list">总价格: 10000.00€</div>
      </div>
      <div className="opera-button-area">
        <div className="opera-small-button-area">
          <Button className="opera-small-button" size="large">
            清空
          </Button>
          <Button className="opera-small-button" size="large" onClick={onShow}>
            挂单
          </Button>
        </div>
        <div>
          <Button className="opera-big-button" block>
            结账
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Opera;
