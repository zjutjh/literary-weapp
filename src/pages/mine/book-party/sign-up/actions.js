import fetch from '@/fetch'
import API from '@/api'
import * as Constants from './constants'

function dispatchBookPartyList () {
  return dispatch => {
    fetch({
      url: API('user/book-party/sign-up')
    }).then(res => {
      dispatch({
        type: Constants.MINE_BOOK_PARTY_GET_SIGN_UP_LIST,
        data: res.data
      })
    })
  }
}

export default {
  dispatchBookPartyList
}
