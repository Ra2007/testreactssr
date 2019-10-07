import userInfoRequest from '../../fetch/requests/userInfo'
import {START_USER_INFO, SET_USER_INFO, SET_USER_INFO_ERROR, AUTH_LOGOUT} from '../types'

export const getUserInfo = () => (dispatch, getState) => {
  const {token} = getState().auth

  dispatch({
    type: START_USER_INFO,
  })

  return userInfoRequest({token})
    .then((data) => {
      dispatch({
        type: SET_USER_INFO,
        payload: data.user_info_token,
      })
    })
    .catch((error) => {
      dispatch({
        type: SET_USER_INFO_ERROR,
        payload: error.extra,
      })

      if (error) {
        dispatch({
          type: AUTH_LOGOUT,
        })
      }
    })
}
