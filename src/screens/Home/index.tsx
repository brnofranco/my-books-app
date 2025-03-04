import { Alert, Text, View } from 'react-native';
import { styles } from './styles';
import { BookCard } from '../../components/BookCard';
import { useBookDatabase } from '../../database/useBookDatabase';
import { useEffect, useState } from 'react';
import { Book } from '../../models/Book';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';

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
	const [books, setBooks] = useState<Book[]>([]);
	const bookDatabase = useBookDatabase();

	useEffect(() => {
		bookDatabase
			.getAll()
			.then((books) => setBooks(books))
			.catch(() => Alert.alert('Error to load books'));
	});

	return (
		<View style={styles.container}>
			<Header title="My Books" />

			<View style={styles.scrollViewContent}>
				<FlatList
					data={books}
					renderItem={({ item: book }) => <BookCard key={book.id} book={book} />}
					keyExtractor={(book) => `${book.id}`}
					numColumns={2}
					style={{ gap: 12 }}
					contentContainerStyle={{ gap: 20 }}
					columnWrapperStyle={{ gap: 20 }}
				/>
			</View>
		</View>
	);
}

