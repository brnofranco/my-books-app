import { Alert, Button, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Book } from '../../models/Book';
import { styles } from './styles';
import Input from '../../components/Input';
import { useBookDatabase } from '../../database/useBookDatabase';
import { useNavigation } from '@react-navigation/native';
import { pages } from '../../../App';

export function RegisterBookScreen() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { title: '', author: '', image: '' } as Book });

	const bookDatabase = useBookDatabase();

	const navigation = useNavigation();

	const onSubmit = async (data: Partial<Book>) => {
		try {
			const result = await bookDatabase.create(data);
			navigation.navigate(pages.home.name, { bookCreatedSuccessTitle: result.title });
		} catch (error) {
			console.error(error);
			Alert.alert('Erro ao cadastrar o produto.');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register Book</Text>

			<View style={styles.form}>
				<Input control={control} errors={errors} name="title" placeHolder="Title" />
				<Input control={control} errors={errors} name="author" placeHolder="Author" />
				<Input control={control} errors={errors} name="image" placeHolder="Image Link" />

				<Button title="Submit" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}

