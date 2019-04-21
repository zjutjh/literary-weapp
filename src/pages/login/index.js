import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtAvatar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import util from '@/util'
import Actions from './actions'
import './index.scss'
import logo from './images/logo.jpeg'

@connect(({  }) => ({

}), Actions)
class Index extends Component {

  config = {
    navigationBarTitleText: '登录'
  }

  state = {
    username: '',
    password: ''
  }

  componentDidMount () {
    this.setState({
      username: this.$router.params.username
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange = key => value => {
    this.setState({
      [key]: value
    })
  }

  onSubmit = () => {
    if (!this.state.username || !this.state.password) {
      return Taro.showToast({
        icon: 'none',
        title: '请完成表单'
      })
    }
    util.login(this.state.username, this.state.password).then(() => {
      this.props.dispatchGetUserInfo()
      Taro.showToast({
        title: '登陆成功'
      }).then(() => {
        Taro.navigateBack({ delta: 1 })
      })
    })
  }

  render () {
    return (
      <View className='m-page'>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
          className='m-login-form'
        >
          <AtAvatar size='large' image={logo} className='u-logo' />
          <AtInput
            name='value'
            title='精弘通行证'
            type='text'
            placeholder='请输入精弘通行证'
            value={this.state.username}
            onChange={value => this.handleChange('username')(value)}
          />
          <AtInput
            name='value'
            title='密码'
            type='password'
            placeholder='请输入通行证密码'
            value={this.state.password}
            onChange={value => this.handleChange('password')(value)}
          />
          <AtButton formType='submit' type='primary' className='submit-button'>登录</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default Index
