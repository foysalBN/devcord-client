import './Conversation.css'
import React, { useContext } from 'react';
import Room from '../Rooms/Room/Room';
import Messages from './Messages/Messages';
import ConversationHeader from './ConversationHeader/ConversationHeader';
import ConversationInput from './ConversationInput/ConversationInput';
import { chatContext } from '../Chat';

const Conversation = () => {
    const { conversations, room } = useContext(chatContext)

    return (
        <div className='conversation'>
            <ConversationHeader />
            <Messages messages={conversations} />
            <ConversationInput />
        </div>
    );
};

export default Conversation;