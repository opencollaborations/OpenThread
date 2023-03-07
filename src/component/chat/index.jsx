import { Card } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Message from './message';

const Chat = () => {
    const chats= useMessage()
    return (
        <section className='h-full '>
            {chats.map(chat => <Message key={chat.id} chat={chat}/>)} 
            {chats.map(chat => <Message key={chat.id} chat={chat}/>)} 
            {chats.map(chat => <Message key={chat.id} chat={chat}/>)} 
            {chats.map(chat => <Message key={chat.id} chat={chat}/>)} 
            {chats.map(chat => <Message key={chat.id} chat={chat}/>)} 
            {chats.map(chat => <Message key={chat.id} chat={chat}/>)} 
        </section>
    );
}

export default Chat;

function useMessage() {

    const [message, setmessage] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/chats')
            .then((res) => res.json())
            .then((tread) => setmessage(tread))
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return message
}