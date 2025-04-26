import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { WebSocket, WebSocketServer } from "ws";

dotenv.config();
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server })

app.use(cors());
app.use(express.json());

//Create a WebSocket Connection
wss.on("connection", (ws:WebSocket)=>{
    console.log("New Client Connected");

    ws.on("message", (data)=>{
        console.log("Received a Message from the Client: " + data);
        wss.clients.forEach((client)=>{
            if(client.readyState == WebSocket.OPEN){
                client.send(data);
            }
        });
    });

    ws.on("close", ()=>{
        console.log("Client Disconnected!");
    });
});

const PORT = process.env.PORT

server.listen(PORT, ()=>{
    console.log(`Server is Running On Port: ${PORT}`);
});