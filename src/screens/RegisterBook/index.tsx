import { Alert, Button, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Book } from '../../models/Book';
import { styles } from './styles';
import Input from '../../components/Input';
import { useBookDatabase } from '../../database/useBookDatabase';
import { useNavigation } from '@react-navigation/native';
import { pages } from '../../../App';
import { Header } from '../../components/Header';

export function RegisterBookScreen() {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: { title: '', author: '', image: '' } as Book });

	const bookDatabase = useBookDatabase();

	const navigation = useNavigation();

	const onSubmit = async (data: Partial<Book>) => {
		try {
			await bookDatabase.create(data);
			navigation.navigate(pages.home.name);
			reset();
		} catch (error) {
			console.error(error);
			Alert.alert('Erro ao cadastrar o produto.');
		}
	};

	return (
		<View style={styles.container}>
			<Header title="Register Book" />

			<View style={styles.form}>
				<Input control={control} errors={errors} name="title" placeHolder="Title" />
				<Input control={control} errors={errors} name="author" placeHolder="Author" />
				<Input control={control} errors={errors} name="image" placeHolder="Image Link" />

				<Button title="Submit" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}

