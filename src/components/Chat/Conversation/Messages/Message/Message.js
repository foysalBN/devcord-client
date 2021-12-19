import './Message.css'
import React from 'react';
import Thumbnail from '../../../../Thumbnail/Thumbnail';

const Message = ({ own }) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <Thumbnail />
            <div>
                <div className="message-text">
                    Hello
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus minus
                </div>
                <div className="sender">
                    Name fasdfdas
                </div>
            </div>

        </div>
    );
};

export default Message;