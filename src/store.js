import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import mainLayout from './layout/main-layout/reducers'
import moments from './modules/moments/reducers'

const combinedReducer = combineReducers({mainLayout, moments})
export default createStore(
  combinedReducer,
  applyMiddleware(thunk)
)
