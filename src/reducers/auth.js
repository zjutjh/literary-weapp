import * as Constants from '@/constant'
import Taro from '@tarojs/taro'

const INITIAL_STATE = {
  token: Taro.getStorageSync('token'),
  userInfo: null
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.AUTH_LOGIN:
      if (action.token) {
        Taro.setStorageSync('token', action.token)
        return {
          ...state,
          token: action.token
        }
      }
      return state
    case Constants.AUTH_GET_USER_INFO:
      return {
        ...state,
        userInfo: action.data
      }
    case Constants.AUTH_UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.data
      }
    default:
      return state
  }
}
