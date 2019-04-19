import fetch from '@/fetch'
import API from '@/api'
import * as CommonConstants from '@/constant'
import * as Constants from './constants'

function dispatchBookPartyList () {
  return dispatch => {
    fetch({
      url: API('book-list/get')
    }).then(res => {
      dispatch({
        type: Constants.INDEX_GET_BOOK_PARTY_LIST,
        data: res.data
      })
    })
  }
}

function dispatchGetUserInfo () {
  return dispatch => {
    fetch({
      url: API('user-info')
    }).then(res => {
      dispatch({
        type: CommonConstants.AUTH_GET_USER_INFO,
        data: res.data
      })
    })
  }
}

export default {
  dispatchBookPartyList,
  dispatchGetUserInfo
}
