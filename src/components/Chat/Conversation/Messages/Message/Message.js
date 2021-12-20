import './Message.css'
import React from 'react';
import Thumbnail from '../../../../Thumbnail/Thumbnail';
import ReactEmoji from 'react-emoji'

const Message = ({ sender, message, own }) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <Thumbnail name={sender} />
            <div>
                <div className="message-text">
                    {
                        ReactEmoji.emojify(message)
                    }
                </div>
                <div className="sender">
                    {sender}
                </div>
            </div>

        </div>
    );
};

export default Message;