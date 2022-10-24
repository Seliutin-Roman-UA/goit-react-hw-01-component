import { UserCard } from './taskone/usercard';
import { StatsInfo } from './tasktwo/statsinfo';
import { FriendList } from './taskthree/listfriends';
import { TransactionHistory } from './taskfour/bank';

import data from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import bank from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        flexWrap: 'wrap',
        maxWidth: 1200,
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <UserCard user={data} />
      <StatsInfo title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={bank} />
    </div>
  );
};
