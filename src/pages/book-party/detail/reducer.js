import * as Constants from './constants'

const INITIAL_STATE = {
  detail: {

  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.BOOK_PARTY_GET_DETAIL:
      return {
        ...state,
        detail: Object.assign({}, state.detail, {
          [action.data.id]: action.data
        })
      }
    default:
      return state
  }
}
