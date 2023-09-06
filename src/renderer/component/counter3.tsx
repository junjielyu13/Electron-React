import React from 'react';
import { selectInfo } from 'renderer/state/counterStore';
import { useAppSelector } from '../state/hooks';

function Counter4() {
  // `state` 参数已正确推断为 `RootState` 类型
  // const count = useAppSelector((state) => state.counter.value);
  const info = useAppSelector(selectInfo);

  return (
    <div>
      <div>
        <span>{info}</span>
      </div>
    </div>
  );
}

export default Counter4;
