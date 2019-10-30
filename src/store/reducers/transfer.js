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

const initialState = {
  users: [],
  transactionInfo: {},
  fetching: false,
  transactionError: null,
  transactionList: [],
  fetchingTransactionList: false,
  transactionListError: null,
  transactionReplay: {},
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USERS_LIST:
      return {
        ...state,
        users: payload,
      }

    case CLEAR_USER_LIST:
      return {
        ...state,
        users: [],
      }

    case TRANSACTION_FETCHING:
      return {
        ...state,
        fetching: true,
        transactionError: null,
      }

    case TRANSACTION_INFO_SET:
      return {
        ...state,
        transactionInfo: payload,
        fetching: false,
        transactionError: null,
      }

    case TRANSACTION_INFO_SET_ERROR:
      return {
        ...state,
        transactionInfo: {},
        fetching: false,
        transactionError: payload,
      }

    case TRANSACTION_LIST_ERROR:
      return {
        ...state,
        fetchingTransactionList: false,
        transactionListError: payload,
      }
    case TRANSACTION_LIST_FETCHING:
      return {
        ...state,
        fetchingTransactionList: true,
      }
    case TRANSACTION_LIST_SET:
      return {
        ...state,
        transactionList: payload,
        fetchingTransactionList: false,
        transactionListError: null,
      }

    case TRANSACTION_REPLAY_SET:
      return {
        ...state,
        transactionReplay: payload,
      }

    default:
      return state
  }
}
