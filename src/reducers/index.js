import { combineReducers } from 'redux'
import auth from './auth'
import index from '../pages/index/reducer'
import bookPartyDetail from '../pages/book-party/detail/reducer'

export default combineReducers({
  auth,
  index,
  bookPartyDetail
})
