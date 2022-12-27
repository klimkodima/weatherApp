import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { weatherOptions } from './helper';

import theme from '../../theme';

export default function Weather({ weather }) {

  return (
    <View style={styles.container}>
      <View>
        <Ionicons name={weatherOptions[weather?.weather[0].main]?.iconName} size={60} color="black"/>
        <Text style={styles.description}>It`s {weather?.weather[0].description}</Text>
      </View>
      <View style={styles.rightBlock}>
        <Text style={styles.temp}>{weather?.main.temp.toFixed(0)}</Text>
        <Text style={styles.deg}> °</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: '30%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    zIndex: 10
  },
  description: {
    marginTop: '3%',
    color: theme.colors.textSecondary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.appBar
  },
  rightBlock: {
    flexDirection: 'row',
  },
  temp: {
    color: theme.colors.textSecondary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.temp
  },
  deg: {
    color: theme.colors.textSecondary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.deg
  },
})