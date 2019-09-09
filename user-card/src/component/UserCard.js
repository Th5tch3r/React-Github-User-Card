import React from 'react';

const UserCard = props => {
    return(
        <div className="user-card">
            <img src={props.avatar} alt={props.avatar}/>
                <p>{props.name}</p>
                <p>Username: {props.userName}</p>
                <p>Location: {props.location}</p>
                <p>Followers: {props.follower}</p>
                <p>Following: {props.following}</p>
        </div>
    )
}

export default UserCard;