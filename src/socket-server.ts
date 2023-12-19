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
        const id  = socket.handshake.query.id
        console.log(id,socket.id)
        socket.broadcast.emit('joined-to-edit', entryALog({
            type: 'alert',
            message: "A new user joined to edit.",
            receiver:null,
            sender:'system'
        }))

        socket.on('disconnect',(reason)=>{
            console.log(`user disconnected. Id ${socket.id}.  ${reason}`)
        })
    });

}