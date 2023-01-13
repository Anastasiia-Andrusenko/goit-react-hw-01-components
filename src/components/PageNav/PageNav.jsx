
import css from '../PageNav/PageNav.module.css';


export const PageNav = () => {
  return <div className={css.container}>
    <h1 className={css.title}>Home Work React 1 by Anastasiia Andrusenko</h1>
    <ul className={css.list}>
      <li className={css.item}>
        <a href='#task-1'>Task #1</a>
      </li>
      <li className={css.item}>
        <a href='#task-2'>Task #2</a>
      </li>
      <li className={css.item}>
        <a href='#task-3'>Task #3</a>
      </li>
      <li className={css.item}>
        <a href='#task-4'>Task #4</a>
      </li>
    </ul>
  </div>
}

