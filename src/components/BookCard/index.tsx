import React from 'react';
import { View, Text, Image } from 'react-native';
import { Book } from '../../models/Book';
import { styles } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export function BookCard({ title, image, favorite, author }: Partial<Book>) {
	const navigation = useNavigation();

	return (
		<View style={styles.card}>
			<Image style={styles.image} source={{ uri: image }} />
			<AntDesign name={favorite ? 'star' : 'staro'} size={12} color="#ffe600" />

			<Text style={styles.title}>{title}</Text>
			<Text style={styles.author}>{author}</Text>

			<Button onPress={() => navigation.navigate('Edit', { title })}>Edit</Button>
		</View>
	);
}

