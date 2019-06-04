import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import contactImage from './images/contacts.png'

const prefixClassName = 'm-book-party-item'
class BookPartyItem extends Component {
  defaultProps = {
    data: {}
  }

  handleClick = () => {
    const { data } = this.props
    if (data && data.id) {
      Taro.navigateTo({
        url: `/pages/book-party/detail/index?id=${data.id}`
      })
    }
  }

  render () {
    const { data } = this.props
    return (
      <View className={[prefixClassName, data && data.status === 1 ? `${prefixClassName}-close` : ''].join(' ')} onClick={this.handleClick}>
        <View className={`${prefixClassName}-title`}>{data.title}</View>
        <View className={`${prefixClassName}-divider`} />
        <View className={`${prefixClassName}-content`}>
          <View className={`${prefixClassName}-logo`}>
            <Image className={`${prefixClassName}-logo-image`} src={contactImage} mode='aspectFit' />
          </View>
          <View className={`${prefixClassName}-info-list`}>
            <View className={`${prefixClassName}-item`}>
              <View className={`${prefixClassName}-item-label`}>主讲人</View>
              <View className={`${prefixClassName}-item-content`}>{data.speaker}</View>
            </View>
            <View className={`${prefixClassName}-item`}>
              <View className={`${prefixClassName}-item-label`}>地点</View>
              <View className={`${prefixClassName}-item-content`}>{data.place}</View>
            </View>
            <View className={`${prefixClassName}-item`}>
              <View className={`${prefixClassName}-item-label`}>开始时间</View>
              <View className={`${prefixClassName}-item-content`}>{data.startTime}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default BookPartyItem
