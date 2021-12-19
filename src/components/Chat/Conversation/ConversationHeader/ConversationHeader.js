import './ConversationHeader.css'
import React, { useContext } from 'react';
import Thumbnail from '../../../Thumbnail/Thumbnail';
import { chatContext } from '../../Chat';

const ConversationHeader = () => {
    const { room } = useContext(chatContext)

    return (
        <div className='conversation-header'>
            <Thumbnail name={room.name} />
            {room.name}
        </div>
    );
};

export default ConversationHeader;