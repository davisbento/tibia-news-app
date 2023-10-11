import { Image, StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type Props = {
	type?: 'monster' | 'boss';
	name?: string;
	imgUrl?: string;
};

export default function BoostedDisplay({ type, name, imgUrl }: Props) {
	if (!type || !name || !imgUrl) return null;

	return (
		<View>
			<Text style={styles.title}>{type}</Text>
			<Text style={styles.name}>{name}</Text>
			<Image source={{ uri: imgUrl }} style={{ width: 50, height: 50 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'capitalize'
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});
