import { StyleSheet, View } from 'react-native';

import  Sky  from './Sky/Sky';
import  Ocean  from './Ocean/Ocean';
import Mountains from './Mountains/Mountains';

export default function Background({ isDayNow }) {
 
  return (
    <View style={isDayNow ? styles.container : styles.containerNight}>
      <Sky isDayNow={isDayNow}/>
      <Mountains isDayNow={isDayNow}/>
      <Ocean isDayNow={isDayNow}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 2.5,

  },
  containerNight: {
    backgroundColor: '#e4ecff',
    position: 'relative',
    flex: 2.5,
  },
})