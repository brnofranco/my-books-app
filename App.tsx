import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { HomeScreen } from './src/screens/Home';
import { RegisterBookScreen } from './src/screens/RegisterBook';
import { EditBookScreen } from './src/screens/EditBook';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from './src/database/initializeDatabase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen} options={{ title: 'Books', headerShown: false }} />
			<Stack.Screen name="edit" component={EditBookScreen} options={{ title: 'Edit' }} />
		</Stack.Navigator>
	);
}

export const pages = {
	home: {
		name: 'home',
		options: { title: 'Books' },
		component: HomeStack,
		hidden: false,
	},
	registerBook: {
		name: 'registerBook',
		options: { title: 'Register Book' },
		component: RegisterBookScreen,
		hidden: false,
	},
	edit: {
		name: 'edit',
		options: { title: 'Edit Book', tabBarButton: () => null },
		component: EditBookScreen,
		hidden: true,
	},
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SQLiteProvider databaseName="myBooks.db" onInit={initializeDatabase}>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName={pages.home.name}
					screenOptions={({ route }) => ({
						tabBarIcon: ({ color, size }) => {
							const icons: Record<string, string> = {
								home: 'book',
								registerBook: 'create',
							};

							return <Ionicons name={icons[route.name]} size={size} color={color} />;
						},
						tabBarActiveTintColor: '#03530d',
						tabBarInactiveTintColor: 'gray',
						tabBarStyle: { backgroundColor: '#f5f5f5', elevation: 5 },
						headerShown: false,
					})}
				>
					{Object.values(pages).map(
						(page) =>
							!page.hidden && (
								<Tab.Screen
									key={page.name}
									name={page.name}
									options={page.options}
									component={page.component}
								/>
							)
					)}
				</Tab.Navigator>
			</NavigationContainer>
		</SQLiteProvider>
	);
}

