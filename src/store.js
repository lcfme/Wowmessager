import { createStore, applyMiddleware, combineReducers } from 'redux'
import mainLayout from './layout/main-layout/reducers'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({mainLayout})
export default createStore(
  combinedReducer,
  applyMiddleware(thunk)
)
