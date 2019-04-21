import Taro from '@tarojs/taro'
import fetch from '@/fetch'
import API from '@/api'

export function doIfLogin (func) {
  const token = Taro.getStorageSync('token')
  if (token) {
    if (typeof func === 'function') {
      func()
    }
    return Promise.resolve()
  } else {
    Taro.navigateTo({
      url: '/pages/login/index'
    })
    return Promise.reject()
  }
}

export function login (username, password) {
  return Taro.login().then(res => {
    if (res.code) {
      // 发起网络请求
      return fetch({
        url: API('login'),
        method: 'POST',
        data: {
          type: 'weapp',
          username,
          password,
          code: res.code
        }
      }).then(response => {
        if (response.code === 0) {
          const token = response.data.token
          Taro.setStorageSync('token', token)
          return Promise.resolve(response)
        }
        return Promise.reject(new Error(response.error || '网络错误'))
      })
    } else {
      Taro.showToast({
        icon: 'none',
        title: '登录失败'
      })
      return Promise.reject(new Error('登录失败'))
    }
  }).catch(() => {
    Taro.showToast({
      icon: 'none',
      title: '登录失败'
    })
    return Promise.reject(new Error('登录失败'))
  })
}

export function loginWithToken () {

}

export default {
  doIfLogin,
  login
}
