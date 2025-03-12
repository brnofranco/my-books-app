import React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
import Book from '../../models/Book';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { pages } from '../../../App';

export function BookCard({ book }: { book: Partial<Book> }) {
	const navigation = useNavigation();

	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{ uri: book.image }} />

			<View style={styles.infoContainer}>
				<Text style={styles.title}>{book.title}</Text>
				<Text style={styles.author}>{book.author}</Text>

				<View style={{ flexDirection: 'row', gap: 12 }}>
					<AntDesign name={book.favorite ? 'star' : 'staro'} size={24} color="#ffe600" />
					<TouchableHighlight
						onPress={() => navigation.navigate(pages.edit.name, { book })}
						underlayColor="gray"
						style={{ borderRadius: 9999 }}
					>
						<AntDesign name="edit" size={24} color="#000" />
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}

