import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/store';

import Counter1 from './counter1';
import Counter2 from './counter2';
import Counter3 from './counter3';
import Counter4 from './counter4';

function TEST2APP() {
  return (
    <Provider store={store}>
      <div>
        <div>
          <Counter1 />
          <Counter2 />
          <Counter3 />
          <Counter4 />
        </div>
      </div>
    </Provider>
  );
}

export default TEST2APP;
