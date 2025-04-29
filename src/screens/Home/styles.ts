import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	booksContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 12,
		padding: 12,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 36,
		marginBottom: 24,
	},
	book: {
		fontSize: 24,
	},
	scrollViewContent: {
		flex: 1,
	},
	flatListContainer: {
		gap: 20,
		marginVertical: 20,
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		fontSize: 18,
		color: '#999',
	},
});

