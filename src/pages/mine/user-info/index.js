import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Picker } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtNoticebar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import util from '@/util'
import Actions from './actions'
import './index.scss'

@connect(({ common: { instituteList }, auth: { userInfo } }) => ({
  instituteList,
  userInfo
}), Actions)
class Index extends Component {

  config = {
    navigationBarTitleText: '修改信息'
  }

  state = {
    mobile: '',
    instituteId: ''
  }

  componentDidMount () {
    const { userInfo } = this.props
    this.props.dispatchGetInstituteList()
    this.setState({
      mobile: userInfo.mobile,
      instituteId: userInfo.instituteId,
      name: userInfo.name,
      class: userInfo.class
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

  checkMobile = value => {
    return /^((\+)?86(-)?)?[1]\d{10}$/.test(value)
  }

  onSubmit = () => {
    if (!this.state.mobile || !this.state.instituteId || !this.state.name) {
      return Taro.showToast({
        icon: 'none',
        title: '请填写完整信息'
      })
    }
    if (!this.checkMobile(this.state.mobile)) {
      return Taro.showToast({
        icon: 'none',
        title: '请输入正确的手机号'
      })
    }
    this.props.dispatchUpdateUserInfo({
      name: this.state.name,
      mobile: this.state.mobile,
      instituteId: this.state.instituteId,
      class: this.state.class
    })
  }

  handleChangeInstitute = e => {
    const { detail: { value } } = e
    const institute = this.props.instituteList[value] || {}
    this.setState({
      instituteId: institute.id
    })
  }

  render () {
    const institute = this.props.instituteList.find(i => +i.id === +this.state.instituteId) || {}
    return (
      <View>
        <AtNoticebar icon='volume-plus'>请务必填写正确信息，用于加分</AtNoticebar>
        <View className='m-page'>
          <AtForm
            onSubmit={this.onSubmit}
            onReset={this.onReset}
            className='m-login-form'
          >
            <AtInput
              name='value'
              title='姓名'
              type='text'
              placeholder='请输入真实姓名'
              value={this.state.name}
              onChange={value => this.handleChange('name')(value)}
            />
            <AtInput
              name='value'
              title='手机号'
              type='text'
              placeholder='请输入手机号'
              value={this.state.mobile}
              onChange={value => this.handleChange('mobile')(value)}
            />
            <Picker
              name='value'
              title='学院'
              placeholder='请选择学院'
              value={this.state.instituteId}
              range={this.props.instituteList}
              rangeKey='name'
              onChange={value => this.handleChangeInstitute(value)}
              mode='selector'
            >
              <AtInput
                name='value'
                title='学院'
                placeholder='请选择学院'
                value={institute.name}
                editable={false}
                className={'m-institute'}
                onChange={value => this.handleChangeInstitute(value)}
              />
            </Picker>
            <AtInput
              name='value'
              title='班级'
              type='text'
              placeholder='请输入班级'
              value={this.state.class}
              onChange={value => this.handleChange('class')(value)}
            />
            <AtButton formType='submit' type='primary' className='submit-button'>确认修改</AtButton>
          </AtForm>
        </View>
      </View>
    )
  }
}

export default Index
