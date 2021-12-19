import './Rooms.css'
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'
import Room from './Room/Room';
import useAuth from '../../../hook/useAuth';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const { user, logOut } = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
    }, [])

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
                {
                    rooms.map(room => (
                        <Room key={room._id} room={room} />
                    ))
                }
            </div>
            <div className='footer'>
                <p>{user.displayName}</p>
                <button
                    onClick={logOut}
                >SignOut</button>
            </div>

        </div>
    );
};

export default Rooms;