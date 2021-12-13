import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({username, tag, location, avatar, followers, views, likes }) => 
(<div className={s.profile}>
    <div className={s.description}>
            <img
            src={avatar}
            alt="User avatar"
            className={s.avatar}
            />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
        </div>

    <ul className={s.stats}>
            <li>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{followers}</span>
            </li>
            <li>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{views}</span>
            </li>
            <li>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{likes}</span>
            </li>
        </ul>
</div>);

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}


export default Profile;


// ReactDom.render(
//     <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//     />, document.querySelector('#root'),
// );