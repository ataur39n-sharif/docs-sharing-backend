/* 
    node application root file
*/

import config from "@/Config";
import connectDB from "@/Config/db";
import app from "@/app";
import http from "http";
import {Server} from "socket.io";
import {activeSocketServer} from "@/socket-server";

const server = http.createServer(app)
const {port} = config

//socket server
const io = new Server(server,{
    connectionStateRecovery: {
        maxDisconnectionDuration:10000
    },
    cors:{
        origin:[
            'http://localhost:3000'
        ]
    }
});
activeSocketServer(io)

// server listening
const main = async () => {
    try {
        await connectDB()
        server.listen(port, () => {
            console.log(`Server is listening on ${port}. Url: http://localhost:${port}`)
        })
    } catch (e) {
        console.log((e as Error).message);
    }
}

main()


//handle unHandleRejection errors
process.on('unhandledRejection', (err) => {
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
})

//handle unCaught exceptions
process.on('uncaughtException', (err) => {
    if (server)
        process.exit(1)
})

// sigterm errors
process.on('SIGTERM', (err) => {
    if (server)
        server.close()
})