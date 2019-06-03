import Taro from '@tarojs/taro'

export default function (payload) {
  const token = Taro.getStorageSync('token') || ''
  if (token) {
    payload.header = Object.assign({}, payload.header, {
      Authorization: 'Bearer ' + token
    })
  }
  return Taro.request(payload).then(response => {
    const { data } = response
    if (!data || data.code !== 0) {
      if (data.code === 401) {
        Taro.setStorageSync('token', '')
        Taro.navigateTo({
          url: `/pages/login/index`
        })
      }
      throw new Error(data.error || '网络错误')
    }
    return data
  })
}
