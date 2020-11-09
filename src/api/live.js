import io from 'socket.io-client';
let baseUrl = process.env.REACT_APP_BASE_URL_LIVE;

let socket;

// export const joinRoom =(data)=>{
//     socket = io(baseUrl);
//     return socket.emit('join_room', data, (d) => {
//         console.log(d);
//       });
// }


// export const joinRoom =(data)=>{
//     socket = io(baseUrl);
//     return socket.emit('join_room', data, (d) => {
//         console.log(d);
//       });
// }

// export const listenMessage =()=>{
//     socket.on('message', (data)=>{
//         console.log(data);
//     });
// }

// export const sendMessage =(data)=>{
//     socket.emit('join_room', data);
// }