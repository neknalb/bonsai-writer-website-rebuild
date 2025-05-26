import { PUBLIC_NEWS_API_URL } from '$env/static/public'

export interface News {
	date: string
	title: string
	content: string
}

export interface GetNewsResponse {
	total: number
	result: Array<News>
}

const getNews = async () => {
	const response = await fetch(`${PUBLIC_NEWS_API_URL}`)
	const data = (await response.json()) as GetNewsResponse

	return data ?? null
}

export { getNews }
