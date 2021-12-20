import './Rooms.css'
import React, { useState, useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi'
import Room from './Room/Room';
import useAuth from '../../../hook/useAuth';
import { RiUser2Line } from 'react-icons/ri'
import { AiOutlineLogin } from 'react-icons/ai'
import { GrAddCircle, GrClose } from 'react-icons/gr'
import Modal from 'react-modal'
import { } from 'react-toastify'

Modal.setAppElement('#root')


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const { user, logOut } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const newRoomRef = useRef()

    useEffect(() => {
        fetch('https://cryptic-lowlands-90159.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
    }, [])

    // Add new room form submit
    const handleModalSubmit = e => {
        e.preventDefault()

        let newRoomName = newRoomRef.current.value
        if (newRoomName == '') return;

        const newRoom = {
            name: newRoomName,
            creator: user.displayName
        }
        fetch('https://cryptic-lowlands-90159.herokuapp.com/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRoom)
        })
            .then(res => res.json())
            .then(data => {
                console.log('newRoon: ', data)
                const _id = data.insertedId
                if (_id) {
                    setRooms([...rooms, { ...newRoom, _id }])
                }
            })
            .catch(err => {
                console.log('Got an error adding room', err)
            })

        newRoomRef.current.value = ''; // clear input
        setIsModalOpen(false) // close modal
    }

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
            <div className='all-room-header'>
                <h4>Rooms</h4>
                <GrAddCircle
                    className='icon'
                    title='Add new Room'
                    onClick={() => setIsModalOpen(true)}
                />
            </div>

            {/* add new modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: '#00000073',
                    },
                    content: {
                        top: 'calc(50% - 80px)',
                        left: 'calc(50% - 150px)',
                        width: '300px',
                        height: '160px',
                        padding: '2em',
                        borderRadius: '7px',
                        boxShadow: '0 0 17px 4px #0000004a'
                    }
                }}
            >
                <div className="modal-header">
                    <h3>Create New Room</h3>
                    <GrClose
                        onClick={() => setIsModalOpen(false)}
                    />
                </div>
                <form
                    className='modal-form'
                    onSubmit={handleModalSubmit}
                >
                    <p>Room Name:</p>
                    <input
                        type="text"
                        placeholder='Enter Room name'
                        ref={newRoomRef}
                    />
                    <button
                        className='modal-submit'
                        type="submit">
                        Create Room
                    </button>
                </form>
            </Modal>
            {/* end of modal */}


            <div className="all-rooms">
                {
                    rooms.map(room => (
                        <Room key={room._id} room={room} />
                    ))
                }
            </div>

            {/* user info and SignOut */}
            <div className='footer'>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                    <RiUser2Line />
                    {user.displayName}
                </p>
                <button
                    className='btn-logout'
                    onClick={logOut}
                >
                    Sign Out
                    <AiOutlineLogin />
                </button>
            </div>

        </div>
    );
};

export default Rooms;