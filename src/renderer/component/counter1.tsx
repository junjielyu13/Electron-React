import React from 'react';
import { selectCount } from 'renderer/state/counterStore';
import { useAppSelector } from '../state/hooks';

function Counter() {
  // `state` 参数已正确推断为 `RootState` 类型
  // const count = useAppSelector((state) => state.counter.value);
  const count = useAppSelector(selectCount);

  return (
    <div>
      <div>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default Counter;
