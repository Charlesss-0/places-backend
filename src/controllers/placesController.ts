import { Request, Response } from 'express'
import { getPlacesByQueryAndLocation, getPlacesPhotos, getQueryData } from '@/services'

export async function getTestData(req: Request, res: Response) {
	const data = getQueryData()
	res.send(data)
}

export async function getPlaces(req: Request, res: Response) {
	const { query, lat, lon, next } = req.query

	if (!query || !lat || !lon) {
		return res.status(400).send({ error: 'Missing required parameters: query, lat, and lon' })
	}

	try {
		let result

		if (next && next === 'true') {
			result = await getPlacesByQueryAndLocation(
				query as string,
				lat as string,
				lon as string,
				'true'
			)
		} else {
			result = await getPlacesByQueryAndLocation(query as string, lat as string, lon as string)
		}

		const { places, hasNextPage } = result
		const placesWithPhotos = await getPlacesPhotos(places)
		res.send({ places: placesWithPhotos, hasNextPage })
	} catch (error) {
		res.status(500).send({ error: 'Error fetching data from FSQ' })
	}
}
