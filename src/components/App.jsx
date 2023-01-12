// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { PageNav } from "./PageNav/PageNav";

import { Profile } from "./task1/Profile";
import userData from "../user.json";

import { Statistics } from "./task2/Statistics";
import data from "../data.json"

export const App = () => {
  return (
    <div>
      <PageNav title="Home Work React 1 by Anastasiia Andrusenko" />
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
};