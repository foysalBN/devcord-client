import './Messages.css'
import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom'

const Messages = () => {
    return (
        <ScrollToBottom className='messages'>
            <Message />
            <Message />
            <Message own={1} />
            <Message />
        </ScrollToBottom>
    );
};

export default Messages;