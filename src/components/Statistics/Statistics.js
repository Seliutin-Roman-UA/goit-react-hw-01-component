import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getColor() {
  return Math.round(Math.random() * 16777215).toString(16);
}

export function StatsInfo({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(i => (
          <li
            key={i.id}
            className={css.item}
            style={{ backgroundColor: `#${getColor()}` }}
          >
            <span className={css.label}>{i.label}</span>
            <span className={css.percentage}>{i.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
StatsInfo.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};