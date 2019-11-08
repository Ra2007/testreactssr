import React from 'react'
import { shallow } from 'enzyme'
import UsersList from './index'

describe('UsersList', () => {
  const props = { users: [], isShowList: false }
  const wrapperUsersList = shallow(<UsersList {...props} />)

  it('renders <UsersList /> no class user-list', () => {
    expect(wrapperUsersList.find('.user-list')).toHaveLength(0)
  })
})

describe('UsersList', () => {
  const props = {
    users: [{ id: 1, name: 'name' }],
    name: 'name2',
    handleName: jest.fn(),
    isShowList: true,
  }
  const wrapperUsersList = shallow(<UsersList {...props} />)

  it('renders <UsersList /> class user-list', () => {
    expect(wrapperUsersList.find('.user-list')).toHaveLength(1)
  })

  it('renders <UsersList /> text class user-item', () => {
    expect(wrapperUsersList.find('.user-item').text()).toEqual('name')
  })

  wrapperUsersList.find('.user-item').simulate('click', {
    handleName: () => {},
  })
  expect(props.handleName).toHaveBeenCalledWith('name')
})

describe('UsersList', () => {
  const props = {
    users: [{ id: 1, name: 'name' }],
    name: '',
    handleName: jest.fn(),
    isShowList: true,
  }
  const wrapperUsersList = shallow(<UsersList {...props} />)

  it('renders <UsersList /> class user-list', () => {
    expect(wrapperUsersList.find('.user-list')).toHaveLength(1)
  })

  it('renders <UsersList /> no class user-item', () => {
    expect(wrapperUsersList.find('.user-item')).toHaveLength(0)
  })
})

describe('UsersList', () => {
  const props = { users: [], isShowList: true }
  const wrapperUsersList = shallow(<UsersList {...props} />)

  it('renders <UsersList /> no class user-list', () => {
    expect(wrapperUsersList.find('.user-list')).toHaveLength(0)
  })
})
