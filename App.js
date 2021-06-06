import React from 'react';
// import Logo from './src/components/svg/logo';
// import Eye from './src/components/svg/eye';
import { createStackNavigator } from '@react-navigation/stack';
import {Screen1} from './src/screens/screen1';
import {Screen2} from './src/screens/screen2';

import {
	// Text,
	// SafeAreaView,
	// StatusBar,
	// StyleSheet,
	// TouchableOpacity,
	// Alert,
	// TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
	
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="App">
					<Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Логин' }}/>
					<Stack.Screen
						name="Screen2"
						component={Screen2}
						options={{ title: 'Активности' }}
					/>
			</Stack.Navigator>
		</NavigationContainer>
		
	);
};


export default App;
