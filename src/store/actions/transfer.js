import usersNameRequest from '../../api/usersName'
import createTransactionRequest from '../../api/createTransaction'
import listTransactionRequest from '../../api/listTransaction'

import {
  SET_USERS_LIST,
  CLEAR_USER_LIST,
  ERROR_USER_LIST,
  TRANSACTION_FETCHING,
  TRANSACTION_INFO_SET,
  TRANSACTION_INFO_SET_ERROR,
  TRANSACTION_LIST_ERROR,
  TRANSACTION_LIST_FETCHING,
  TRANSACTION_LIST_SET,
  TRANSACTION_REPLAY_SET,
} from '../types'

export const getUsersName = (filter) => (dispatch) => {
  const body = { filter }

  return usersNameRequest({ body })
    .then(({ data }) => {
      dispatch({
        type: SET_USERS_LIST,
        payload: data,
      })
    })
    .catch(({ response }) => {
      dispatch({
        type: ERROR_USER_LIST,
        payload: response.data,
      })
    })
}

export const clearUserList = () => (dispatch) => {
  return dispatch({
    type: CLEAR_USER_LIST,
  })
}

export const transactionCreate = (body) => (dispatch) => {
  dispatch({
    type: TRANSACTION_FETCHING,
  })

  return createTransactionRequest({ body })
    .then(({ data }) => {
      dispatch({
        type: TRANSACTION_INFO_SET,
        payload: data.trans_token,
      })
    })
    .catch(({ response }) => {
      dispatch({
        type: TRANSACTION_INFO_SET_ERROR,
        payload: response.data,
      })
    })
}

export const getTransactionList = () => (dispatch) => {
  dispatch({
    type: TRANSACTION_LIST_FETCHING,
  })

  return listTransactionRequest()
    .then(({ data }) => {
      dispatch({
        type: TRANSACTION_LIST_SET,
        payload: data.trans_token,
      })
    })
    .catch(({ response }) => {
      dispatch({
        type: TRANSACTION_LIST_ERROR,
        payload: response.data,
      })
    })
}

export const setTransactionReplay = (params) => (dispatch) => {
  return dispatch({
    type: TRANSACTION_REPLAY_SET,
    payload: params,
  })
}
