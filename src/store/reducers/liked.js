import { handleActions } from 'redux-actions'
import { SETLIKED } from '../types/liked'

export default handleActions({
  [SETLIKED](state, action) {
    return {
      ...state,
      liked: action.payload.liked
    }
  }
},
  {
    liked: false
  })
