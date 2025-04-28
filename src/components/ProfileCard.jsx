import React from 'react';

function ProfileCard({ name, bio, image }) {
    return (
        <div>
            <img src={image} alt={name} style={{ width: '30%', borderRadius: '6px' }} />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    );
}

export default ProfileCard;