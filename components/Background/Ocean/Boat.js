import { StyleSheet, Image, View } from 'react-native';

const boat = require('../../../assets/images/boat.svg');

export default function Boat() {

  return (
    <View style={styles.container}>
       <Image source={boat} style={styles.boat} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    left: '45%',
    top: '-67px',
    width: '70px',
    height: '70px',
    position: 'absolute',
    zIndex: 25,
  },
  boat: {
    width: '100px',
    height: '100px',
    zIndex: 25,
  }
})