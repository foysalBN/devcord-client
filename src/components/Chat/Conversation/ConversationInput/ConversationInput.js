import './ConversationInput.css'
import React, { useContext, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri'
import { chatContext } from '../../Chat';
import { getAuth } from 'firebase/auth';

const ConversationInput = () => {
    const [message, setMessage] = useState('')
    const { user } = getAuth()
    const { sendMessage } = useContext(chatContext)


    return (
        <div className='conversation-input'>
            <input
                type="text"
                placeholder='Enter Message....'
                onChange={e => setMessage(e.target.value)}
            />
            <RiSendPlane2Fill
                className='icon'
                onClick={() => sendMessage(message)}
            />
        </div>
    );
};

export default ConversationInput;