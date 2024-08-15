import 'dotenv/config'

import express, { Request, Response } from 'express'

import { WebSocketServer } from 'ws'
import { checkApiKey } from './middlewares/api-key-middleware'
import { configureWebSocket } from './utils'
import http from 'http'
import { placesRouter } from './routes'

const app = express()
const port: number = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to the places API')
})

app.use('/places', checkApiKey, placesRouter)

const server = http.createServer(app)

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})

const wss = new WebSocketServer({ server })

configureWebSocket(wss)

export default app
