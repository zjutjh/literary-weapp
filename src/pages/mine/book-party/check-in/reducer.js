import * as Constants from './constants'

const INITIAL_STATE = {
  bookPartyList: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.MINE_BOOK_PARTY_GET_CHECK_IN_LIST:
      return {
        ...state,
        bookPartyList: action.data
      }
    default:
      return state
  }
}
