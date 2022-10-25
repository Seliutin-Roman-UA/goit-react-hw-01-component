import { UserAva } from './Userava';
import { UserStats } from './Userstats';

import css from './Profile.module.css';

export function UserCard(props) {

  return (
    <div className={css.profile}>
      <UserAva user={props.user} />
      <UserStats stats={props.user.stats} />
    </div>
  );
}
