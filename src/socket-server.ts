import {Server} from "socket.io";
import {DefaultEventsMap} from "socket.io/dist/typed-events";

type TLog = {
    type: "alert" | "message",
    sender: string | null,
    receiver: string | null,
    message: string
}

const entryALog = (payload:TLog):TLog=>{
    return{
        type:payload.type,
        message: payload.message,
        receiver: payload.receiver,
        sender: payload.sender
    }
}

export const activeSocketServer =(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)=>{
    io.on('connection', (socket) => {
        const {id,
            name,
            roomNumber
        }  = socket.handshake.query
        console.log(id,name,roomNumber)

        socket.on('joinRoom', ({name,roomNumber}) => {
            console.log('join room',{name,roomNumber})
            socket.join(roomNumber as string);
            console.log(`User ${name} joined this room.`);

            // Notify other users in the room
            io.to(roomNumber).emit('userJoined', entryALog({
                type: 'alert',
                message: `${name} joined this room.`,
                receiver:null,
                sender:'System'
            }));
        });

        socket.on('typing',(roomNumber,data)=>{
            console.log('typing',roomNumber,data)
            io.to(roomNumber).emit('typing-notify',data);
        })

        socket.on('update-docs',(roomNumber,name)=>{
            io.to(roomNumber).emit('update-docs-notify',entryALog({
                type: 'alert',
                message: `${name as string} updated this document.`,
                receiver:null,
                sender:'System'
            }));
        })

        socket.on('sendMessage',(payload:{
            roomNumber:string,
            data:TLog
        })=>{
            console.log('send message',{payload})
            // socket.emit('receiveMessage', `Received message from ${payload.sender}`)
            io.to(payload.roomNumber).emit('message',payload.data);
        })

        socket.on('disconnect',(reason)=>{
            console.log(`user disconnected. Id ${socket.id}.  ${reason}`)
            io.to(roomNumber as string).emit('userJoined', entryALog({
                type: 'alert',
                message: `${name as string} disconnected. reason- ${reason}`,
                receiver:null,
                sender:'System'
            }));
        })
    });

}