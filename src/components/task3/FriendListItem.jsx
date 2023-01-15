import PropTypes from 'prop-types';
import css from '../task3/FriendList.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return <>
    <li className={css.item}>
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
  </>
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
  )
}