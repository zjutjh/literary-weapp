const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const apiMap = {
  'book-list/get': 'book-party/list',
  'book-party/detail': 'book-party/detail',
  'book-party/sign-up': 'book-party/sign-up',
  'book-party/check-in': 'book-party/check-in',
  'user/book-party/sign-up': 'user/book-party/sign-up',
  'user/book-party/check-in': 'user/book-party/check-in',
  'login': 'login/weapp',
  'institute/list': 'institute/list',
  'user-info': 'user',
  'user/user-info': 'user/user-info',
}

const domain = isDev ? 'http://beauty-book.test/api/' : 'https://server.book.zjutjh.com/api/'

export default function (key) {
  return domain + apiMap[key]
}
