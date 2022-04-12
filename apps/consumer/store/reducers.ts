import { combineReducers } from '@reduxjs/toolkit';

import count from './slices/countSlice';
import AddProduct from './slices/addProductSlice';

const reducers = combineReducers({
  count,
  AddProduct,
});

export default reducers;
