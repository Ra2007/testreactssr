import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as t from '../types'
import { getUserInfo } from './user'
import moxios from 'moxios'
import expect from 'expect'

const mockStore = configureMockStore([thunk])

describe('getUserInfo', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('get user info successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { user_info_token: 'info' },
      })
    })

    const expectedActions = [
      {
        type: t.START_USER_INFO,
      },
      {
        type: t.SET_USER_INFO,
        payload: 'info',
      },
    ]

    const store = mockStore({})

    return store.dispatch(getUserInfo()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('get user info not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: 'error',
      })
    })

    const expectedActions = [
      {
        type: t.START_USER_INFO,
      },
      {
        type: t.SET_USER_INFO_ERROR,
        payload: 'error',
      },
      {
        type: t.AUTH_LOGOUT,
      },
    ]

    const store = mockStore({})

    return store.dispatch(getUserInfo()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
