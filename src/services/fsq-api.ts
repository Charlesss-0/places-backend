import axios, { AxiosRequestConfig } from 'axios'

interface Result {
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
	chains: []
	closed_bucket: string
	distance: number
	geocodes: {
		main: {
			latitude: number
			longitude: number
		}
	}
	link: string
	location: {
		address?: string
		country?: string
		cross_street?: string
		formatted_address?: string
		locality?: string
		region?: string
		postcode?: string
	}
	name: string
	related_places: object
	timezone: string
}

interface Context {
	geo_bounds: {
		circle: {
			center: {
				latitude: number
				longitude: number
			}
			radius: number
		}
	}
}

interface Places {
	results: Result[]
	context: Context
}

const data: Places = {
	results: [
		{
			fsq_id: '4fb6a45be4b00ae052bd8824',
			categories: [
				{
					id: 13383,
					name: 'Steakhouse',
					short_name: 'Steakhouse',
					plural_name: 'Steakhouses',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 526,
			geocodes: {
				main: {
					latitude: 12.125874,
					longitude: -86.2631,
				},
			},
			link: '/v3/places/4fb6a45be4b00ae052bd8824',
			location: {
				address: 'Entrada Sur Metrocentro100 Mts Sur',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Entrada Sur Metrocentro100 Mts Sur, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Don Cándido',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '536bd0f7498eb423d91b9823',
			categories: [
				{
					id: 13028,
					name: 'Breakfast Spot',
					short_name: 'Breakfast',
					plural_name: 'Breakfast Spots',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/breakfast_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 147,
			geocodes: {
				main: {
					latitude: 12.128116,
					longitude: -86.267658,
				},
			},
			link: '/v3/places/536bd0f7498eb423d91b9823',
			location: {
				address: 'Rotonda Rubén Darío 1 cuadra al Oeste 1 cuadra al Sur.',
				country: 'NI',
				cross_street: '',
				formatted_address:
					'Rotonda Rubén Darío 1 cuadra al Oeste 1 cuadra al Sur., Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'El Molino Coffee Shop',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4e457fc8b0fb93df26fc9cd7',
			categories: [
				{
					id: 13383,
					name: 'Steakhouse',
					short_name: 'Steakhouse',
					plural_name: 'Steakhouses',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 984,
			geocodes: {
				main: {
					latitude: 12.13644,
					longitude: -86.271697,
				},
			},
			link: '/v3/places/4e457fc8b0fb93df26fc9cd7',
			location: {
				address: 'Frente a Hospital Militar',
				country: 'NI',
				cross_street: 'Avenida Tiscapa',
				formatted_address: 'Frente a Hospital Militar (Avenida Tiscapa), Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Los Ranchos Tiscapa',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4bf431c298ac0f4733b563a8',
			categories: [
				{
					id: 13345,
					name: 'Spanish Restaurant',
					short_name: 'Spanish',
					plural_name: 'Spanish Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/spanish_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 852,
			geocodes: {
				main: {
					latitude: 12.124107,
					longitude: -86.2607,
				},
			},
			link: '/v3/places/4bf431c298ac0f4733b563a8',
			location: {
				address: 'de Monte de los Olivos, 1c al este',
				country: 'NI',
				formatted_address: 'de Monte de los Olivos, 1c al este, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'La Taska De Kiko',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4c538db44623be9a577847f1',
			categories: [
				{
					id: 13343,
					name: 'South American Restaurant',
					short_name: 'South American',
					plural_name: 'South American Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/argentinian_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'LikelyOpen',
			distance: 1105,
			geocodes: {
				main: {
					latitude: 12.119696,
					longitude: -86.26323,
				},
			},
			link: '/v3/places/4c538db44623be9a577847f1',
			location: {
				address: 'Pasteleria Sampson 100vrs al Norte 14, Ave. SO, Managua',
				country: 'NI',
				cross_street: '',
				formatted_address:
					'Pasteleria Sampson 100vrs al Norte 14, Ave. SO, Managua, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'La Terraza Peruana',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4e4e887e52b1e893ad4d8a31',
			categories: [
				{
					id: 13039,
					name: 'Deli',
					short_name: 'Deli',
					plural_name: 'Delis',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/deli_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 1354,
			geocodes: {
				main: {
					latitude: 12.117556,
					longitude: -86.262567,
				},
			},
			link: '/v3/places/4e4e887e52b1e893ad4d8a31',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: '',
			},
			name: 'Chocolate Momotombo',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '50e9ba23e4b062020228558b',
			categories: [
				{
					id: 13236,
					name: 'Italian Restaurant',
					short_name: 'Italian',
					plural_name: 'Italian Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/italian_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'LikelyOpen',
			distance: 1664,
			geocodes: {
				main: {
					latitude: 12.114384,
					longitude: -86.263624,
				},
			},
			link: '/v3/places/50e9ba23e4b062020228558b',
			location: {
				address: 'Enitel Villa Fontana, 1c arriba, 2c al lago',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Enitel Villa Fontana, 1c arriba, 2c al lago',
			},
			name: 'Ristorante La Piazzeta',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '5715758f498efd392831d280',
			categories: [
				{
					id: 13028,
					name: 'Breakfast Spot',
					short_name: 'Breakfast',
					plural_name: 'Breakfast Spots',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/breakfast_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 2236,
			geocodes: {
				main: {
					latitude: 12.133886,
					longitude: -86.24671,
				},
			},
			link: '/v3/places/5715758f498efd392831d280',
			location: {
				address: 'Residencial El Dorado',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Residencial El Dorado, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Coffee And Honey Shop De La Finca',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4c202cc563750f47ab52bc67',
			categories: [
				{
					id: 13297,
					name: 'Latin American Restaurant',
					short_name: 'Latin American',
					plural_name: 'Latin American Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/latinamerican_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 1273,
			geocodes: {
				main: {
					latitude: 12.118732,
					longitude: -86.261594,
				},
			},
			link: '/v3/places/4c202cc563750f47ab52bc67',
			location: {
				address: 'www.lacocina.com.ni',
				country: 'NI',
				cross_street: '',
				formatted_address: 'www.lacocina.com.ni',
			},
			name: 'Cocina de Doña Haydée',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4c57a28730d82d7f3c69da62',
			categories: [
				{
					id: 13383,
					name: 'Steakhouse',
					short_name: 'Steakhouse',
					plural_name: 'Steakhouses',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 3097,
			geocodes: {
				main: {
					latitude: 12.144593,
					longitude: -86.290367,
				},
			},
			link: '/v3/places/4c57a28730d82d7f3c69da62',
			location: {
				address: 'Km 3 1/2 Carretera Sur',
				country: 'NI',
				cross_street: 'Marginal Sur',
				formatted_address: 'Km 3 1/2 Carretera Sur (Marginal Sur), Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Los Ranchos',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '5053db23e4b07ba3e600f720',
			categories: [
				{
					id: 13034,
					name: 'Café',
					short_name: 'Café',
					plural_name: 'Cafés',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 2803,
			geocodes: {
				main: {
					latitude: 12.108659,
					longitude: -86.25151,
				},
			},
			link: '/v3/places/5053db23e4b07ba3e600f720',
			location: {
				address: 'Carretera a Masaya Km 6.5 - Plaza Santo Domingo Modulo B',
				country: 'NI',
				formatted_address:
					'Carretera a Masaya Km 6.5 - Plaza Santo Domingo Modulo B, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Café Las Flores',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4df511aa14954f21cf33c6ef',
			categories: [
				{
					id: 13314,
					name: 'New American Restaurant',
					short_name: 'New American',
					plural_name: 'New American Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/newamerican_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 2478,
			geocodes: {
				main: {
					latitude: 12.110009,
					longitude: -86.254815,
				},
			},
			link: '/v3/places/4df511aa14954f21cf33c6ef',
			location: {
				address: 'Camino de Oriente',
				country: 'NI',
				cross_street: 'Principal Camino de Oriente',
				formatted_address: 'Camino de Oriente (Principal Camino de Oriente), Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'La Crema Batida',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '53ff9259498e56e70f4c5c2e',
			categories: [
				{
					id: 13000,
					name: 'Dining and Drinking',
					short_name: 'Dining and Drinking',
					plural_name: 'Dining and Drinking',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/default_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'LikelyOpen',
			distance: 3492,
			geocodes: {
				main: {
					latitude: 12.103072,
					longitude: -86.248603,
				},
			},
			link: '/v3/places/53ff9259498e56e70f4c5c2e',
			location: {
				address: 'Galerías Santo Domingo',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Galerías Santo Domingo',
			},
			name: 'pane e vino',
			related_places: {
				parent: {
					fsq_id: '4c014e024f1ea593d6426b7d',
					categories: [
						{
							id: 17114,
							name: 'Shopping Mall',
							short_name: 'Mall',
							plural_name: 'Shopping Malls',
							icon: {
								prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/mall_',
								suffix: '.png',
							},
						},
					],
					name: 'Galerías Santo Domingo',
				},
			},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '59b1d6370d8a0f0528908bd4',
			categories: [
				{
					id: 13031,
					name: 'Burger Joint',
					short_name: 'Burgers',
					plural_name: 'Burger Joints',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/burger_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 3314,
			geocodes: {
				main: {
					latitude: 12.10494,
					longitude: -86.248747,
				},
			},
			link: '/v3/places/59b1d6370d8a0f0528908bd4',
			location: {
				address: 'Rotonda Jean Paul Genie',
				country: 'NI',
				cross_street: 'Camino Viejo Santo Domingo',
				formatted_address:
					'Rotonda Jean Paul Genie (Camino Viejo Santo Domingo), 11001, Managua, Managua',
				locality: 'Managua',
				postcode: '11001',
				region: 'Managua',
			},
			name: "Carl's Jr., Galerías Santo Domingo",
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '53f6c229498ecb81e3fc241c',
			categories: [
				{
					id: 13236,
					name: 'Italian Restaurant',
					short_name: 'Italian',
					plural_name: 'Italian Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/italian_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'LikelyOpen',
			distance: 3486,
			geocodes: {
				main: {
					latitude: 12.103138,
					longitude: -86.248612,
				},
			},
			link: '/v3/places/53f6c229498ecb81e3fc241c',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: '',
			},
			name: 'Pane e Vino',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4b8894f2f964a5204f0232e3',
			categories: [
				{
					id: 13276,
					name: 'Sushi Restaurant',
					short_name: 'Sushi',
					plural_name: 'Sushi Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/sushi_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 3482,
			geocodes: {
				main: {
					latitude: 12.102856,
					longitude: -86.249107,
				},
			},
			link: '/v3/places/4b8894f2f964a5204f0232e3',
			location: {
				address: 'Galerias Santo Domingo, Km 6.5 Carretera a Masaya',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Galerias Santo Domingo, Km 6.5 Carretera a Masaya, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Sushi Itto',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '5738d647498ec301c92cceb5',
			categories: [
				{
					id: 13072,
					name: 'Asian Restaurant',
					short_name: 'Asian',
					plural_name: 'Asian Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/asian_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'Unsure',
			distance: 4107,
			geocodes: {
				main: {
					latitude: 12.09685,
					longitude: -86.248143,
				},
			},
			link: '/v3/places/5738d647498ec301c92cceb5',
			location: {
				address: 'Plaza Viejo Santo Domingo',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Plaza Viejo Santo Domingo',
			},
			name: 'Zhù Asian Kitchen',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4b75fe7af964a52012352ee3',
			categories: [
				{
					id: 13383,
					name: 'Steakhouse',
					short_name: 'Steakhouse',
					plural_name: 'Steakhouses',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 4246,
			geocodes: {
				main: {
					latitude: 12.099353,
					longitude: -86.242098,
				},
			},
			link: '/v3/places/4b75fe7af964a52012352ee3',
			location: {
				address: 'Km 8 c. A Masaya',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Km 8 c. A Masaya, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Porter House',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4ddd57f8c65bb2aa7377a1f9',
			categories: [
				{
					id: 13302,
					name: 'Mediterranean Restaurant',
					short_name: 'Mediterranean',
					plural_name: 'Mediterranean Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/mediterranean_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 4273,
			geocodes: {
				main: {
					latitude: 12.139058,
					longitude: -86.228715,
				},
			},
			link: '/v3/places/4ddd57f8c65bb2aa7377a1f9',
			location: {
				address: 'Multicentro Las Américas',
				country: 'NI',
				cross_street: 'Food Court',
				formatted_address: 'Multicentro Las Américas (Food Court), Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Sabor Persa',
			related_places: {
				parent: {
					fsq_id: '4bf590b35e800f470dbae5d4',
					categories: [
						{
							id: 17114,
							name: 'Shopping Mall',
							short_name: 'Mall',
							plural_name: 'Shopping Malls',
							icon: {
								prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/mall_',
								suffix: '.png',
							},
						},
					],
					name: 'Multicentro Las Américas',
				},
			},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '53740227498ecb6ef7593785',
			categories: [
				{
					id: 13064,
					name: 'Pizzeria',
					short_name: 'Pizza',
					plural_name: 'Pizzerias',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 5180,
			geocodes: {
				main: {
					latitude: 12.151951,
					longitude: -86.308227,
				},
			},
			link: '/v3/places/53740227498ecb6ef7593785',
			location: {
				address: 'Pista Las Brisas, frente a sucursal BAC Nicaragua',
				country: 'NI',
				cross_street: 'Pista Las Brisas',
				formatted_address:
					'Pista Las Brisas, frente a sucursal BAC Nicaragua (Pista Las Brisas), 12019, Managua, Managua',
				locality: 'Managua',
				postcode: '12019',
				region: 'Managua',
			},
			name: 'Oasis del Sabor',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '53054a7d498eb6b72dab3336',
			categories: [
				{
					id: 13002,
					name: 'Bakery',
					short_name: 'Bakery',
					plural_name: 'Bakeries',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/bakery_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 5255,
			geocodes: {
				main: {
					latitude: 12.088019,
					longitude: -86.242639,
				},
			},
			link: '/v3/places/53054a7d498eb6b72dab3336',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: '',
			},
			name: 'Pan de Vida',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '533481cb498ef61a167027bf',
			categories: [
				{
					id: 13034,
					name: 'Café',
					short_name: 'Café',
					plural_name: 'Cafés',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 5379,
			geocodes: {
				main: {
					latitude: 12.149817,
					longitude: -86.221962,
				},
			},
			link: '/v3/places/533481cb498ef61a167027bf',
			location: {
				address: 'Km 5.5',
				country: 'NI',
				cross_street: 'Carretera Norte',
				formatted_address: 'Km 5.5 (Carretera Norte), Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Café Las Flores Carretera Norte',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '566b79e7498ef1f994fba88f',
			categories: [
				{
					id: 13099,
					name: 'Chinese Restaurant',
					short_name: 'Chinese',
					plural_name: 'Chinese Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/asian_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 6892,
			geocodes: {
				main: {
					latitude: 12.080551,
					longitude: -86.227158,
				},
			},
			link: '/v3/places/566b79e7498ef1f994fba88f',
			location: {
				address: 'Km. 10 1/2 Cta. Masaya',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Km. 10 1/2 Cta. Masaya',
			},
			name: 'Xin Tian Di - Cta. Masaya',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4f3b1504e4b0ce0258c2c7fc',
			categories: [
				{
					id: 13236,
					name: 'Italian Restaurant',
					short_name: 'Italian',
					plural_name: 'Italian Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/italian_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 8905,
			geocodes: {
				main: {
					latitude: 12.070614,
					longitude: -86.322784,
				},
			},
			link: '/v3/places/4f3b1504e4b0ce0258c2c7fc',
			location: {
				address: 'Carretera Sur',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Carretera Sur, Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Gastronomia El Buzo',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4cb6560c9c7ba35d2a449106',
			categories: [
				{
					id: 13297,
					name: 'Latin American Restaurant',
					short_name: 'Latin American',
					plural_name: 'Latin American Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/latinamerican_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 9242,
			geocodes: {
				main: {
					latitude: 12.045906,
					longitude: -86.264759,
				},
			},
			link: '/v3/places/4cb6560c9c7ba35d2a449106',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: 'Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Restaurante Intermezzo del Bosque',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '59e152f3121384138285d4ca',
			categories: [
				{
					id: 13027,
					name: 'Bistro',
					short_name: 'Bistro',
					plural_name: 'Bistros',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/default_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'LikelyOpen',
			distance: 10418,
			geocodes: {
				main: {
					latitude: 12.144714,
					longitude: -86.172146,
				},
			},
			link: '/v3/places/59e152f3121384138285d4ca',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: 'Managua, Managua',
				locality: 'Managua',
				region: 'Managua',
			},
			name: 'Oxeanico',
			related_places: {
				parent: {
					fsq_id: '4b616fe6f964a5207f132ae3',
					categories: [
						{
							id: 19040,
							name: 'International Airport',
							short_name: 'International Airport',
							plural_name: 'International Airports',
							icon: {
								prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/airport_',
								suffix: '.png',
							},
						},
					],
					name: 'Aeropuerto Internacional Augusto C. Sandino',
				},
			},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '55da25f2498e500ebe22fc64',
			categories: [
				{
					id: 13383,
					name: 'Steakhouse',
					short_name: 'Steakhouse',
					plural_name: 'Steakhouses',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 12001,
			geocodes: {
				main: {
					latitude: 12.046772,
					longitude: -86.19515,
				},
			},
			link: '/v3/places/55da25f2498e500ebe22fc64',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: '',
			},
			name: 'Don Parrillon Campestre',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4b65aae8f964a520b1f82ae3',
			categories: [
				{
					id: 13028,
					name: 'Breakfast Spot',
					short_name: 'Breakfast',
					plural_name: 'Breakfast Spots',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/breakfast_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 13855,
			geocodes: {
				main: {
					latitude: 12.034287,
					longitude: -86.183834,
				},
			},
			link: '/v3/places/4b65aae8f964a520b1f82ae3',
			location: {
				address: 'Km 18 carretera a masaya',
				country: 'NI',
				cross_street: '',
				formatted_address: 'Km 18 carretera a masaya, Masaya, Masaya',
				locality: 'Masaya',
				region: 'Masaya',
			},
			name: 'Mi Viejo Ranchito',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '4ca7a4eaf47ea1437bfc6c21',
			categories: [
				{
					id: 13000,
					name: 'Dining and Drinking',
					short_name: 'Dining and Drinking',
					plural_name: 'Dining and Drinking',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/default_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'VeryLikelyOpen',
			distance: 15530,
			geocodes: {
				main: {
					latitude: 12.025064,
					longitude: -86.171217,
				},
			},
			link: '/v3/places/4ca7a4eaf47ea1437bfc6c21',
			location: {
				address: 'Km 17 Carretera Masaya',
				country: 'NI',
				cross_street: 'Carretera a Masaya',
				formatted_address: 'Km 17 Carretera Masaya (Carretera a Masaya)',
			},
			name: 'Las Jicaritas',
			related_places: {},
			timezone: 'America/Managua',
		},
		{
			fsq_id: '505f5e3de4b0be434f7ecea8',
			categories: [
				{
					id: 13338,
					name: 'Seafood Restaurant',
					short_name: 'Seafood',
					plural_name: 'Seafood Restaurants',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/food/seafood_',
						suffix: '.png',
					},
				},
			],
			chains: [],
			closed_bucket: 'LikelyOpen',
			distance: 21846,
			geocodes: {
				main: {
					latitude: 12.000103,
					longitude: -86.11495,
				},
			},
			link: '/v3/places/505f5e3de4b0be434f7ecea8',
			location: {
				country: 'NI',
				cross_street: '',
				formatted_address: 'Nindiri, Masaya',
				locality: 'Nindirí',
				region: 'Masaya',
			},
			name: 'Restaurante La Sazon de las Lugo',
			related_places: {},
			timezone: 'America/Managua',
		},
	],
	context: {
		geo_bounds: {
			circle: {
				center: {
					latitude: 12.1290541,
					longitude: -86.2666949,
				},
				radius: 22000,
			},
		},
	},
}

;(function (data: Places) {
	return data.results.sort((a, b) => a.distance - b.distance)
})(data)

export const getQueryData = () => {
	return data
}

const options: AxiosRequestConfig = {
	method: 'GET',
	url: 'https://api.foursquare.com/v3/places/search?query=food&ll=12.1113977,-85.3671936',
	headers: {
		Accept: 'application/json',
		Authorization: process.env.FSQ_API_TOKEN,
	},
}

export async function getPlacesData() {
	const response = await axios.request(options)
	const data = response.data
	return data
}
