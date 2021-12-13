import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) =>
(
  <ul className={s.friendList}> {friends.map(({id, isOnline, avatar, name}) =>
  (<li key={id} className={s.item}>
            <span className={isOnline ? s.statusOnline : s.statusOffline}>{isOnline}</span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
        </li>))}
  
    </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
    }), 
  ),
};

export default FriendList;