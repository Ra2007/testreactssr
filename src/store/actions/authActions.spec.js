import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as t from '../types'
import { userLogout, registrUser, loginUser } from './auth'
import moxios from 'moxios'
import expect from 'expect'

const mockStore = configureMockStore([thunk])

describe('userLogout', () => {
  it('logout(): should create an action logout', () => {
    const expectedAction = {
      type: t.AUTH_LOGOUT,
    }
    const store = mockStore({})
    expect(store.dispatch(userLogout())).toEqual(expectedAction)
  })
})

describe('loginUser', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('login user successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { id_token: 'data' },
      })
    })

    const expectedActions = [
      {
        type: t.AUTH_FETCHING_START,
      },
      {
        type: t.SET_AUTH_TOKEN,
        payload: 'data',
      },
    ]

    const store = mockStore({})

    return store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('login user not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: { data: 'error' },
      })
    })

    const expectedActions = [
      {
        type: t.AUTH_FETCHING_START,
      },
      {
        type: t.SET_LOGIN_ERROR,
        payload: 'error',
      },
    ]

    const store = mockStore({})

    return store.dispatch(loginUser()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('registrUser', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('registr user successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { id_token: 'data' },
      })
    })

    const expectedActions = [
      {
        type: t.AUTH_FETCHING_START,
      },
      {
        type: t.SET_AUTH_TOKEN,
        payload: 'data',
      },
    ]

    const store = mockStore({})

    return store.dispatch(registrUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('registr user not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: { data: 'error' },
      })
    })

    const expectedActions = [
      {
        type: t.AUTH_FETCHING_START,
      },
      {
        type: t.SET_LOGIN_ERROR,
        payload: 'error',
      },
    ]

    const store = mockStore({})

    return store.dispatch(registrUser()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
