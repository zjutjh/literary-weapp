import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import Actions from './actions'
import './index.scss'

const prefixClassName = 'm-book-party-detail'
@connect(({ bookPartyDetail: { detail }  }) => ({
  detail
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

  render () {
    const gated = this.state.id && this.props.detail && this.props.detail[this.state.id]
    if (gated) {
      const detail = this.props.detail[this.state.id]
      return (
        <View className='m-page'>
          <View className={prefixClassName}>
            <View className={`${prefixClassName}-content`}>
              <View className={`${prefixClassName}-header`}>邀请函</View>

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
            </View>
          </View>
          <AtButton type='primary' className={'m-button'}>报名</AtButton>
        </View>
      )
    }
    return null
  }
}
