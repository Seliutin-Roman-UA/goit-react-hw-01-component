import css from './Profile.module.css';
import PropTypes from 'prop-types';

export function UserAva(props) {
  const {
    user: { avatar, username, tag, location },
  } = props;

  return (
    <div className={css.description}>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}
UserAva.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
