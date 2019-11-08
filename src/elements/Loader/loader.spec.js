import React from 'react'
import { shallow } from 'enzyme'
import Loader from './index'

describe('Logo', () => {
  const props = {
    isBig: true,
    className: 'className',
    ballClassName: 'ballClassName',
    wrapperClassName: 'wrapperClassName',
  }
  const wrapperLogo = shallow(<Loader {...props} />)

  it('renders <Loader /> teg span', () => {
    expect(wrapperLogo.find('span')).toHaveLength(5)
  })

  it('renders <Loader /> class third ', () => {
    expect(wrapperLogo.find('.third')).toHaveLength(1)
  })

  it('renders <Loader /> props  ', () => {
    expect(wrapperLogo.find('.big')).toHaveLength(4)
    expect(wrapperLogo.find('.className')).toHaveLength(1)
    expect(wrapperLogo.find('.ballClassName')).toHaveLength(3)
    expect(wrapperLogo.find('.wrapperClassName')).toHaveLength(1)
  })
})
