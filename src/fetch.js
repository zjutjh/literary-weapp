import Taro from '@tarojs/taro'

export default function (payload) {
  return Taro.request(payload).then(response => {
    const { data } = response
    if (!data || data.code !== 0) {
      throw new Error(data.error || '网络错误')
    }
    return data
  })
}
