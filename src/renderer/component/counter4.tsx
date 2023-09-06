import React from 'react';
import { useAppDispatch } from '../state/hooks';
import { addinfor, minosinfor } from '../state/counterStore';

function Counter() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          type="button"
          aria-label="add info value"
          onClick={() => dispatch(addinfor())}
        >
          info +
        </button>
        <button
          type="button"
          aria-label="minos infor value"
          onClick={() => dispatch(minosinfor())}
        >
          info -
        </button>
      </div>
    </div>
  );
}

export default Counter;
