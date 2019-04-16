import Taro from '@tarojs/taro'
import * as Constants from './constants'

function dispatchBookPartyDetail (id) {
  return dispatch => {
    Taro.fetch({
      url: Taro.API('book-party/detail'),
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
