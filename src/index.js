import { app } from "./app";
import {Server as WebSocketServer} from "socket.io"
import http from "http"
import { connectDb } from "./db";
import sockets from "./sockets"

connectDb()

const server = http.createServer(app)

const httpServer = server.listen(3000)
console.log("Server is running on port 3000")

const io = new WebSocketServer(httpServer)
sockets(io)

