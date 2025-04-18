
const socket = new WebSocket('ws://192.168.1.18:8080')
socket.addEventListener('open',() => {
    console.log('client joined the server');
})