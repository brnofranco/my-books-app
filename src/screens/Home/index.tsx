import { Text, View } from 'react-native';
import { styles } from './styles';
import { BookCard } from '../../components/BookCard';
import { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { useBooksViewModel } from '../../hooks/useBooksViewModel';
import { Loading } from '../../components/Loading';

const books = [
	{
		title: 'The Wandering Path',
		author: 'James, Kekerson',
		description: 'A thrilling adventure of self-discovery as a young cartographer explores uncharted lands.',
		image: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555340338/fera.jpg',
		favorite: true,
		comments: 'A fantastic read! The world-building is immersive and the characters are relatable.',
		grade: 9.2,
	},
];

export function HomeScreen() {
	const { isLoading, getBooks, books } = useBooksViewModel();

	useEffect(() => {
		getBooks();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={styles.container}>
			<Header title="My Books" />

			<View style={styles.scrollViewContent}>
				{books.length ? (
					<FlatList
						data={books}
						renderItem={({ item: book }) => <BookCard key={book.id} book={book} />}
						keyExtractor={(book) => `${book.id}`}
						contentContainerStyle={styles.flatListContainer}
					/>
				) : (
					<View style={styles.emptyContainer}>
						<Text style={styles.emptyText}>No books registered!</Text>
					</View>
				)}
			</View>
		</View>
	);
}

