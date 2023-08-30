/* eslint-disable no-console */
/* eslint-disable promise/always-return */
import React, { useState } from 'react';

declare global {
  interface Window {
    test: any;
  }
}

function TESTAPP() {
  const [title, setTitle] = useState('');

  const handleButtonClick = () => {
    window.test
      .test({
        id: 1,
        name: title,
      })
      .then((result: any) => {
        console.log('Success');
        console.log(result);
      })
      .catch((error: any) => {
        console.log('Error');
        console.error(error);
      });
  };

  return (
    <div>
      <div>renderer to main 1 site</div>
      testname:{' '}
      <input
        id="titletest"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button id="btntest" type="button" onClick={handleButtonClick}>
        Set
      </button>
    </div>
  );
}

export default TESTAPP;
