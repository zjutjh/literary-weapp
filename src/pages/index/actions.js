import Taro from '@tarojs/taro'
import * as Constants from './constants'

function dispatchBookPartyList () {
  return dispatch => {
    Taro.fetch({
      url: Taro.API('book-list/get')
    }).then(res => {
      dispatch({
        type: Constants.INDEX_GET_BOOK_PARTY_LIST,
        data: res.data
      })
    })
  }
}

export default {
  dispatchBookPartyList
}
