import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Medal from '../components/svg/medal';
import Notification from '../components/svg/notification';
import {
	View, 
	Text, 
	SafeAreaView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	TouchableHighlight
} from 'react-native';

export const Screen2 = () => {
	
	const navigation = useNavigation()

	const handleNavigateToScreen = () => {
		navigation.navigate('Screen3');
	}
	
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
			<View style={styles.header}>
				<View style={styles.avatar}>
					<Image />
				</View>
				<View style={styles.status}>
					<Text style={styles.name}>Привет, name!</Text>
					<View style={styles.points}>
						<Medal/>
						<Text style={{fontWeight: 'bold', marginLeft: 8, color: '#EA5515'}}>1600</Text>
						<Text style={{marginLeft: 3, color: '#EA5515'}}>Points</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.notification}>
					<Notification />
					<View style={styles.marker} />
				</TouchableOpacity>
			</View>
			<View style={styles.scrollbar}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<TouchableHighlight style={styles.bar}>
						<Text style={styles.bartext}>Все</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.bar}>
						<Text style={styles.bartext}>Футбол</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.bar}>
						<Text style={styles.bartext}>Хоккей</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.bar}>
						<Text style={styles.bartext}>Баскетбол</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.bar}>
						<Text style={styles.bartext}>Волейбол</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.bar}>
						<Text style={styles.bartext}>Тенис</Text>
					</TouchableHighlight>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF',
		paddingHorizontal: 20,
	},
	header:{
		display: 'flex',
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
		width: '100%'
	},
	avatar: {
		width: 40,
		height: 40,
		backgroundColor: '#222',
		borderRadius: 50
	},
	points: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	notification: {
		marginLeft: 'auto'
	},
	name: {
		fontSize: 16,
		fontFamily: 'opensans-bold',
		fontWeight: '700',
		marginBottom: 6
	},
	status: {
		marginLeft: 18
	},
	marker: {
		position: 'absolute',
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: '#EA5515',
		borderWidth: 1,
		borderColor: '#fff',
		right: 0
	},
	bar: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: '#F6F7FA',
		borderRadius: 8,
		marginRight: 16
	},
	bartext: {
		fontSize: 14,
		color: '#9D9FA0'
	},
	scrollbar: {
		marginTop: 30
	}
});