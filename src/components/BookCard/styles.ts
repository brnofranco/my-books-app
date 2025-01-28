import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	card: {
		flex: 1,
		minWidth: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'aliceblue',
		borderWidth: 2,
		padding: 12,
		elevation: 5,
	},
	image: {
		width: 48,
		height: 72,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	author: {
		fontSize: 12,
	},
});

