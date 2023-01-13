import PropTypes from 'prop-types';

import css from '../task2/Statistics.module.css'

export const Statistics = ({title, stats}) => {
  return <section className={css.statistics} id="task-2">
    <h2 className={css.title}>{title}</h2>
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => 
        <li className={css.item} key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      )}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
}