import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name: nameFriends, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            nameFriends={nameFriends}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
