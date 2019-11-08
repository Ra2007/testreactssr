import React from 'react'
import { shallow } from 'enzyme'
import Input from './index'

describe('Input', () => {
  const props = {
    className: 'newClass',
    value: 'test value',
    handleInput: (e) => (props.value = 'test handle'),
    error: 'error text',
    label: 'label text',
  }
  const wrapperInput = shallow(<Input {...props} />)

  it('renders <Input /> teg main', () => {
    expect(wrapperInput.find('main')).toHaveLength(1)
  })

  it('renders <Input /> class className ', () => {
    expect(wrapperInput.find('.newClass')).toHaveLength(1)
  })

  it('renders <Input /> error text class error input-error ', () => {
    expect(wrapperInput.find('.error')).toHaveLength(1)
    expect(wrapperInput.find('.input-error').text()).toEqual('error text')
  })

  it('renders <Input /> label text ', () => {
    expect(wrapperInput.find('.input-label').text()).toEqual('label text')
  })

  it('render <Input /> value ', () => {
    expect(
      wrapperInput
        .find('input')
        .at(0)
        .prop('value')
    ).toEqual('test value')

    wrapperInput
      .find('input')
      .at(0)
      .simulate('change', {
        target: { value: 'test handle' },
      })
    expect(props.value).toEqual('test handle')
  })

  describe('Input', () => {
    const props = {
      className: '',
    }
    const wrapperInput = shallow(<Input {...props} />)

    it('renders <Input /> style ', () => {
      expect(wrapperInput.find('input').prop('className')).toEqual('input  ')
    })
  })
})
