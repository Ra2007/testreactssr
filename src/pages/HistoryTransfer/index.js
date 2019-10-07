import React, {useEffect} from 'react'

const HistoryTransfer = (props) => {
  const {
    history: {push},
    getTransactionList,
    setTransactionReplay,
    transfer: {transactionList},
  } = props

  const transactionReplay = (params) => {
    setTransactionReplay(params)
    push('/transfer')
  }

  useEffect(() => {
    getTransactionList()
  }, [])

  return (
    <div>
      <h1>HistoryTransfer page</h1>
      <table className='table-info'>
        <thead>
          <tr>
            <td>date / time</td>
            <td>correspondent name</td>
            <td>amount</td>
            <td>balance</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {transactionList &&
            transactionList.map((tran) => (
              <tr key={tran.id}>
                <td>{tran.date}</td>
                <td>{tran.username}</td>
                <td>{`${tran.amount} PW`}</td>
                <td>{`${tran.balance} PW`}</td>
                <td>
                  {tran.amount < 0 && (
                    <button onClick={() => transactionReplay({userName: tran.username, amount: -tran.amount})}>
                      replay
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryTransfer
