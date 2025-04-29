import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Book from '../../models/Book';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BookCardProps {
	book: Partial<Book>;
}

interface NavigationProps {
	navigate: (screen: string, params?: { book: Partial<Book> }) => void;
}

export function BookCard({ book }: BookCardProps) {
	const navigation = useNavigation<NavigationProps>();

	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{ uri: book.image }} />

			<View style={styles.infoContainer}>
				<Text style={styles.title}>{book.title}</Text>
				<Text style={styles.author}>{book.author}</Text>

				<View style={{ flexDirection: 'row', gap: 12 }}>
					<AntDesign name={book.favorite ? 'star' : 'staro'} size={24} color="#ffe600" />
					<TouchableOpacity
						onPress={() => navigation.navigate('edit', { book })}
						style={{ borderRadius: 9999 }}
					>
						<AntDesign name="edit" size={24} color="#000" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

