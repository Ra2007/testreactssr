import reducer, { initialState } from './transfer'
import * as t from '../types'

describe('transfer reducer', () => {
  it('SET_USERS_LIST', () => {
    const action = {
      type: t.SET_USERS_LIST,
      payload: 'list',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      users: 'list',
    })
  })

  it('ERROR_USER_LIST', () => {
    const action = {
      type: t.ERROR_USER_LIST,
      payload: 'error',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      usersError: 'error',
      users: [],
    })
  })

  it('CLEAR_USER_LIST', () => {
    const action = {
      type: t.CLEAR_USER_LIST,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      users: [],
    })
  })

  it('TRANSACTION_FETCHING', () => {
    const initialState = {
      ...initialState,
      transactionError: 'error',
    }

    const action = {
      type: t.TRANSACTION_FETCHING,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      fetching: true,
      transactionError: null,
    })
  })

  it('TRANSACTION_INFO_SET', () => {
    const initialState = {
      ...initialState,
      transactionError: 'error',
      fetching: true,
    }

    const action = {
      type: t.TRANSACTION_INFO_SET,
      payload: 'info',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      transactionInfo: 'info',
      fetching: false,
      transactionError: null,
    })
  })

  it('TRANSACTION_INFO_SET_ERROR', () => {
    const initialState = {
      ...initialState,

      fetching: true,
    }

    const action = {
      type: t.TRANSACTION_INFO_SET_ERROR,
      payload: 'error',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      transactionInfo: {},
      fetching: false,
      transactionError: 'error',
    })
  })

  it('TRANSACTION_LIST_ERROR', () => {
    const initialState = {
      ...initialState,

      fetchingTransactionList: true,
    }

    const action = {
      type: t.TRANSACTION_LIST_ERROR,
      payload: 'error',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      fetchingTransactionList: false,
      transactionListError: 'error',
    })
  })

  it('TRANSACTION_LIST_FETCHING', () => {
    const action = {
      type: t.TRANSACTION_LIST_FETCHING,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      fetchingTransactionList: true,
    })
  })

  it('TRANSACTION_LIST_SET', () => {
    const initialState = {
      ...initialState,
      transactionListError: 'error',
      fetchingTransactionList: true,
    }

    const action = {
      type: t.TRANSACTION_LIST_SET,
      payload: 'list',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      transactionList: 'list',
      fetchingTransactionList: false,
      transactionListError: null,
    })
  })

  it('TRANSACTION_REPLAY_SET', () => {
    const action = {
      type: t.TRANSACTION_REPLAY_SET,
      payload: 'replay',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      transactionReplay: 'replay',
    })
  })

  it('default', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
