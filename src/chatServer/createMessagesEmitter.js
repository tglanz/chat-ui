export default ({ socket, event }) => message => socket.emit(event, message);