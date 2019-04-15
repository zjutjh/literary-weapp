import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import BookPartyItem from './components/book-party-item'

const prefixClassName = 'm-book-party-list'
class BookPartyList extends Component {
  defaultProps = {
    list: []
  }

  handleClick = () => {
    const { data } = this.props
    if (data && data.id) {
      Taro.navigateTo({
        url: `/pages/page/path/name?id=${data.id}`
      })
    }
  }

  render () {
    const { list } = this.props
    if (!list || !list.length || !Array.isArray(list)) {
      return (
        <View className={prefixClassName}>
          <View className={`${prefixClassName}-tip`}>暂时还没有读书会哦~</View>
        </View>
      )
    }
    return (
      <View className={prefixClassName} onClick={this.handleClick}>
        {
          list && list.map((item, index) => (
            <BookPartyItem key={`book-party-${index}`} data={item} />
          ))
        }
      </View>
    )
  }
}

export default BookPartyList
