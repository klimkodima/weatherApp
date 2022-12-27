import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

import  Weather  from './components/Weather/Weather';
import  Footer  from './components/Footer/Footer';
import  Background  from './components/Background/Background';
import  AppBar  from './components/AppBar/AppBar';
import getWeather from './api/getWeather';
import isDay from './utils/isDay';

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

  const isDayNow = isDay(weather?.sys?.sunrise, weather?.sys?.sunset);

  return (
    <View style={styles.container}>
      <Background isDayNow={isDayNow}/>
          {weather && <AppBar city={weather.name} country={weather.sys.country} />}
          <Weather weather={weather} />
      <Footer weather={weather} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
})
