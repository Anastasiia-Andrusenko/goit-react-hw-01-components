
import { PageNav } from "./PageNav/PageNav";

import { Profile } from "./task1/Profile";
import userData from "../data/user.json";

import { Statistics } from "./task2/Statistics";
import statsData from "../data/data.json"

import { FriendList } from "./task3/FriendList";
import friendsData from "../data/friends.json";

import { TransactionHistory } from "./task4/TransactionHistory";
import transactionsData from "../data/transactions.json";

export const App = () => {
  return (
    <div>
      <PageNav/>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  )
};