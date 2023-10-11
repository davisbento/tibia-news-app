// import { load } from 'cheerio';
import { BoostedCreatureResponse } from '../types/boosted-creatures';
import { api } from './api';

export const getMonsterAndBossBosted = async (): Promise<BoostedCreatureResponse> => {
	try {
		const bossRequest = api.get('/v3/boostablebosses');
		const creatureRequest = api.get('/v3/creatures');

		const [bossResponse, monsterResponse] = await Promise.all([bossRequest, creatureRequest]);

		const monster = monsterResponse.data.creatures.boosted;
		const boss = bossResponse.data.boostable_bosses.boosted;

		const response = {
			boss: {
				name: boss.name,
				image: boss.image_url
			},
			monster: {
				name: monster.name,
				image: monster.image_url
			}
		};

		return response;
	} catch (err) {
		throw new Error('error on getMonsterAndBossBosted');
	}
};
