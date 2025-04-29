import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { EditBookScreen } from '../screens/EditBook';

const Stack = createNativeStackNavigator();

export function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="books" component={HomeScreen} options={{ title: 'Books', headerShown: false }} />
			<Stack.Screen
				name="edit"
				component={EditBookScreen}
				options={{
					title: 'Edit',
					headerStyle: {
						backgroundColor: '#03530d',
					},
					headerTintColor: '#fff',
				}}
			/>
		</Stack.Navigator>
	);
}

