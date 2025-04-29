import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './HomeStack';
import { RegisterBookScreen } from '../screens/RegisterBook';

const Tab = createBottomTabNavigator();

export function HomeTab() {
	return (
		<Tab.Navigator
			initialRouteName="home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					const icons: Record<string, string> = {
						home: 'book',
						registerBook: 'create',
					};

					return <Ionicons name={icons[route.name]} size={size} color={color} />;
				},
				tabBarActiveTintColor: '#03530d',
				tabBarStyle: { backgroundColor: '#fff', elevation: 5, borderTopWidth: 0 },
				headerShown: false,
			})}
		>
			<Tab.Screen name="home" options={{ title: 'Books' }} component={HomeStack} />
			<Tab.Screen name="registerBook" options={{ title: 'Register Book' }} component={RegisterBookScreen} />
		</Tab.Navigator>
	);
}

