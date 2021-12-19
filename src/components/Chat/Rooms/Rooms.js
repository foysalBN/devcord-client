import './Rooms.css'
import React from 'react';
import { FiSearch } from 'react-icons/fi'
import Room from './Room/Room';

const Rooms = () => {
    return (
        <div className='rooms'>
            <h4 className='title'>Devcord</h4>
            <div className="search-group">
                <FiSearch className='icon' />
                <input
                    className='search-box'
                    type="text"
                    placeholder='Search room'
                />
            </div>
            <h5>Rooms</h5>
            <div className="all-rooms">
                <Room />
                <Room />
                <Room />
                <Room />

            </div>

        </div>
    );
};

export default Rooms;