import React from 'react';
import type {Node} from 'react';
import Logo from './src/components/svg/logo';

import {
	Text,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	Alert,
	TextInput
} from 'react-native';


const App: () => Node = () => {
	
	// Дописать функцию-обработчик нажатия на кнопку
	const onClick = () =>{
		Alert.alert('click')
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
			<Logo style={styles.logo} />
			<TextInput 
				style={styles.input} 
				placeholder="Табельный номер"
			/>
			<TextInput 
				style={styles.input} 
				placeholder="Пароль"
			/>
			<TouchableOpacity style={styles.button} onPress={onClick}>
				<Text style={styles.text}>Войти</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.password} onPress={onClick}>
				<Text style={styles.text, {color: '#0082CD'}}>Забыл пароль?</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

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
		marginBottom: 16
	}
});

export default App;
