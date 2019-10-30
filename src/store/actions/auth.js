import authRegistrRequest from '../../api/authRegistr'
import authLoginRequest from '../../api/authLogin'
import {
  SET_AUTH_TOKEN,
  SET_SIGNUP_ERROR,
  SET_LOGIN_ERROR,
  AUTH_FETCHING_START,
  AUTH_LOGOUT,
} from '../types'

export const userLogout = () => (dispatch) => {
  return dispatch({
    type: AUTH_LOGOUT,
  })
}

export const registrUser = (authData) => (dispatch) => {
  const body = { ...authData }

  dispatch({
    type: AUTH_FETCHING_START,
  })

  return authRegistrRequest({ body })
    .then(({ data }) => {
      dispatch({
        type: SET_AUTH_TOKEN,
        payload: data.id_token,
      })
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_SIGNUP_ERROR,
        payload: response.data,
      })
    })
}

export const loginUser = (authData) => (dispatch) => {
  const body = { ...authData }

  dispatch({
    type: AUTH_FETCHING_START,
  })

  return authLoginRequest({ body })
    .then(({ data }) => {
      dispatch({
        type: SET_AUTH_TOKEN,
        payload: data.id_token,
      })
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_LOGIN_ERROR,
        payload: response.data,
      })
    })
}
