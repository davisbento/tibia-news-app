// import { load } from 'cheerio';
import { News } from '../types/news';
import { api } from './api';

export const getNews = async (): Promise<News[]> => {
	try {
		const { data } = await api.get('/v3/news/archive');

		const news = data?.news || [];

		if (!news?.length) {
			return [];
		}

		const mappedData = news.map((item: any) => {
			return {
				id: item.id,
				date: item.date,
				title: item.news,
				url: item.url
			};
		}) as News[];

		return mappedData.slice(0, 10);
	} catch (err) {
		throw new Error('error on getNews');
	}
};
