import axios from 'axios'
import { data } from '../data'
import { logger } from '../utils'

interface PlaceData {
	fsq_id: string
	categories: {
		name: string
		icon: {
			prefix: string
			suffix: string
		}
	}
	closed_bucket: string
	distance: number
	location: {
		address: string | null
		country: string
		locality: string
		region: string
	}
	name: string
	photos: string[]
}

export const getQueryData = () => {
	return data
}

// global variable to store the next link request
let nextLink: string | null = null

// request the list of places based on the query and user's location
export async function getPlacesByQueryAndLocation(
	query: string,
	lat: string,
	lon: string,
	next = 'false'
) {
	try {
		let response

		if (next === 'true') {
			if (!nextLink) {
				return { places: [], hasNextPage: null }
			}

			response = await axios.get(nextLink, {
				headers: {
					Accept: 'application/json',
					Authorization: process.env.FSQ_API_TOKEN,
				},
			})
		} else {
			response = await axios.get('https://api.foursquare.com/v3/places/search', {
				params: {
					query: query,
					ll: `${lat},${lon}`,
					limit: 5,
					sort: 'DISTANCE',
				},
				headers: {
					Accept: 'application/json',
					Authorization: process.env.FSQ_API_TOKEN,
				},
			})
		}

		const linkHeader = response.headers.link
		if (linkHeader) {
			const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/)
			nextLink = match ? match[1] : null
		} else {
			nextLink = null
		}

		const formattedPlaces: PlaceData = response.data.results.map((result: any) => ({
			fsq_id: result.fsq_id,
			categories: {
				name: result.categories[0]?.name,
				icon: {
					prefix: result.categories[0]?.icon.prefix,
					suffix: result.categories[0]?.icon.suffix,
				},
			},
			closed_bucket: result.closed_bucket,
			distance: result.distance,
			location: {
				address: result.location.address,
				country: result.location.locality,
				locality: result.location.locality,
				region: result.location.region,
			},
			name: result.name,
		}))

		return { places: formattedPlaces, hasNextPage: nextLink !== null }
	} catch (error: any) {
		logger.error(`Error fetching places: ${error.message}`)
		throw new Error('Failed to fetch places data')
	}
}

// use fsq_id to get photos of each place
export async function getPlacesPhotos(places: any) {
	try {
		const placesWithPhotos = await Promise.all(
			places.map(async (place: any) => {
				try {
					const response = await axios.get(
						`https://api.foursquare.com/v3/places/${place.fsq_id}/photos`,
						{
							params: {
								limit: 50,
								sort: 'NEWEST',
							},
							headers: {
								Accept: 'application/json',
								Authorization: process.env.FSQ_API_TOKEN,
							},
						}
					)
					const photosData = response.data

					if (!photosData.length) {
						logger.warn(`No photos found for place ${place.fsq_id}`)
						return { ...place, photos: null }
					}

					const formattedPhotos = photosData.map((photo: any) => {
						return `${photo.prefix}original${photo.suffix}`
					})

					return { ...place, photos: formattedPhotos }
				} catch (error: any) {
					logger.error(`Error fetching photos: ${error.message}`)
					return { ...place, photos: null }
				}
			})
		)

		return placesWithPhotos
	} catch (error: any) {
		logger.error(`Error processing places: ${error.message}`)
		throw new Error('Failed to process places photos')
	}
}

export async function getPlacesReviews(fsq_id: string) {
	try {
		const response = await axios.get(`https://api.foursquare.com/v3/places/${fsq_id}/tips`, {
			params: {
				limit: 50,
				sort: 'NEWEST',
				fields: 'id,text,created_at,photo',
			},
			headers: {
				Accept: 'application/json',
				Authorization: process.env.FSQ_API_TOKEN,
			},
		})

		return { reviews: response.data }
	} catch (error: any) {
		logger.error(`Error getting reviews: ${error.message}`)
		throw new Error('Failed to process reviews')
	}
}
