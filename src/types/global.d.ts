interface PlacesResponse {
	fsq_id: string
	categories: [
		{
			id: number
			name: string
			short_name: string
			plural_name: string
			icon: {
				prefix: string
				suffix: string
			}
		},
	]
	closed_bucket: string
	distance: number
	features: {
		payment: {
			credit_cards: {
				accepts_credit_cards: boolean
				amex: boolean
				visa: boolean
				master_card: boolean
			}
		}
		food_and_drink: {
			alcohol: {
				cocktails: boolean
				full_bar: boolean
			}
			meals: {
				brunch: boolean
				lunch: boolean
				happy_hour: boolean
				dessert: boolean
			}
		}
		services: {
			delivery: boolean
			dine_in: {
				reservations: boolean
			}
		}
		amenities: {
			restroom: boolean
			live_music: boolean
			private_room: boolean
			outdoor_seating: boolean
			parking: {
				parking: boolean
				private_lot: boolean
			}
			wifi: string
		}
		attributes: {
			business_meeting: string
			clean: string
			crowded: string
			dates_popular: string
			dressy: string
			families_popular: string
			good_for_dogs: string
			groups_popular: string
			noisy: string
			quick_bite: string
			service_quality: string
			trendy: string
			value_for_money: string
		}
	}
	geocodes: {
		main: {
			latitude: number
			longitude: number
		}
	}
	hours: {
		is_local_holiday: boolean
		open_now: boolean
	}
	location: {
		address: string
		country: string
		formatted_address: string
		locality: string
		region: string
	}
	name: string
	photos: [
		{
			id: string
			created_at: string
			prefix: string
			suffix: string
			width: number
			height: number
		},
	]
	popularity: number
	price: number
	rating: number
	social_media: {
		twitter: string
	}
	tips: [
		{
			created_at: string
			text: string
		},
	]
	website: string
}

interface PhotosResponse {
	id: string
	created_at: string
	prefix: string
	suffix: string
	width: number
	height: number
	classifications: string[]
}

interface ReviewsResponse {
	id: string
	created_at: string
	text: string
	photo: {
		id: string
		created_at: string
		prefix: string
		suffix: string
		width: number
		height: number
	}
}

export { PlacesResponse, ReviewsResponse, PhotosResponse }
