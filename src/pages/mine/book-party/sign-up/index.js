import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { BookPartyList } from '@/component'
import Actions from './actions'

@connect(({ mineBookPartySignUp: { bookPartyList } }) => ({
  bookPartyList
}), Actions)
class Index extends Component {

  config = {
    navigationBarTitleText: '我的报名'
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
