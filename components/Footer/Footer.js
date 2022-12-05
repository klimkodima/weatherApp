import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { weatherOptions } from '../Weather/helper';

import theme from '../../theme';

export default function Footer({ weather }) {
 
  return (
    <View style={styles.container}>
      <View style={styles.leftBlock}>
      <Ionicons name={weatherOptions[weather?.weather[0].main]?.iconName} size={60} color="white" />
      <Text style={styles.description}>It`s {weather?.weather[0].description}</Text>
     </View>
     <Text style={styles.temp}>{weather?.main.temp.toFixed(0)} °</Text>
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
  description: {
    marginTop: '3%',
    color: theme.colors.textPrimary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.appBar
  },
  temp: {
    marginTop: '3%',
    color: theme.colors.textPrimary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.temp
  },
})