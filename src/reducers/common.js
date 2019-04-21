import * as Constants from '@/constant'

const INITIAL_STATE = {
  instituteList: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.GET_INSTITUTE_LIST:
      return {
        ...state,
        instituteList: action.data
      }
    default:
      return state
  }
}
