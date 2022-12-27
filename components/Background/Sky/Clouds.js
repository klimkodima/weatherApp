import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Clouds() {
  return (
    <View style={styles.clouds}>
      <Ionicons name="md-cloudy" size={60} color="white" style={[styles.cloud, styles.cloud1]}/>
      <Ionicons name="md-cloudy" size={50} color="white" style={[styles.cloud, styles.cloud2]}/>
      <Ionicons name="md-cloudy" size={90} color="white" style={[styles.cloud, styles.cloud3]}/>
      <Ionicons name="md-cloudy" size={70} color="white" style={[styles.cloud, styles.cloud4]}/>
      <Ionicons name="md-cloudy" size={30} color="white" style={[styles.cloud, styles.cloud5]}/>
      <Ionicons name="md-cloudy" size={55} color="white" style={[styles.cloud, styles.cloud6]}/>
    </View >
  )
}

const styles = StyleSheet.create({
  clouds: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 10
  },
  cloud: {
    position: 'absolute',
    zIndex: 40
  },
  cloud1: {
    left: '-30px',
    top: '40%',

  },
  cloud2: {
    left: '20%',
    top: '7%',
  },
  cloud3: {
    left: '20%',
    top: '35%',

  },
  cloud4: {
    left: '55%',
    top: '25%',
  },
  cloud5: {
    left: '22%',
    top: '75%',
  },
  cloud6: {
    left: '93%',
    top: '25%',
  }
})