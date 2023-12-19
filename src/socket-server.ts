import {Server} from "socket.io";
import {DefaultEventsMap} from "socket.io/dist/typed-events";

export const activeSocketServer =(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)=>{
    io.on('connection', (socket) => {
        const id  = socket.handshake.query.id
        console.log(id,socket.id)
        socket.on('hello', (data) =>{
            console.log('from hello',data)
            socket.emit('response','data received')
            // io.to(socket.id).emit('response','data received')
        })
        socket.on('a',data=>{
            socket.emit('b','data received from a')
        })
        socket.on('disconnect',(reason)=>{
            console.log(`user disconnected. Id ${socket.id}.  ${reason}`)
        })
    });

}