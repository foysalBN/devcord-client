import './Chat.css'
import React, { createContext, useEffect, useRef, useState } from 'react';
import useAuth from '../../hook/useAuth';
import Rooms from './Rooms/Rooms';
import Conversation from './Conversation/Conversation';
import io from 'socket.io-client'

let socket;
const serverEndpoint = 'https://cryptic-lowlands-90159.herokuapp.com/'
export const chatContext = createContext()


const defaultRoom = {
    _id: "61bf2f84a26fae24eec0657b",
    name: "Javascript"
}

const Chat = () => {
    const { user, logOut } = useAuth()
    const [room, setRoom] = useState(defaultRoom)
    const [conversations, setConversations] = useState([])
    const inputRef = useRef()


    useEffect(() => {
        socket = io(serverEndpoint)
        // if room exist > join to room
        if (room.name) {
            socket.emit('join', { user, room })
        }
    }, [room])

    // Load previou chat
    useEffect(() => {
        fetch(`https://cryptic-lowlands-90159.herokuapp.com/conversation?roomid=c_${room._id}`)
            .then(res => res.json())
            .then(data => {
                setConversations(data)
            })
    }, [room])

    useEffect(() => {
        // listen new message
        socket.on('get-new-message', data => {
            setConversations([...conversations, data])
        })

    }, [conversations])




    // send message
    const sendMessage = (newMessage) => {
        if (inputRef.current.value == '') return;

        const data = {
            sender: user.displayName,
            uid: user.uid,
            message: inputRef.current.value,
            roomId: room._id,
        }
        socket.emit('new-message', data)
        // clearing input
        inputRef.current.value = ''

    }


    const allContext = {
        test: 'test context',
        room,
        setRoom,
        conversations,
        inputRef,
        sendMessage,
    }

    return (
        <chatContext.Provider value={allContext}>
            <div className='chat'>
                <Rooms />
                <Conversation room={room} />


                {/* <button
                    onClick={() => {
                        // setConversations([])
                        console.log(conversations)
                    }}
                >test</button> */}


            </div >
        </chatContext.Provider>
    );
};

export default Chat;