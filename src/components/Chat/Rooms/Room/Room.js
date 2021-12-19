import './Room.css'
import React from 'react';
import Thumbnail from '../../../Thumbnail/Thumbnail';

const Room = () => {
    return (
        <div className='room'>
            <Thumbnail />
            <div className="name">
                Javascript
            </div>
        </div>
    );
};

export default Room;