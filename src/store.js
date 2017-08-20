import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import mainLayout from './layout/main-layout/reducers'
import moments from './modules/moments/reducers'
import upload from './layout/upload/reducers'

const combinedReducer = combineReducers({mainLayout, moments, upload})
export default createStore(
  combinedReducer,
  applyMiddleware(thunk)
)
