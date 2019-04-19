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
        type: Constants.AUTH_LOGIN,
        data: res.data
      })
    })
  }
}

export default {
  dispatchBookPartyDetail
}
