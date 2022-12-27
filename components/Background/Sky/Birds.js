import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Bird = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.birdBefore}>
      </View >
      <View style={styles.birdAfter}>
      </View >
    </View>
  )
}

export default function Birds() {
  return (
    <View style={styles.container}>
      <View style={styles.birds}>
        <Bird style={styles.bird1} />
        <Bird style={styles.bird2} />
        <Bird style={styles.bird3} />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 20
  },
  birds: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 20
  },
  birdBefore: {
    left: '-17px',
    borderTopRightRadius: '18px',
    borderTopLeftRadius: '18px',
    borderLeftWidth: '0px',
    transformOrigin: 'bottom right',
    position: 'absolute',
    zIndex: 50,
    border: '2px solid #bb7074',
    borderBottomWidth: '0px',
    width: '18px',
    height: '8px'
  },
  birdAfter: {
    borderTopRightRadius: '18px',
    borderTopLeftRadius: '18px',
    borderLeftWidth: '0',
    transformOrigin: 'bottom left',
    position: 'absolute',
    zIndex: 50,
    border: '2px solid #bb7074',
    borderBottomWidth: '0',
    width: '18px',
    height: '8px'
  },
  bird1: {
    left: '75%',
    top: '35%',
    position: 'absolute',

  },
  bird2: {
    left: '70%',
    top: '39%',
    position: 'absolute',
  },
  bird3: {
    left: '73%',
    top: '43%',
    position: 'absolute',
  },
})