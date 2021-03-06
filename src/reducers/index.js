import { combineReducers } from 'redux'
import auth from './auth'
import common from './common'
import index from '../pages/index/reducer'
import bookPartyDetail from '../pages/book-party/detail/reducer'
import mineBookPartyCheckIn from '../pages/mine/book-party/check-in/reducer'
import mineBookPartySignUp from '../pages/mine/book-party/sign-up/reducer'

export default combineReducers({
  common,
  auth,
  index,
  bookPartyDetail,
  mineBookPartyCheckIn,
  mineBookPartySignUp
})
