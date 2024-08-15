import { PhotosResponse, PlacesResponse, ReviewsResponse } from '../types/global'
import { baseApi, logger } from '../utils'

import { data } from '../data'

class PlacesService {
	private nextPlacesLink: string | null = null

	constructor() {
		this.getTestData = this.getTestData.bind(this)
		this.getPlacesByQueryAndLocation = this.getPlacesByQueryAndLocation.bind(this)
		this.getPlacePhotos = this.getPlacePhotos.bind(this)
		this.getPlaceReviews = this.getPlaceReviews.bind(this)
	}

	public getTestData() {
		return data
	}

	public async getPlacesByQueryAndLocation(
		query: string,
		lat: string,
		lon: string,
		next = 'false'
	) {
		let response

		try {
			if (next === 'true') {
				if (!this.nextPlacesLink) {
					return { places: [], hasNextPage: null }
				}

				response = await baseApi.instance.get(this.nextPlacesLink)
			} else {
				response = await baseApi.instance.get('/search', {
					params: {
						query: query,
						ll: `${lat},${lon}`,
						limit: 5,
						sort: 'DISTANCE',
						fields:
							'fsq_id,name,location,categories,closed_bucket,distance,photos,rating,tips,features,geocodes,hours,price,social_media,popularity,website',
					},
				})
			}

			const headerLink = response.headers.link

			if (headerLink) {
				const match = headerLink.match(/<([^>]+)>;\s*rel="next"/)
				this.nextPlacesLink = match ? match[1] : null
			} else {
				this.nextPlacesLink = null
			}

			const results: PlacesResponse = response.data.results

			return { places: results, hasNextPage: this.nextPlacesLink !== null }
		} catch (error: any) {
			logger.error(`Error fetching places: ${error.message}`)
			throw new Error('Failed to fetch places')
		}
	}

	public async getPlacePhotos(fsq_id: string) {
		try {
			const response = await baseApi.instance.get(`/${fsq_id}/photos`, {
				params: {
					limit: 50,
					sort: 'NEWEST',
				},
			})

			const data: PhotosResponse = response.data

			return { photos: data }
		} catch (error: any) {
			logger.error(`Error getting place photos: ${error.message}`)
			throw new Error('Failed to fetch photos')
		}
	}

	public async getPlaceReviews(fsq_id: string) {
		try {
			const response = await baseApi.instance.get(`/${fsq_id}/tips`, {
				params: {
					limit: 50,
					sort: 'NEWEST',
					fields: 'id,text,created_at,photo',
				},
			})

			const data: ReviewsResponse = response.data

			return { reviews: data }
		} catch (error: any) {
			logger.error(`Error getting place reviews: ${error.message}`)
			throw new Error('Failed to fetch reviews')
		}
	}
}

export default new PlacesService()
