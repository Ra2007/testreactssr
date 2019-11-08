import React from 'react'
import { shallow } from 'enzyme'
import Logo from './index'

describe('Logo', () => {
  const mockFetchGetNews = jest.fn()
  const props = {
    push: mockFetchGetNews,
  }
  const wrapperLogo = shallow(<Logo {...props} />)

  it('renders <Logo /> teg h1', () => {
    expect(wrapperLogo.find('h1')).toHaveLength(1)
  })

  it('renders <Logo /> text logo', () => {
    expect(wrapperLogo.text()).toEqual('ParrotWings')
  })

  it('register click Logo and transfer parametr ', () => {
    expect(wrapperLogo.find('.logo-nav').length).toEqual(1)
    wrapperLogo
      .find('.logo-nav')
      .at(0)
      .simulate('click', {
        preventDefault: () => {},
      })
    expect(mockFetchGetNews).toHaveBeenCalledWith('/')
  })
})
