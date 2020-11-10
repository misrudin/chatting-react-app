
import io from 'socket.io-client';
let baseUrl = process.env.REACT_APP_BASE_URL_LIVE;

const socket = io(baseUrl)

export const joinRoom =(data)=>{
    return socket.emit('join_room', data, (d) => {
        console.log(d);
    });
}

export const listenMessage =()=>{
    socket.on('new_message', (message)=>{
        console.log(JSON.parse(message));
       return message
    });
}

export const sendMessageSocket =(data)=>{
    socket.emit('send_message_web', data);
}

export {socket}