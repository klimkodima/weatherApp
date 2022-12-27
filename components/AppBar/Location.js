import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import theme from '../../theme';

export default function Location({ city, country }) {
  return (
    <View style={styles.container}>
      <Ionicons name="md-location-sharp" size={13} color="black" />
      <Text style={styles.location}>{city} {country}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    paddingLeft: '10px',
    color: theme.colors.textSecondary,
    fontStyle: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.location
  },
})