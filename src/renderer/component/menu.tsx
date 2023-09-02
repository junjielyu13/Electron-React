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

const tables = [
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
  '桌子2',
];

// function handleClick() {
//   console.log('You clicked me!');
// }

function Menu({ onShow }: { onShow: () => void }) {
  const listTable = tables.map((table) => (
    <button type="submit" style={deskStyle}>
      {table}
    </button>
  ));

  return (
    <div style={deskBoxStyle}>
      <div style={deskContainerStyle}>
        <button type="submit" onClick={onShow} style={deskStyle}>
          返回
        </button>
        {listTable}
      </div>
    </div>
  );
}

export default Menu;
