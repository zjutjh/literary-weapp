import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { BookPartyList } from '@/component'
import Actions from './actions'

@connect(({ mineBookPartyCheckIn: { bookPartyList } }) => ({
  bookPartyList
}), Actions)
class Index extends Component {

  config = {
    navigationBarTitleText: '我的签到'
  }

  componentDidMount () {
    this.props.dispatchBookPartyList()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='m-page'>
        <BookPartyList list={this.props.bookPartyList} />
      </View>
    )
  }
}

export default Index
