import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

import { weatherOptions } from '../Weather/helper';

import theme from '../../theme';

export default function Footer({ weather }) {
 
  return (
    <View style={styles.container}>
      <View style={styles.column}>
      <Ionicons name={weatherOptions[weather?.weather[0].main]?.iconName} size={32} color="yellow"/>
      <Text style={styles.description}>{dayjs().format('h:mm A')}</Text>
      <Text style={styles.value}>{weather?.main.temp.toFixed(0)}°</Text>
    </View>
    <View style={styles.column}>
    <Text style={styles.description}>Humidity</Text>
      <Text style={styles.value}>{weather?.main.humidity.toFixed(0)}%</Text>
    </View>
    <View style={styles.column}>
    <Text style={styles.description}>Wind</Text>
      <Text style={styles.value}>{weather?.wind.speed.toFixed(0)}m/s</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.textPrimary,
    borderRadius: '10%',
    marginTop: '-10%'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: '15%',
    borderRadius: '10px',
    alignItems: 'center',
    backgroundColor: '#93b1ed',
    margin: '10px',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: '3%',
    color: theme.colors.textPrimary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: '1rem'
  },
  value: {
    marginTop: '3%',
    color: theme.colors.textPrimary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: '2rem'
  },
})