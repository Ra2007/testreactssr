import {combineReducers} from 'redux'

import transfer from './transfer'
import auth from './auth'
import user from './user'

export default combineReducers({
  transfer,
  auth,
  user,
})
