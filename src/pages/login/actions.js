import fetch from '@/fetch'
import API from '@/api'
import * as Constants from '@/constant'

function dispatchGetUserInfo () {
  return dispatch => {
    fetch({
      url: API('user-info')
    }).then(res => {
      dispatch({
        type: Constants.AUTH_GET_USER_INFO,
        data: res.data
      })
    })
  }
}

export default {
  dispatchGetUserInfo
}
