import PropTypes from 'prop-types';
import css from '../task3/FriendList.module.css';




export const FriendList = ({ friends }) => {
  return <>
    <h2 id="task-3" className={css.title}>Friends List</h2>
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name}) => 
        <li className={css.item} key={id}>
           <span
             className={isOnline ? `${css.check} ${css.online}` : `${css.check} ${css.ofline}`}>
          </span>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            width="48"
           />
          <p className={css.name}>{name}</p>
        </li>
      )}
    </ul>
  </>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    })
  )
}