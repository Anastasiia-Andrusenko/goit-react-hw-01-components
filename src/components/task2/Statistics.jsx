import PropTypes from 'prop-types';

import css from '../task2/Statistics.module.css'

import getRandomColor from './getRandomColor';

export const Statistics = ({ title, stats }) => {
  return <section className={css.statistics} id="task-2">
    <h2 className={css.title}>{title}</h2>
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) =>
        <li className={css.item} key={id} style={{backgroundColor: getRandomColor() }}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      )}
    </ul>
  </section>
};


// Statistics.defaultProps = {
//   stats: [],
// };

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}
