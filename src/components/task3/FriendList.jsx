
export const FriendList = ({friends}) => {
  return <ul className="friend-list" id="task-3">
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
}