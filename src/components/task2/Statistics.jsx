import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
  return <section className="statistics" id="task-2">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(data => 
        <li className="item" key={data.id}>
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      )}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
}