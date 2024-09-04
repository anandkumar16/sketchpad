import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketchpad-server-jc6q.onrender.com' : 'http://localhost:5000'
export const socket = io(URL);