import { combineReducers } from 'redux'
import index from '../pages/index/reducer'
import bookPartyDetail from '../pages/book-party/detail/reducer'

export default combineReducers({
  index,
  bookPartyDetail
})
