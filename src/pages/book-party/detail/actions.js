import fetch from '@/fetch'
import API from '@/api'
import * as Constants from './constants'

function dispatchBookPartyDetail (id) {
  return dispatch => {
    fetch({
      url: API('book-party/detail'),
      data: {
        bookPartyId: id
      }
    }).then(res => {
      dispatch({
        type: Constants.BOOK_PARTY_GET_DETAIL,
        data: res.data
      })
    })
  }
}

export default {
  dispatchBookPartyDetail
}
