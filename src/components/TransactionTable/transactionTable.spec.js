import React from 'react'
import { mount } from 'enzyme'
import TransactionTable from './index'

describe('TransactionTable', () => {
  const props = {
    transactionInfo: [
      {
        date: 'date',
        username: 'user name',
        amount: -10,
        balance: 10,
      },
    ],
    caption: 'caption',
    replayBtn: jest.fn(),
  }
  const wrapperTable = mount(<TransactionTable {...props} />)

  it('renders <TransactionTable /> teg caption', () => {
    expect(wrapperTable.find('caption').text()).toEqual('caption')
  })

  it('renders <TransactionTable /> table', () => {
    expect(
      wrapperTable
        .find('tbody')
        .find('tr')
        .find('td')
        .at(0)
        .text()
    ).toEqual('date')
    expect(
      wrapperTable
        .find('tbody')
        .find('tr')
        .find('td')
        .at(1)
        .text()
    ).toEqual('user name')
    expect(
      wrapperTable
        .find('tbody')
        .find('tr')
        .find('td')
        .at(2)
        .text()
    ).toEqual('-10 PW')
    expect(
      wrapperTable
        .find('tbody')
        .find('tr')
        .find('td')
        .at(3)
        .text()
    ).toEqual('10 PW')
  })

  it('register click Button and transfer parametr ', () => {
    expect(wrapperTable.find('Button')).toHaveLength(1)
    expect(wrapperTable.find('Button').text()).toEqual('Repeat transfer')

    wrapperTable.find('Button').simulate('click', {
      replayBtn: () => {},
    })
    expect(props.replayBtn).toHaveBeenCalledWith({ amount: 10, userName: 'user name' })
  })
})

describe('TransactionTable', () => {
  const props = {
    transactionInfo: [
      {
        date: 'date',
        username: 'user name',
        amount: 10,
        balance: 10,
      },
    ],
  }
  const wrapperTable = mount(<TransactionTable {...props} />)

  it('renders <TransactionTable /> teg caption', () => {
    expect(wrapperTable.find('caption')).toHaveLength(0)
  })

  it('register click Button and transfer parametr ', () => {
    expect(wrapperTable.find('Button')).toHaveLength(0)
  })
})
