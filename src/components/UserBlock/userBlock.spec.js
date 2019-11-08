import React from 'react'
import { mount } from 'enzyme'
import UserBlock from './index'

describe('UserBlock', () => {
  const props = {
    token: 'token',
    userInfo: {
      name: 'name',
      balance: 500,
    },
    exitApp: jest.fn(),
    push: jest.fn(),
  }
  const wrapperUserBlock = mount(<UserBlock {...props} />)

  it('renders <UserBlock /> class user-block', () => {
    expect(wrapperUserBlock.find('.user-block')).toHaveLength(1)
  })

  it('renders <UserBlock /> user info', () => {
    expect(wrapperUserBlock.find('.user-info-block').text()).toEqual('name | PW: 500')
  })

  it('register click Button Logout and transfer parametr ', () => {
    expect(wrapperUserBlock.find('Button')).toHaveLength(1)
    expect(wrapperUserBlock.find('Button').text()).toEqual('Logout')

    wrapperUserBlock.find('Button').simulate('click', {
      exitApp: () => {},
    })
    expect(props.exitApp).toHaveBeenCalledWith()
  })
})

describe('UserBlock', () => {
  const props = {
    token: null,
    push: jest.fn(),
  }
  const wrapperUserBlock = mount(<UserBlock {...props} />)

  it('renders <UserBlock /> class user-block', () => {
    expect(wrapperUserBlock.find('.user-block')).toHaveLength(1)
  })

  it('renders <UserBlock /> user info', () => {
    expect(wrapperUserBlock.find('.user-info-block').text()).toEqual('')
  })

  it('register click Button Logout and transfer parametr ', () => {
    expect(wrapperUserBlock.find('Button')).toHaveLength(2)
    expect(
      wrapperUserBlock
        .find('Button')
        .at(0)
        .text()
    ).toEqual('Login')
    expect(
      wrapperUserBlock
        .find('Button')
        .at(1)
        .text()
    ).toEqual('Sign Up')

    wrapperUserBlock
      .find('Button')
      .at(0)
      .simulate('click', {
        push: () => {},
      })
    expect(props.push).toHaveBeenCalledWith('/login')
    wrapperUserBlock
      .find('Button')
      .at(1)
      .simulate('click', {
        push: () => {},
      })
    expect(props.push).toHaveBeenCalledWith('/signup')
  })
})
