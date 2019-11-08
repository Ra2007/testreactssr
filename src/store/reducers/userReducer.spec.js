import reducer, { initialState } from './user'
import * as t from '../types'

describe('user reducer', () => {
  it('AUTH_LOGOUT', () => {
    const initialState = {
      userInfo: 'info',
      userInfoError: 'error',
      userInfoFetching: true,
    }

    const action = {
      type: t.AUTH_LOGOUT,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      userInfo: null,
      userInfoError: null,
      userInfoFetching: false,
    })
  })

  it('START_USER_INFO', () => {
    const action = {
      type: t.START_USER_INFO,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      userInfoFetching: true,
      userInfoError: null,
    })
  })

  it('SET_USER_INFO', () => {
    const initialState = {
      userInfoError: 'error',
      userInfoFetching: true,
    }

    const action = {
      type: t.SET_USER_INFO,
      payload: 'info',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      userInfo: 'info',
      userInfoError: null,
      userInfoFetching: false,
    })
  })

  it('SET_USER_INFO_ERROR', () => {
    const initialState = {
      userInfoFetching: true,
    }

    const action = {
      type: t.SET_USER_INFO_ERROR,
      payload: 'error',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      userInfoError: 'error',
      userInfoFetching: false,
    })
  })

  it('default', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
