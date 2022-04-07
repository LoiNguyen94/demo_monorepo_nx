import { combineReducers } from 'redux'

import count from './slices/countSlice'

const reducers = combineReducers({ 
  count,
})

export default reducers;