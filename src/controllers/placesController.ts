import { Request, Response } from 'express'

import { placesService } from '../services'

export async function getPlacesTestData(req: Request, res: Response) {
	const places = placesService.getTestData()

	res.send({ places: places })
}

export async function getTestPhotos(req: Request, res: Response) {
	const photos = placesService.getTestPhotos()

	res.send({ photos: photos })
}

export async function getTestReviews(req: Request, res: Response) {
	const reviews = placesService.getTestReviews()

	res.send({ reviews: reviews })
}

export async function getPlaces(req: Request, res: Response) {
	const { query, lat, lon, next } = req.query

	if (!query || !lat || !lon) {
		return res.status(400).send({ error: 'Missing required parameters' })
	}

	let result

	try {
		result = await placesService.getPlacesByQueryAndLocation(
			query as string,
			lat as string,
			lon as string,
			next as string
		)

		const { places, hasNextPage } = result
		res.send({ places: places, hasNextPage })
	} catch (error: any) {
		res.status(500).send({ error: `Error fetching data: ${error.message}` })
	}
}

export async function getPhotos(req: Request, res: Response) {
	const { id } = req.query

	if (!id) {
		return res.status(400).send({ error: 'Missing required parameters' })
	}

	try {
		const { photos } = await placesService.getPlacePhotos(id as string)

		res.send({ photos: photos })
	} catch (error: any) {
		res.status(500).send({ error: `Error fetching photos: ${error.message}` })
	}
}

export async function getReviews(req: Request, res: Response) {
	const { id } = req.query

	if (!id) {
		return res.status(400).send({ error: 'Missing required parameters' })
	}

	try {
		const { reviews } = await placesService.getPlaceReviews(id as string)

		res.send({ reviews: reviews })
	} catch (error: any) {
		res.status(500).send({ error: `Error fetching reviews: ${error.message}` })
	}
}
