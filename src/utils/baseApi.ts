import axios, { type AxiosInstance } from 'axios'

const apiURL = process.env.API_URL as string

class BaseApi {
	private client: AxiosInstance

	constructor(baseURL: string) {
		this.client = axios.create({
			baseURL,
			headers: {
				Accept: 'application/json',
				Authorization: process.env.FSQ_API_TOKEN,
			},
		})
	}

	get instance() {
		return this.client
	}
}

export default new BaseApi(apiURL)
