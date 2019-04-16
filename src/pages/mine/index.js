import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount () {
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {

  }

  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

export default Index
