
import io from 'socket.io-client';
let baseUrl = process.env.REACT_APP_BASE_URL_LIVE;

const socket = io(baseUrl)

// export const joinRoom =(data)=>{
//     return socket.emit('join_room', data, (d) => {
//         console.log(d);
//     });
// }

export const connectToSocket =(data)=>{
    socket.on('connect', ()=>{
        console.log("connect");
        socket.emit('join_room', data, (d) => {
            console.log("Joined Room",d);
        });
    });
}

export const sendMessageSocket =(data)=>{
    socket.emit('send_message', data);
}

export {socket}