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
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
  '桌子1',
];

function handleClick() {
  console.log('You clicked me!');
}

const listTable = tables.map((table) => (
  <button type="submit" onClick={handleClick} style={deskStyle}>
    {table}
  </button>
));

function Desk() {
  return (
    <div style={deskBoxStyle}>
      <div style={deskContainerStyle}>{listTable}</div>
    </div>
  );
}

export default Desk;
