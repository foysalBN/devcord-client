import './Room.css'
import React, { useContext } from 'react';
import Thumbnail from '../../../Thumbnail/Thumbnail';
import { chatContext } from '../../Chat';

const Room = ({ room }) => {
    const { setRoom } = useContext(chatContext)

    return (
        <div
            className='room'
            onClick={() => setRoom(room)}
        >
            <Thumbnail name={room.name} />
            <div className="name">
                {room.name}
            </div>
        </div>
    );
};

export default Room;