import {SET_AUTH_TOKEN, SET_SIGNUP_ERROR, SET_LOGIN_ERROR, AUTH_FETCHING_START, AUTH_LOGOUT} from '../types'

const initialState = {
  token: null,
  signUpError: null,
  loginError: null,
  fetching: false,
}
export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        signUpError: null,
        loginError: null,
        fetching: false,
      }
    case AUTH_FETCHING_START:
      return {
        ...state,
        signUpError: null,
        loginError: null,
        fetching: true,
      }

    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: payload,
        signUpError: null,
        loginError: null,
        fetching: false,
      }

    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signUpError: payload,
        fetching: false,
      }

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
        fetching: false,
      }

    default:
      return state
  }
}
