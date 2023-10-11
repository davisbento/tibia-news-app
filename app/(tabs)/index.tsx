import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tibia News</Text>
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
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%'
	}
});
