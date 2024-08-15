import 'dotenv/config'
import 'module-alias/register'

import express, { Request, Response } from 'express'

import { checkApiKey } from './middlewares/api-key-middleware'
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

export default app
