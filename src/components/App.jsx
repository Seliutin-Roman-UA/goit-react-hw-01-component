import { UserCard } from './Profile/Profile';
import { StatsInfo } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
