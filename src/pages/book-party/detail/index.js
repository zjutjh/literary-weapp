import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtCountdown } from 'taro-ui'
import { connect } from '@tarojs/redux'
import util from '@/util'
import Actions from './actions'
import './index.scss'

const prefixClassName = 'm-book-party-detail'
@connect(({ bookPartyDetail: { detail }, auth: { userInfo } }) => ({
  detail,
  userInfo
}), Actions)
export default class BookPartyDetail extends Component {

  config = {
    navigationBarTitleText: '详情'
  }

  state = {
    id: null
  }

  componentDidMount () {
    this.setState({
      id: this.$router.params.id
    })
    this.props.dispatchBookPartyDetail(this.$router.params.id)
  }

  componentDidShow () {
    this.props.dispatchBookPartyDetail(this.$router.params.id)
  }

  signUp = () => {
    util.doIfLogin().then(() => {
      const { userInfo } = this.props
      if (userInfo.name && userInfo.mobile && userInfo.instituteId) {
        this.props.dispatchBookPartySignUp(this.state.id)
      } else {
        Taro.showToast({
          icon: 'none',
          title: '请先填写信息'
        }).then(() =>
          setTimeout(() => {
            Taro.navigateTo({
              url: '/pages/mine/user-info/index'
            })
          }, 1500)
        )

      }
    })
  }

  checkIn = () => {
    Taro.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode']
    }).then(res => {
      this.props.dispatchBookPartyCheckIn(res.result, this.state.id)
    })
  }

  render () {
    const gated = this.state.id && this.props.detail && this.props.detail[this.state.id]
    if (gated) {
      const detail = this.props.detail[this.state.id]
      const startDate = new Date(detail.startTime)
      const now = new Date()
      const diffTime = startDate.getTime() - now.getTime()

      return (
        <View className='m-page'>
          <View className={prefixClassName}>
            <View className={`${prefixClassName}-content`}>
              <View className={`${prefixClassName}-header`}>邀请函</View>
              { detail.isCheckin ? <View className={`${prefixClassName}-check-in`}>已签到</View> : null }
              { detail.isSignup ? <View className={`${prefixClassName}-sign-up`}>已报名</View> : null }
              <View className={`${prefixClassName}-info-list`}>
                <View className={`${prefixClassName}-info-item`}>
                  <View className={`${prefixClassName}-info-label`}>主题</View>
                  <View className={`${prefixClassName}-info-content`}>{detail.title}</View>
                </View>
              </View>
              <View className={`${prefixClassName}-info-list`}>
                <View className={`${prefixClassName}-info-item`}>
                  <View className={`${prefixClassName}-info-label`}>主讲人</View>
                  <View className={`${prefixClassName}-info-content`}>{detail.speaker}</View>
                </View>
              </View>
              <View className={`${prefixClassName}-info-list`}>
                <View className={`${prefixClassName}-info-item`}>
                  <View className={`${prefixClassName}-info-label`}>地点</View>
                  <View className={`${prefixClassName}-info-content`}>{detail.place}</View>
                </View>
              </View>
              <View className={`${prefixClassName}-info-list`}>
                <View className={`${prefixClassName}-info-item`}>
                  <View className={`${prefixClassName}-info-label`}>开始时间</View>
                  <View className={`${prefixClassName}-info-content`}>{detail.startTime}</View>
                </View>
              </View>
              <View className={`${prefixClassName}-info-list`}>
                <View className={`${prefixClassName}-info-item`}>
                  <View className={`${prefixClassName}-info-label`}>距离开始</View>
                  <View className={`${prefixClassName}-info-content`}>
                    { diffTime > 0 ? <AtCountdown
                      isShowDay
                      format={{ day: '天', hours: '小时', minutes: '分钟', seconds: '秒' }}
                      seconds={Math.max(0, parseInt(diffTime / 1000))}
                    /> : '已开始' }
                  </View>
                </View>
              </View>
              <View className={`${prefixClassName}-info-list`}>
                <View className={`${prefixClassName}-info-item`}>
                  <View className={`${prefixClassName}-info-label`}>简介</View>
                  <View className={`${prefixClassName}-info-content`}>{detail.summary}</View>
                </View>
              </View>
            </View>
          </View>
          { detail.isSignup ?
            !detail.isCheckin ? <AtButton type='primary' className='m-button' onClick={this.checkIn}>签到</AtButton> : null :
            <AtButton type='primary' className='m-button' onClick={this.signUp}>报名</AtButton>
          }
        </View>
      )
    }
    return null
  }
}
