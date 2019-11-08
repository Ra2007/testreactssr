import React from 'react'
import T from 'prop-types'
import Button from '../../elements/Button'

const TransactionTable = ({ transactionInfo, caption, replayBtn }) => {
  return (
    <table className='table-info'>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr className='table-head'>
          <td>date / time</td>
          <td>cor.name</td>
          <td>amount</td>
          <td>balance</td>
          {replayBtn && <td></td>}
        </tr>
      </thead>
      <tbody>
        {transactionInfo.map((info, i) => (
          <tr key={i}>
            <td>{info.date}</td>
            <td>{info.username}</td>
            <td>{`${info.amount} PW`}</td>
            <td>{`${info.balance} PW`}</td>
            {replayBtn && (
              <td>
                {info.amount < 0 && (
                  <Button
                    onClick={() => replayBtn({ userName: info.username, amount: -info.amount })}
                  >
                    Repeat transfer
                  </Button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable

TransactionTable.propTypes = {
  transactionInfo: T.arrayOf(
    T.shape({
      date: T.string,
      username: T.string,
      amount: T.number,
      balance: T.number,
    })
  ).isRequired,
  caption: T.string,
  replayBtn: T.func,
}
