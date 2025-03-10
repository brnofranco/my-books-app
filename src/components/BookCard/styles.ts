import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		elevation: 2,
		borderRadius: 8,
		flexDirection: 'row',
		gap: 16,
		marginHorizontal: 20,
	},
	image: {
		aspectRatio: 0.67,
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	author: {
		fontSize: 12,
	},
	button: {
		height: 12,
	},
	infoContainer: {
		flex: 1,
		padding: 16,
	},
});

