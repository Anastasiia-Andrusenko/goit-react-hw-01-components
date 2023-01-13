import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return <>
    <h2 id="task-3">Friends List</h2>
    <ul className="friend-list">
      {friends.map(friend => 
        <li className="item" key={friend.id}>
           <span
             className={friend.isOnline ? "green" : "red"}>
          </span>
          <img
            src={friend.avatar}
            alt="User avatar"
            className="friend-avatar"
            width="48"
           />
           <p className="friend-name">{friend.name}</p>
        </li>
      )}
    </ul>
  </>
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}