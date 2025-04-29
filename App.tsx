import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BooksProvider } from './src/contexts/BooksContext';
import { HomeTab } from './src/routes/HomeTab';

export default function App() {
	return (
		<GestureHandlerRootView>
			<BooksProvider>
				<NavigationContainer>
					<HomeTab />
				</NavigationContainer>
			</BooksProvider>
		</GestureHandlerRootView>
	);
}

