import { combineReducers } from 'redux'
import counter from './counter'
import reply from './reply'
import liked from './liked'

export default combineReducers({
  counter,
  reply,
  liked
})
