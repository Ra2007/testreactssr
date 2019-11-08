import userInfoRequest from '../../api/userInfo'
import { START_USER_INFO, SET_USER_INFO, SET_USER_INFO_ERROR, AUTH_LOGOUT } from '../types'

export const getUserInfo = () => (dispatch) => {
  dispatch({
    type: START_USER_INFO,
  })

  return userInfoRequest()
    .then(({ data }) => {
      dispatch({
        type: SET_USER_INFO,
        payload: data.user_info_token,
      })
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_USER_INFO_ERROR,
        payload: response.data,
      })

      dispatch({
        type: AUTH_LOGOUT,
      })
    })
}
