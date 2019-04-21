import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtAvatar, AtButton, AtList, AtListItem } from 'taro-ui'
import util from '@/util'
import './index.scss'

@connect(({ auth }) => ({
  token: auth.token,
  userInfo: auth.userInfo
}), (dispatch) => ({
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login = () => {
    util.doIfLogin()
  }

  goLogin = () => {
    Taro.navigateTo({
      url: `/pages/login/index?username=${this.props.userInfo.sid}`
    })
  }

  goMineBookPartyCheckIn = () => {
    Taro.navigateTo({
      url: `/pages/mine/book-party/check-in/index`
    })
  }

  goMineBookPartySignUp = () => {
    Taro.navigateTo({
      url: `/pages/mine/book-party/sign-up/index`
    })
  }

  goMineBookUserInfo = () => {
    Taro.navigateTo({
      url: `/pages/mine/user-info/index`
    })
  }

  render () {
    return (
      <View className='m-page'>
        <View className='m-user-info'>
          <AtAvatar circle openData={{ type: 'userAvatarUrl' }} className='avatar' />
          <open-data type='userNickName' />
        </View>
        {
          this.props.userInfo ? (
            <AtList>
              <AtListItem title='学号' note={this.props.userInfo.sid} />
              <AtListItem title='我的报名' arrow='right' onClick={this.goMineBookPartySignUp} />
              <AtListItem title='我的签到' arrow='right' onClick={this.goMineBookPartyCheckIn} />
              <AtListItem title='我的信息' arrow='right' onClick={this.goMineBookUserInfo} extraText='修改' />
              <AtListItem title='重新登录' arrow='right' onClick={this.goLogin} />
            </AtList>
          ) : <AtButton type='primary' className='u-go-login' onClick={this.login}>登录</AtButton>
        }
      </View>
    )
  }
}

export default Index
