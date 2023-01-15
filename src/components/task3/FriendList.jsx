import PropTypes from 'prop-types';
import css from '../task3/FriendList.module.css';
import { FriendListItem } from './FriendListItem';



export const FriendList = ({ friends }) => {
  return <>
    <h2 id="task-3" className={css.title}>Friends List</h2>
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name }) => 
        <FriendListItem
          key={id} 
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      )}
    </ul>
  </>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    })
  )
}