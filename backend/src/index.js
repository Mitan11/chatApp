import express from 'express'
import authRoutes from './routes/authRoute.js'
import messageRoutes from './routes/messageRoute.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { app, server } from './lib/socket.js'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

// port
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middleware
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
// 
app.get("/", (req, res) => {
    res.send("Hello World , Server is working")
})

// 
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.MODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"))
    })
}

server.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port http://localhost:${PORT}`)
        connectDB();
        return
    }
    console.log(error)
})