import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/book-party/check-in/index',
      'pages/mine/book-party/sign-up/index',
      'pages/login/index',
      'pages/mine/index',
      'pages/mine/user-info/index',
      'pages/book-party/detail/index',
    ],
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'images/home.png',
          selectedIconPath: 'images/home-fill.png'
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: 'images/build.png',
          selectedIconPath: 'images/build-fill.png'
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
