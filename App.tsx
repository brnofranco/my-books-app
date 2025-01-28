import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/Home';
import { RegisterBookScreen } from './src/screens/RegisterBook';
import { EditBookScreen } from './src/screens/EditBook';

const Stack = createNativeStackNavigator();

function RootStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Register" component={RegisterBookScreen} />
			<Stack.Screen name="Edit" component={EditBookScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}

