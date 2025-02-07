import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

interface Props {
	placeHolder: string;
	name: string;
	control: any;
	errors: any;
}

export default function Input({ control, errors, placeHolder, name }: Props) {
	return (
		<View>
			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						placeholder={placeHolder}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name={name}
			/>
			{errors[name] && <Text style={styles.error}>{placeHolder} is required.</Text>}
		</View>
	);
}

