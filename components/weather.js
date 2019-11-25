import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utilities/weatherConditions';

const Weather = ({ weather, temperature, location, humidity, detail }) => {

  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.tempText}>Temp: {temperature}˚</Text>
      </View>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={170}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{location}</Text>
        {/* <Text style={styles.time}>{time}</Text> */}
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
        <Text style={styles.subtitle}>
          Humidity: {humidity}%
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    marginTop: 0,
    fontSize: 45,
    color: '#fff'
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 30,
    marginBottom: 15
  },
  title: { 
   padding:12,
    fontSize: 50,
    color: '#fff'
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  },
 /*  time: {
    fontSize: 38,
    color: '#fff'
  } */
});

export default Weather;