import usersNameRequest from '../../fetch/requests/usersName'
import createTransactionRequest from '../../fetch/requests/createTransaction'
import listTransactionRequest from '../../fetch/requests/listTransaction'

import {
  SET_USERS_LIST,
  CLEAR_USER_LIST,
  TRANSACTION_FETCHING,
  TRANSACTION_INFO_SET,
  TRANSACTION_INFO_SET_ERROR,
  TRANSACTION_LIST_ERROR,
  TRANSACTION_LIST_FETCHING,
  TRANSACTION_LIST_SET,
  TRANSACTION_REPLAY_SET,
} from '../types'

export const getUsersName = (filter) => (dispatch, getState) => {
  const {token} = getState().auth
  const body = {filter}

  return usersNameRequest({body, token})
    .then((data) => {
      console.log(data)
      dispatch({
        type: SET_USERS_LIST,
        payload: data,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export const clearUserList = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_LIST,
  })
}

export const transactionCreate = (body) => (dispatch, getState) => {
  const {token} = getState().auth

  dispatch({
    type: TRANSACTION_FETCHING,
  })

  return createTransactionRequest({body, token})
    .then((data) => {
      dispatch({
        type: TRANSACTION_INFO_SET,
        payload: data.trans_token,
      })
    })
    .catch((error) => {
      dispatch({
        type: TRANSACTION_INFO_SET_ERROR,
        payload: error.extra,
      })
    })
}

export const getTransactionList = () => (dispatch, getState) => {
  const {token} = getState().auth

  dispatch({
    type: TRANSACTION_LIST_FETCHING,
  })

  return listTransactionRequest({token})
    .then((data) => {
      dispatch({
        type: TRANSACTION_LIST_SET,
        payload: data.trans_token,
      })
    })
    .catch((error) => {
      dispatch({
        type: TRANSACTION_LIST_ERROR,
        payload: error.extra,
      })
    })
}

export const setTransactionReplay = (params) => (dispatch) => {
  dispatch({
    type: TRANSACTION_REPLAY_SET,
    payload: params,
  })
}
