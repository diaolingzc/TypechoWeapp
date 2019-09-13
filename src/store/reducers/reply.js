import { handleActions } from 'redux-actions'
import { SETREPLY } from '../types/reply'

export default handleActions({
  [SETREPLY](state, action) {
    return {
      ...state,
      is_reply: action.payload.is_reply
    }
  }
},
  {
    is_reply: false
  })
