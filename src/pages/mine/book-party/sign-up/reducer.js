import * as Constants from './constants'

const INITIAL_STATE = {
  bookPartyList: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.MINE_BOOK_PARTY_GET_SIGN_UP_LIST:
      return {
        ...state,
        bookPartyList: action.data
      }
    default:
      return state
  }
}
