import { Alert, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { BookCard } from '../../components/BookCard';
import { useBookDatabase } from '../../database/useBookDatabase';
import { useEffect, useState } from 'react';
import { Book } from '../../models/Book';

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

export function HomeScreen({ route }) {
	const params = route.params;

	const [books, setBooks] = useState<Book[]>([]);
	const bookDatabase = useBookDatabase();

	useEffect(() => {
		if (params?.bookCreatedSuccessTitle) {
			Alert.alert(`Livro ${params?.bookCreatedSuccessTitle} cadastrado com sucesso.`);
		}

		bookDatabase
			.getAll()
			.then((books) => setBooks(books))
			.catch(() => Alert.alert('Error to load books'));
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Books</Text>

			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.booksContainer}>
					{books?.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</View>
			</ScrollView>
		</View>
	);
}

