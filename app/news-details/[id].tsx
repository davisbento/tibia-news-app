import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function NewsDetaiils({}) {
	const local = useLocalSearchParams();
	console.log(local.id);

	return (
		<View style={styles.container}>
			<Text>Hello</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	}
});
