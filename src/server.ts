import 'dotenv/config'

import { WebSocketServer } from 'ws'
import { configureWebSocket } from './utils'
import express from 'express'
import http from 'http'
import { placesRouter } from './routes'

const app = express()
const port: number = 3000

app.use(express.json())

app.use('/places/search', placesRouter)

const server = http.createServer(app)

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})

const wss = new WebSocketServer({ server })

configureWebSocket(wss)
