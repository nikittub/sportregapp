import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
	View, 
	Text, 
	SafeAreaView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	Alert,
	TextInput
} from 'react-native';

export const Screen2 = () => {
	
	const navigation = useNavigation()

	const handleNavigateToScreen = () => {
		navigation.navigate('Screen3');
	}
	
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
			<View>
				
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		paddingHorizontal: 15,
		
	}
});