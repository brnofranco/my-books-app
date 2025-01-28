import { Text, View } from 'react-native';
import { styles } from './styles';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = { EditBook: { title: string } };

type EditBookScreenRouteProp = RouteProp<RootStackParamList, 'EditBook'>;

export function EditBookScreen({ route }: { route: EditBookScreenRouteProp }) {
	const { title } = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Book {title}</Text>
		</View>
	);
}

