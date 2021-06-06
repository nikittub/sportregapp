import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Medal from '../components/svg/medal';
import Football from '../components/svg/football';
import Hokey from '../components/svg/hokey';
import Location from '../components/svg/location';
import Notification from '../components/svg/notification';
import Ball from '../components/svg/ball';
import Washer from '../components/svg/washer';
import Arrow from '../components/svg/arrow';

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export const Screen2 = () => {
  const navigation = useNavigation();

  const handleNavigateToScreen = () => {
    navigation.navigate('Screen3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableHighlight>
          <ImageBackground
            style={styles.avatar}
            source={require('../../assets/avatar.jpg')}
          />
        </TouchableHighlight>
        <View style={styles.status}>
          <TouchableHighlight>
            <Text style={styles.name}>Привет, name!</Text>
          </TouchableHighlight>
          <View style={styles.points}>
            <Medal />
            <Text style={{fontWeight: 'bold', marginLeft: 8, color: '#EA5515'}}>
              1600
            </Text>
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
      <View style={styles.events}>
        <View>
          <View style={styles.eventsHeader}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              События рядом
            </Text>
            <TouchableOpacity style={styles.underline}>
              <Text style={{color: '#EA5515'}}>Смотреть все</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.eventsCard}>
            <ImageBackground
              style={styles.eventsBackground}
              source={require('../../assets/football.png')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }}>
                <View>
                  <Text
                    style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>
                    Футбол
                  </Text>
                  <View style={styles.location}>
                    <Location />
                    <Text
                      style={{fontSize: 14, color: '#BDBDBD', marginLeft: 6}}>
                      10 Mtr Left
                    </Text>
                  </View>
                </View>
                <Football style={{paddingVertical: 15}} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eventsCard}>
            <ImageBackground
              style={styles.eventsBackground}
              source={require('../../assets/hokey.png')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }}>
                <View>
                  <Text
                    style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>
                    Хоккей
                  </Text>
                  <View style={styles.location}>
                    <Location />
                    <Text
                      style={{fontSize: 14, color: '#BDBDBD', marginLeft: 6}}>
                      23 Mtr Left
                    </Text>
                  </View>
                </View>
                <Hokey style={{paddingVertical: 15}} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.events}>
        <View style={styles.eventsHeader}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Все события</Text>
          <TouchableOpacity style={styles.underline}>
            <Text style={{color: '#EA5515'}}>Смотреть все</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.eventsCardMini}>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ball />
              <Text style={{fontSize: 20, marginLeft: 11}}>Футбол</Text>
            </View>
            <Text style={{fontSize: 14, color: '#BDBDBD'}}>
              Kazan, 30 км · 21:00
            </Text>
          </View>
          <View style={styles.arrow}>
            <Arrow />
          </View>
        </View>
        <View style={styles.eventsCardMini}>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Washer />
              <Text style={{fontSize: 20, marginLeft: 11}}>Хоккей</Text>
            </View>
            <Text style={{fontSize: 14, color: '#BDBDBD'}}>
              Kazan, 40 км · 21:00
            </Text>
          </View>
          <View style={styles.arrow}>
            <Arrow />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#222',
    borderRadius: 50,
    overflow: 'hidden',
  },
  points: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  notification: {
    marginLeft: 'auto',
  },
  name: {
    fontSize: 16,
    fontFamily: 'opensans-bold',
    fontWeight: '700',
    marginBottom: 6,
  },
  status: {
    marginLeft: 18,
  },
  marker: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EA5515',
    borderWidth: 1,
    borderColor: '#fff',
    right: 0,
  },
  bar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 8,
    marginRight: 16,
  },
  bartext: {
    fontSize: 14,
    color: '#9D9FA0',
  },
  scrollbar: {
    marginTop: 30,
  },
  events: {
    marginTop: 30,
  },
  eventsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#EA5515',
  },
  eventsCard: {
    marginTop: 20,
    width: 180,
    height: 225,
    marginRight: 14,
  },
  eventsBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 180,
    height: 225,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventsCardMini: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 75,
    backgroundColor: '#F6F7FA',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginTop: 20,
  },
  arrow: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
