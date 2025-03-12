import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="#03530d" />
			<Text style={styles.text}>Loading...</Text>
		</View>
	);
};

