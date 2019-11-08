import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as t from '../types'
import {
  getUsersName,
  clearUserList,
  transactionCreate,
  getTransactionList,
  setTransactionReplay,
} from './transfer'
import moxios from 'moxios'
import expect from 'expect'

const mockStore = configureMockStore([thunk])

describe('setTransactionReplay', () => {
  it('set transaction replay', () => {
    const expectedAction = {
      type: t.TRANSACTION_REPLAY_SET,
      payload: 'params',
    }
    const store = mockStore({})
    expect(store.dispatch(setTransactionReplay('params'))).toEqual(expectedAction)
  })
})

describe('clearUserList', () => {
  it('clear user list', () => {
    const expectedAction = {
      type: t.CLEAR_USER_LIST,
    }
    const store = mockStore({})
    expect(store.dispatch(clearUserList())).toEqual(expectedAction)
  })
})

describe('getUsersName', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('get list users name', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'data',
      })
    })

    const expectedActions = [
      {
        type: t.SET_USERS_LIST,
        payload: 'data',
      },
    ]

    const store = mockStore({})

    return store.dispatch(getUsersName()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('get list users name error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: 'error',
      })
    })

    const expectedActions = [
      {
        type: t.ERROR_USER_LIST,
        payload: 'error',
      },
    ]

    const store = mockStore({})

    return store.dispatch(getUsersName()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('transactionCreate', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('transaction create successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { trans_token: 'token' },
      })
    })

    const expectedActions = [
      {
        type: t.TRANSACTION_FETCHING,
      },
      {
        type: t.TRANSACTION_INFO_SET,
        payload: 'token',
      },
    ]

    const store = mockStore({})

    return store.dispatch(transactionCreate()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('transaction create not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: { data: 'error' },
      })
    })

    const expectedActions = [
      {
        type: t.TRANSACTION_FETCHING,
      },
      {
        type: t.TRANSACTION_INFO_SET_ERROR,
        payload: 'error',
      },
    ]

    const store = mockStore({})

    return store.dispatch(transactionCreate()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('getTransactionList', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('get transaction list successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { trans_token: 'token' },
      })
    })

    const expectedActions = [
      {
        type: t.TRANSACTION_LIST_FETCHING,
      },
      {
        type: t.TRANSACTION_LIST_SET,
        payload: 'token',
      },
    ]

    const store = mockStore({})

    return store.dispatch(getTransactionList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('get transaction list not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: { data: 'error' },
      })
    })

    const expectedActions = [
      {
        type: t.TRANSACTION_LIST_FETCHING,
      },
      {
        type: t.TRANSACTION_LIST_ERROR,
        payload: 'error',
      },
    ]

    const store = mockStore({})

    return store.dispatch(getTransactionList()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
