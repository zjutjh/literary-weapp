import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import BookPartyList from '../../components/book-party-list'
import Actions from './actions'
import './index.scss'

@connect(({ bookPartyList }) => ({
  bookPartyList
}), Actions)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount () {
    this.props.getBookPartyList()
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  handleClick = () => {

  }

  render () {
    const { bookPartyList } = this.props
    return (
      <View className='m-page'>
        <View className='u-title'>读书会</View>
        <View>
          <BookPartyList list={bookPartyList} />
        </View>
      </View>
    )
  }
}

export default Index
