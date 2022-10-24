
import css from './bank.module.css'
import PropTypes from 'prop-types';

export function TransactionHistory(props) {

  const transaction = props.items;
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(i => (
          <tr key={i.id}>
            <td>{i.type}</td>
            <td>{i.amount}</td>
            <td>{i.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friendsList: PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
