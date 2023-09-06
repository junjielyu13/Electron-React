import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface CounterState {
  value: number;
  info: string;
  obj: object;
}

const initialState: CounterState = {
  value: 0,
  info: 'test',
  obj: {
    name: 'name',
  },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addinfor: (state) => {
      state.info = 'info 11111111111';
    },
    minosinfor: (state) => {
      state.info = 'info 2222222222222';
    },
  },
});

export const { increment, decrement, incrementByAmount, addinfor, minosinfor } =
  counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export const selectInfo = (state: RootState) => state.counter.info;

export default counterSlice.reducer;
