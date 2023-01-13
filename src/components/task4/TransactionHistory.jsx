import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
  return <>
    <h2 id="task-4">Transaction History</h2>
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => 
          <tr className="" key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        )}
      </tbody>
    </table>
  </>
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
}