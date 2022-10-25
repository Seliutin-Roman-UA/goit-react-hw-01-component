import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  
  return (
    <ul className={css.friend_list}>
      {friends.map(i => (
        <li key={i.id} className={css.item}>
          <span
            className={css.status}
            style={{
              backgroundColor: `${i.isOnline ? 'green' : 'red'}`,
            }}
          ></span>
          <img
            className={css.avatar}
            src={i.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{i.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendsList: PropTypes.exact({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};