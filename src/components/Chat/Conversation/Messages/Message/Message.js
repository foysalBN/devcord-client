import './Message.css'
import React from 'react';
import Thumbnail from '../../../../Thumbnail/Thumbnail';

const Message = ({ sender, message, own }) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <Thumbnail />
            <div>
                <div className="message-text">
                    {message}
                </div>
                <div className="sender">
                    {sender}
                </div>
            </div>

        </div>
    );
};

export default Message;