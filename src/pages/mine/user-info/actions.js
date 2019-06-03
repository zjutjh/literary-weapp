import fetch from '@/fetch'
import API from '@/api'
import * as Constants from '@/constant'
import Taro from "@tarojs/taro"

function dispatchGetUserInfo () {
  return dispatch => {
    fetch({
      url: API('user-info')
    }).then(res => {
      dispatch({
        type: Constants.AUTH_GET_USER_INFO,
        data: res.data.user
      })
      dispatch({
        type: Constants.AUTH_LOGIN,
        token: res.data.token
      })
    })
  }
}

function dispatchUpdateUserInfo (payload) {
  return dispatch => {
    fetch({
      url: API('user/user-info'),
      method: 'POST',
      data: payload
    }).then(res => {
      dispatch({
        type: Constants.AUTH_UPDATE_USER_INFO,
        data: res.data
      })
      Taro.showToast({
        title: '修改成功',
        icon: 'none'
      }).then(() => {
        setTimeout(() => {
          Taro.navigateBack({ delta: 1 })
        }, 1500)
      })
    }).catch(e => {
      Taro.showToast({
        title: e.message || '网络错误',
        icon: 'none'
      })
    })
  }
}

function dispatchGetInstituteList () {
  return dispatch => {
    fetch({
      url: API('institute/list')
    }).then(res => {
      dispatch({
        type: Constants.GET_INSTITUTE_LIST,
        data: res.data
      })
    })
  }
}

export default {
  dispatchGetUserInfo,
  dispatchGetInstituteList,
  dispatchUpdateUserInfo
}
