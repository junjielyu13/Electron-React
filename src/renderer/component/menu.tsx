import React from 'react';

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
    <div className="menuType" key={menuType.id}>
      {menuType.name}
    </div>
  ));

  return (
    <div className="menuContainer">
      <div className="menuTypeContainer">{menuTypeTable}</div>
      <div className="menuItemContainer">
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
        <div className="menuItem">菜品</div>
      </div>
    </div>
  );
}

export default Menu;
