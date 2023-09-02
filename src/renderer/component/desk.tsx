import React from 'react';

const deskBoxStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  border: '2px solid #4096ff',
  borderRadius: '15px',
};

const deskContainerStyle: React.CSSProperties = {
  height: '100%',
  overflow: 'hidden',
};

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
    <button type="submit" onClick={onShow} style={deskStyle} key={table.id}>
      {table.name}
    </button>
  ));
  return (
    <div style={deskBoxStyle}>
      <div style={deskContainerStyle}>{listTable}</div>
    </div>
  );
}

export default Desk;
