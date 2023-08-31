import { useState } from 'react';

function TESTAPP() {
  const [title, setTitle] = useState('');

  const handleButtonClick = () => {
    window.test
      .test({
        id: 1,
        name: title,
      })
      .then((result: any) => {
        console.log(`Success${result}`);
        return result;
      })
      .catch((error: any) => {
        console.log(`Error${error}`);
        return error;
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
