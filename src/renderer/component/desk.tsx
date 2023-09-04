import React from 'react';

import { Button } from 'antd';

const deskStyle: React.CSSProperties = {
  width: '130px',
  height: '60px',
  textAlign: 'center',
  border: '2px solid #4096ff',
  borderRadius: '10px',
  marginTop: '20px',
  marginLeft: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  float: 'left',
  fontWeight: 'bolder',
  fontSize: '1.2rem',
};

let tables: any;

window.deskRequest
  .request()
  .then((result: any) => {
    tables = result;
  })
  .catch((error: any) => {
    console.log(`Error${error}`);
    return error;
  });

function Desk({ onShow }: { onShow: () => void }) {
  const listTable = tables.map((table: any) => (
    <Button onClick={onShow} style={deskStyle} key={table.id}>
      {table.name}
    </Button>
  ));
  return (
    <div className="desk-box">
      <div className="desk-container">{listTable}</div>
    </div>
  );
}

export default Desk;
