import { Text, View } from 'react-native';
import { styles } from './styles';

export function EditBookScreen({ route }) {
	const { book } = route.params;

	// TODO: https://www.youtube.com/watch?v=BJEACwKXWf8 - 32min

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Book {book.title}</Text>
		</View>
	);
}

