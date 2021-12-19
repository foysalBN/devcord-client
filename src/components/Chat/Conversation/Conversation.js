import './Conversation.css'
import React from 'react';
import Room from '../Rooms/Room/Room';
import Messages from './Messages/Messages';
import ConversationHeader from './ConversationHeader/ConversationHeader';
import ConversationInput from './ConversationInput/ConversationInput';

const Conversation = () => {
    return (
        <div className='conversation'>
            <ConversationHeader />
            <Messages />
            <ConversationInput />

        </div>
    );
};

export default Conversation;