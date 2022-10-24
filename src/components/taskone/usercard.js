import { UserAva } from './userava';
import { UserStats } from './userstats';

import css from './usecard.module.css';

export function UserCard(props) {

  return (
    <div className={css.profile}>
      <UserAva user={props.user} />
      <UserStats stats={props.user.stats} />
    </div>
  );
}
