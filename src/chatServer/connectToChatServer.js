import io from "socket.io-client";

import createMessagesEmitter from './createMessagesEmitter';
import createMessagesStream from './createMessagesStream';

export default ({ address }) => {
    const socket = io(address);

    socket.on("connect", function() {
        console.log("connected to chat server!");
    });

    socket.on("disconnect", function() {
        console.log("disconnected from chat server!");
    });

    // TBD - Configure
    const event = "spotim/chat"

    return {
        emitMessage: createMessagesEmitter({ socket, event }),
        messagesStream: createMessagesStream({ socket, event })
    };
}