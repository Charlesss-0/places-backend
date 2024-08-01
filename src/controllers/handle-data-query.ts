import { Request, Response } from 'express'

import { getQueryData } from '../services'

export default function handleDataQuery(req: Request, res: Response) {
	const data = getQueryData()
	res.send(data)
}
