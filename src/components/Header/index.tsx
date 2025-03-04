import { styles } from './styles';
import { StatusBar, Text, View } from 'react-native';

interface HeaderProps {
	title: string;
}

export function Header({ title }: HeaderProps) {
	return (
		<>
			<StatusBar backgroundColor="#03530d" />
			<View style={styles.container}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</>
	);
}

