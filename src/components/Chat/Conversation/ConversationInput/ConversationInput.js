import './ConversationInput.css'
import React from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri'

const ConversationInput = () => {
    return (
        <div className='conversation-input'>
            <input
                type="text"
                placeholder='Enter Message....'
            />
            <RiSendPlane2Fill className='icon' />
        </div>
    );
};

export default ConversationInput;