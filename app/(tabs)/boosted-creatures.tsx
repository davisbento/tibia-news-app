import { StyleSheet } from 'react-native';

import { useCallback, useEffect, useState } from 'react';
import BoostedDisplay from '../../components/BoostedDisplay';
import { Text, View } from '../../components/Themed';
import { getMonsterAndBossBosted } from '../../services/boosted';
import { BoostedCreatureResponse } from '../../types/boosted-creatures';

export default function TabBoostedCreaturesScreen() {
	const [data, setData] = useState<BoostedCreatureResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleCallBoostedCreatures = useCallback(async () => {
		setIsLoading(true);
		const response = await getMonsterAndBossBosted();
		setData(response);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		handleCallBoostedCreatures();
	}, [handleCallBoostedCreatures]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Boosted Creatures of today</Text>

			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<View style={styles.monstersContainer}>
					<BoostedDisplay type='monster' name={data?.monster.name} imgUrl={data?.monster.image} />

					<BoostedDisplay type='boss' name={data?.boss.name} imgUrl={data?.boss.image} />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 16
	},
	monstersContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		marginTop: 32
	}
});
