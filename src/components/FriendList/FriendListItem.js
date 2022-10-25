import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, nameFriends, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          backgroundColor: `${isOnline ? 'green' : 'red'}`,
        }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{nameFriends}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
