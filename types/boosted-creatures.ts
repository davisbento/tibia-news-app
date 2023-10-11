export type BoostedCreature = {
	name: string;
	image: string;
};

export type BoostedCreatureResponse = {
	monster: BoostedCreature;
	boss: BoostedCreature;
};
