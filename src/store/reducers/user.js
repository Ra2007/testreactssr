import {START_USER_INFO, SET_USER_INFO, SET_USER_INFO_ERROR, AUTH_LOGOUT} from '../types'

const initialState = {
  userInfo: null,
  userInfoError: null,
  userInfoFetching: false,
}
export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case AUTH_LOGOUT:
      return {
        ...state,
        userInfo: null,
        userInfoError: null,
        userInfoFetching: false,
      }

    case START_USER_INFO:
      return {
        ...state,
        userInfoFetching: true,
        userInfoError: null,
      }

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: payload,
        userInfoError: null,
        userInfoFetching: false,
      }

    case SET_USER_INFO_ERROR:
      return {
        ...state,
        userInfoError: payload,
        userInfoFetching: false,
      }

    default:
      return state
  }
}
