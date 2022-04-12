import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: AnyAction) {
      state.value += 1;
      // return { ...state, ...action.payload };
      return state;
    },
    decrement(state, action: AnyAction) {
      state.value -= 1;
      // return { ...state, ...action.payload };
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
