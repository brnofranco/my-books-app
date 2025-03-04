import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Book } from '../../models/Book';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { pages } from '../../../App';

export function BookCard({ book }: { book: Partial<Book> }) {
	const navigation = useNavigation();

	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{ uri: book.image }} />
			<AntDesign name={book.favorite ? 'star' : 'staro'} size={12} color="#ffe600" />

			<Text style={styles.title}>{book.title}</Text>
			<Text style={styles.author}>{book.author}</Text>

			<Button title="Edit" onPress={() => navigation.navigate(pages.edit.name, { book })} />
		</View>
	);
}

