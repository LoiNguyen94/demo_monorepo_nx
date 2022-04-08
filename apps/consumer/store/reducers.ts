import { combineReducers } from 'redux'

import count from './slices/countSlice'
import AddProduct from './slices/addProductSlice'

const reducers = combineReducers({ 
  count,
  AddProduct
})

export default reducers;