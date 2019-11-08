import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button', () => {
  const props = {
    className: 'newClass',
    disabled: true,
    isBusy: true,
  }
  const wrapperInput = shallow(<Button {...props} />)

  it('renders <Button /> class className ', () => {
    expect(wrapperInput.find('.newClass')).toHaveLength(1)
  })

  it('renders <Button /> disabled ', () => {
    expect(wrapperInput.find('.disabled')).toHaveLength(1)
  })

  it('renders <Button /> isBusy ', () => {
    expect(
      wrapperInput
        .find('div')
        .at(0)
        .prop('className')
    ).toEqual('button newClass  disabled')
  })

  it('renders <Button /> isBusy ', () => {
    expect(
      wrapperInput
        .find('div')
        .at(1)
        .text()
    ).toEqual('<Loader />')
  })
})

describe('Button', () => {
  const props = {
    disabled: false,
    isBusy: false,
    children: 'children',
  }
  const wrapperInput = shallow(<Button {...props} />)

  it('renders <Button /> disabled ', () => {
    expect(wrapperInput.find('.disabled')).toHaveLength(0)
  })

  it('renders <Button /> isBusy ', () => {
    expect(
      wrapperInput
        .find('div')
        .at(0)
        .prop('className')
    ).toEqual('button   ')
  })

  it('renders <Button /> isBusy ', () => {
    expect(
      wrapperInput
        .find('div')
        .at(1)
        .text()
    ).toEqual('children')
  })
})
