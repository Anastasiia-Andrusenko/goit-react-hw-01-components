// import css from '../PageNav/PageNav.module.css';
import PropTypes from 'prop-types';


export const PageNav = ({title}) => {
  return <div className="{css.nav-container}">
    <h1 className="title">{title}</h1>
    <ul className="nav-list">
      <li className="nav-item">
        <a href='#task-1'>Task #1</a>
      </li>
      <li className="nav-item">
        <a href='#task-2'>Task #2</a>
      </li>
      <li className="nav-item">
        <a href='#task-3'>Task #3</a>
      </li>
      <li className="nav-item">
        <a href='#task-4'>Task #4</a>
      </li>
    </ul>
  </div>
}

// title = Home Work React 1 by Anastasiia Andrusenko

PageNav.propTypes = {
  title: PropTypes.string.isRequired,
}