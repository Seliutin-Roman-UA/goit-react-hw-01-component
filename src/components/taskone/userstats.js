import css from './usecard.module.css';
import PropTypes from 'prop-types';

export function UserStats(props) {
  const { stats } = props;
  return (
    <ul className={css.stats}>
      {Object.keys(stats).map(i => (
        <li key={i} className={css.item}>
          <span className={css.label}>{i}</span>
          <span className={css.quantity}>{stats[i]}</span>
        </li>
      ))}
    </ul>
  );
}

UserStats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};