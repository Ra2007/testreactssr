import authRegistrRequest from '../../fetch/requests/authRegistr'
import authLoginRequest from '../../fetch/requests/authLogin'
import {SET_AUTH_TOKEN, SET_SIGNUP_ERROR, SET_LOGIN_ERROR, AUTH_FETCHING_START, AUTH_LOGOUT} from '../types'

export const userLogout = () => (dispatch) => {
  return dispatch({
    type: AUTH_LOGOUT,
  })
}

export const registrUser = (authData) => (dispatch) => {
  const body = {...authData}

  dispatch({
    type: AUTH_FETCHING_START,
  })

  return authRegistrRequest({body})
    .then((data) => {
      console.log(data)
      dispatch({
        type: SET_AUTH_TOKEN,
        payload: data.id_token,
      })
    })
    .catch((error) => {
      console.log(error)

      dispatch({
        type: SET_SIGNUP_ERROR,
        payload: error.extra,
      })
    })
}

export const loginUser = (authData) => (dispatch) => {
  const body = {...authData}

  dispatch({
    type: AUTH_FETCHING_START,
  })

  return authLoginRequest({body})
    .then((data) => {
      dispatch({
        type: SET_AUTH_TOKEN,
        payload: data.id_token,
      })
    })
    .catch((error) => {
      dispatch({
        type: SET_LOGIN_ERROR,
        payload: error.extra,
      })
    })
}
