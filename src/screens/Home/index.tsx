import { Text, View } from 'react-native';
import { styles } from './styles';
import { BookCard } from '../../components/BookCard';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

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
	{
		title: 'Chronicles of the Unknown',
		author: 'James, Kekerson',
		description: 'A deep dive into the mysteries of the ancient world through the eyes of a time traveler.',
		image: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555340338/fera.jpg',
		favorite: false,
	},
	{
		title: "The Coder's Odyssey",
		author: 'James, Kekerson',
		description: 'An inspiring tale of a young programmer navigating the challenges of the tech industry.',
		image: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555340338/fera.jpg',
		favorite: true,
		comments: 'Absolutely motivational! A must-read for anyone in tech.',
		grade: 8.8,
	},
	{
		title: 'Echoes of Eternity',
		author: 'James, Kekerson',
		description: 'A poetic exploration of love, loss, and the passage of time.',
		image: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555340338/fera.jpg',
		favorite: false,
		comments: 'Beautifully written, but the pacing was a bit slow for my taste.',
	},
	{
		title: 'Quantum Horizons',
		author: 'James, Kekerson',
		description: 'An exhilarating journey through the multiverse, blending science and imagination.',
		image: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555340338/fera.jpg',
		favorite: true,
		grade: 9.5,
	},
];

export function HomeScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Button onPress={() => navigation.navigate('Register')}>Register Book</Button>

			<Text style={styles.title}>My Books</Text>

			<View style={styles.booksContainer}>
				{books.map((book) => (
					<BookCard
						key={book.title}
						title={book.title}
						favorite={book.favorite}
						image={book.image}
						author={book.author}
					/>
				))}
			</View>
		</View>
	);
}

