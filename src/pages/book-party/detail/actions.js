import Taro  from '@tarojs/taro'
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
      if (res.code !== 0) {
        throw new Error(res.error)
      }
      dispatch({
        type: Constants.BOOK_PARTY_GET_DETAIL,
        data: res.data
      })
    }).catch(e => {
      Taro.showToast({
        title: e.message || '发生错误'
      }).then(() => {
        Taro.navigateBack({ delta: 1 })
      })
    })
  }
}

function dispatchBookPartySignUp (id) {
  return dispatch => {
    fetch({
      url: API('book-party/sign-up'),
      method: 'POST',
      data: {
        bookPartyId: id
      }
    }).then(res => {
      if (res.code === 0) {
        Taro.showToast({
          title: '报名成功'
        })
        dispatch({
          type: Constants.BOOK_PARTY_SIGN_UP,
          data: res.data
        })
      }
    }).catch(e => {
      Taro.showToast({
        icon: 'none',
        title: e.message || '网络错误'
      })
    })
  }
}

function dispatchBookPartyCheckIn (code, id) {
  return dispatch => {
    fetch({
      url: API('book-party/check-in'),
      method: 'POST',
      data: {
        bookPartyId: id,
        checkinCode: code
      }
    }).then(res => {
      if (res.code === 0) {
        Taro.showToast({
          title: '签到成功'
        })
        dispatch({
          type: Constants.BOOK_PARTY_CHECK_IN,
          data: res.data
        })
      }
    }).catch(e => {
      Taro.showToast({
        icon: 'none',
        title: e.message || '网络错误'
      })
    })
  }
}

export default {
  dispatchBookPartyDetail,
  dispatchBookPartySignUp,
  dispatchBookPartyCheckIn
}
