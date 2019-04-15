import url from 'url'

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development' && wx.getSystemInfoSync().platform === 'devtools'

const apiMap = {
  'book-list/get': 'book-party/list'
}

const domain = isDev ? 'http://beauty-book.test/api/' : ''

export default function (key) {
  return url.resolve(domain, apiMap[key])
}
