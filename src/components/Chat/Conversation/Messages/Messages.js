import './Messages.css'
import React, { useEffect, useState } from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom'
import useAuth from '../../../../hook/useAuth';




const Messages = ({ messages }) => {
    const { user } = useAuth()


    useEffect(() => {
        // load message if room change


    }, [])


    return (
        <ScrollToBottom className='messages'>
            {
                messages.map((message, i) => (
                    <Message
                        key={i}
                        {...message}
                        own={user.uid === message.uid ? 1 : 0}
                    />
                ))
            }


            {/* <Message />
            <Message />
            <Message own={1} />
            <Message /> */}
        </ScrollToBottom>
    );
};

export default Messages;