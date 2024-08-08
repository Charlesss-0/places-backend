interface Place {
	fsq_id: string
	name: string
	distance: number
	categories: [
		{
			name: string
		},
	]
	closed_bucket: string
	location: {
		address: string
	}
	photoUrl: string
}
