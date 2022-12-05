import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

import  Weather  from './components/Weather/Weather';
import  Footer  from './components/Footer/Footer';
import  AppBar  from './components/AppBar/AppBar';
import getWeather from './api/getWeather';
import isDay from './utils/isDay';

import dayImg from './assets/images/background1.png';
import nightImg from './assets/images/background2.png';

export default function App() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location) {
        const weather = await getWeather(location.coords.latitude, location.coords.longitude);
        setWeather(weather.data);
      }
    })();
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='stretch' source={isDay ? dayImg : nightImg} style={styles.backgroundImage}>
          {weather && <AppBar city={weather.name} />}
          <Weather weather={weather} />
          <StatusBar style="auto" />
      </ImageBackground>
      <Footer weather={weather} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 2,
  }
})
