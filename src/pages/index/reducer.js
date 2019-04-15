import * as Constants from './constants'

const INITIAL_STATE = {
  bookPartyList: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.INDEX_GET_BOOK_PARTY_LIST:
      state.bookPartyList = action.data
      return state
    default:
      return state
  }
}
