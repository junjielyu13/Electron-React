import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

let menuTypes: any;

window.menuTypeRequest
  .menuTypeRequest()
  .then((result: any) => {
    menuTypes = result;
  })
  .catch((error: any) => {
    return error;
  });

function Menu() {
  const [open, setOpen] = useState(false);

  const menuTypeTable = menuTypes.map((menuType: any) => (
    <Button className="menuType" key={menuType.id}>
      {menuType.name}
    </Button>
  ));

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <div className="menuContainer">
      <div className="menuTypeContainer">
        {menuTypeTable}
        <Button className="menuType" onClick={showModal}>
          <PlusOutlined />
        </Button>
      </div>
      <div className="menuItemContainer">
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">菜品</Button>
        <Button className="menuItem">
          <PlusOutlined />
        </Button>
      </div>

      <Modal
        title="添加品类"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </div>
  );
}

export default Menu;
