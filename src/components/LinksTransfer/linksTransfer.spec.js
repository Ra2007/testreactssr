import React from 'react'
import { shallow } from 'enzyme'
import LinksTransfer from './index'

describe('LinksTransfer', () => {
  const props = {
    token: 'token',
  }
  const wrapperInput = shallow(<LinksTransfer {...props} />)

  it('renders <LinksTransfer /> class transfer-block ', () => {
    expect(
      wrapperInput
        .find('div')
        .at(0)
        .prop('className')
    ).toEqual('transfer-block')
  })

  it('renders <LinksTransfer /> class className ', () => {
    expect(
      wrapperInput
        .find('Link')
        .at(0)
        .text()
    ).toEqual('Transfer currency')
  })
})

describe('LinksTransfer', () => {
  const props = {
    token: null,
  }
  const wrapperInput = shallow(<LinksTransfer {...props} />)

  it('renders <LinksTransfer /> class className ', () => {
    expect(wrapperInput.find('Link')).toHaveLength(0)
  })
})
