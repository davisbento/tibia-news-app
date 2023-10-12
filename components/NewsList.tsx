import { Link } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getNews } from '../services/news';
import { News } from '../types/news';
import { Text, View } from './Themed';

export default function NewsList() {
	const [data, setData] = useState<News[] | null>(null);

	const handleFetch = useCallback(async () => {
		const response = await getNews();
		setData(response);
	}, []);

	useEffect(() => {
		handleFetch();
	}, [handleFetch]);

	if (!data) return null;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				renderItem={({ item }) => (
					<Link href={`/news-details/${item.id}`} asChild>
						<Pressable>
							<Text style={styles.title}>{item.title}</Text>
							<Text>{item.date}</Text>
							<Text>{item.url}</Text>
						</Pressable>
					</Link>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	separator: {
		marginVertical: 20,
		height: 1,
		width: '1000%',
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		textTransform: 'capitalize'
	}
});
