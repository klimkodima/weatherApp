import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

import Location from './Location';

import theme from '../../theme';

dayjs.extend(calendar)

export default function AppBar({ city, country }) {

  return (
    <View style={styles.container}>
      <View>
        <Location city={city} country={country} />
        <Text style={styles.time}> {dayjs().calendar(dayjs(), {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          lastDay: '[Yesterday]',
        })}, {dayjs().format('MMM D h:mm ')}</Text>
      </View>
      <Ionicons name="ios-menu" size={50} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: '15%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    height: '15%',
    width: '100%',
    justifyContent: 'space-between',
    zIndex: 10
  },
  time: {
    marginTop: '3%',
    color: theme.colors.textSecondary,
    fontStyle: theme.fonts.body,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.appBar
  },
})