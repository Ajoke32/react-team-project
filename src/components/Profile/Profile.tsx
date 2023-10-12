import React from 'react';

interface ProfileProps {
    username: string;
    email: string;
    bio: string;
}

function Profile({ username, email, bio }: ProfileProps) {
    return (
        <div>
            <h2>{username}</h2>
            <p>{email}</p>
            <p>{bio}</p>
        </div>
    );
}

export default Profile;