import { AnyAction } from 'redux';
import { nanoid, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface ProductState {
  id: number;
  name: string;
}

const initialState: ProductState[] = [
  {
    id: 0,
    name: 'default',
  },
];

const counterSlice = createSlice({
  name: 'AddProduct',
  initialState,
  reducers: {
    setProduct(state, action) {
      state = action.payload;
    },
  },
});

export const { setProduct } = counterSlice.actions;

export default counterSlice.reducer;
