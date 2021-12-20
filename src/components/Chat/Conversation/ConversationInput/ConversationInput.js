import './ConversationInput.css'
import React, { useContext, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri'
import { chatContext } from '../../Chat';

const ConversationInput = () => {
    const { inputRef, sendMessage } = useContext(chatContext)


    return (
        <div className='conversation-input'>
            <input
                type="text"
                placeholder='Enter Message....'
                ref={inputRef}
                // Send message on enter press
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                }}
            />
            <RiSendPlane2Fill
                className='icon'
                onClick={sendMessage}
            />
        </div>
    );
};

export default ConversationInput;