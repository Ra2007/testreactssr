import reducer, { initialState } from './auth'
import * as t from '../types'

describe('auth reducer', () => {
  it('AUTH_LOGOUT', () => {
    const initialState = {
      token: null,
      signUpError: 'error',
      loginError: 'error',
      fetching: true,
    }

    const action = {
      type: t.AUTH_LOGOUT,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      token: null,
      signUpError: null,
      loginError: null,
      fetching: false,
    })
  })

  it('AUTH_FETCHING_START', () => {
    const action = {
      type: t.AUTH_FETCHING_START,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      signUpError: null,
      loginError: null,
      fetching: true,
    })
  })

  it('SET_AUTH_TOKEN', () => {
    const initialState = {
      token: null,
      signUpError: 'error',
      loginError: 'error',
      fetching: true,
    }

    const action = {
      type: t.SET_AUTH_TOKEN,
      payload: 'token',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      token: 'token',
      signUpError: null,
      loginError: null,
      fetching: false,
    })
  })

  it('SET_SIGNUP_ERROR', () => {
    const initialState = {
      ...initialState,
      fetching: true,
    }
    const action = {
      type: t.SET_SIGNUP_ERROR,
      payload: 'error',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      signUpError: 'error',
      fetching: false,
    })
  })

  it('SET_LOGIN_ERROR', () => {
    const initialState = {
      ...initialState,
      fetching: true,
    }
    const action = {
      type: t.SET_LOGIN_ERROR,
      payload: 'error',
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loginError: 'error',
      fetching: false,
    })
  })

  it('default', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
