import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Logo from '../components/svg/logo';
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

export const Screen1 = () => {
	
	const navigation = useNavigation()

	const handleNavigateToScreen = () => {
		navigation.navigate('Screen2');
	}


	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
			<Logo style={styles.logo} />
			<TextInput 
				style={styles.input} 
				placeholder="Табельный номер"
				// Login
				onChangeText={(event) => console.log(event)}
			/>
			<TextInput 
				style={styles.input} 
				placeholder="Пароль"
				secureTextEntry={true}
				// Password
				onChangeText={(event) => console.log(event)}
			/>
			{/* <Eye style={styles.eye}/> */}
			<TouchableOpacity style={styles.button} onPress={ () => handleNavigateToScreen()} >
				<Text style={styles.text}>Войти</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.password} onPress={ () => handleNavigateToScreen()}>
				<Text style={styles.text, {color: '#0082CD'}}>Забыл пароль?</Text>
			</TouchableOpacity>
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
		
	},
	logo: {
		width: 208,
		height: 64,
		marginBottom: 60
	},
	button:{
		alignItems: 'center',
		backgroundColor: 'red',
		width: '90%',
		height: 56,
		borderRadius: 8,
		backgroundColor: '#2E2E82',
		marginTop: 8
	},
	text: {
		fontFamily: 'poppins',
		fontWeight: '400',
		marginTop: 15,
		alignItems: 'center',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF'
	},
	password:{
		marginTop: 24
	},
	input: {
		width: '90%',
		paddingVertical: 16,
		paddingLeft: 16,
		backgroundColor: "#F6F7FA",
		borderRadius: 6,
		marginBottom: 16,
		position: 'relative'
	},
// 	// eye: {
// 	// 	position: 'absolute',
// 	// 	right: 0,
// 	// 	top: '25%',
// 	// 	backgroundColor: "#F6F7FA"
// 	// }
});