import PropTypes from 'prop-types';
import css from '../task3/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return <>
    <h2 id="task-3" className={css.title}>Friends List</h2>
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name}) => 
        <li className="item" key={id}>
           <span
             className={isOnline ? "green" : "red"}>
          </span>
          <img
            src={avatar}
            alt="User avatar"
            className="friend-avatar"
            width="48"
           />
           <p className="friend-name">{name}</p>
        </li>
      )}
    </ul>
  </>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    })
  )
}