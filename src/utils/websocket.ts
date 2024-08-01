import { type RawData, WebSocketServer } from 'ws'
import { getQueryData } from '../services'

export default function configureWebSocket(wss: WebSocketServer) {
	const placesData = getQueryData()

	const broadcast = (data: RawData) => {
		wss.clients.forEach(client => {
			if (client.readyState === 1) {
				client.send(JSON.stringify(data))
			}
		})
	}

	wss.on('connection', ws => {
		ws.send(JSON.stringify(placesData))

		ws.on('message', msg => {
			broadcast(msg)
		})

		ws.on('close', () => {
			console.log('Client disconnected')
		})
	})
}
