import React from 'react';

import { Button } from 'antd';

let menuTypes: any;

window.menuTypeRequest
  .menuTypeRequest()
  .then((result: any) => {
    menuTypes = result;
  })
  .catch((error: any) => {
    console.log(`Error${error}`);
    return error;
  });

function Menu() {
  const menuTypeTable = menuTypes.map((menuType: any) => (
    <Button className="menuType" key={menuType.id}>
      {menuType.name}
    </Button>
  ));

  return (
    <div className="menuContainer">
      <div className="menuTypeContainer">{menuTypeTable}</div>
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
      </div>
    </div>
  );
}

export default Menu;
