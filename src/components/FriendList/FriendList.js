import React from "react";
import PropTypes from 'prop-types';
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                const classNames = [css.status];
                {friend.isOnline ? classNames.splice(0,0,css.statusOnline) : classNames.splice(0,0,css.statusOffline)}

                return (
                    <li key={friend.id} className={css.itemFriend}>
                        <span className={classNames.join(" ")}></span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default FriendList;