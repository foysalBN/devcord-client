import './Chat.css'
import React from 'react';
import useAuth from '../../hook/useAuth';

const Chat = () => {
    const { user, logOut } = useAuth()

    return (
        <div>
            <h2>Chat</h2>
            <h2>{user.displayName}</h2>
            <button
                onClick={logOut}
            >SignOut</button>
        </div>
    );
};

export default Chat;