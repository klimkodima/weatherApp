import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Moon() {

  return (
      <LinearGradient colors={['#fefefe', '#fffbe8']} style={styles.moon}/>
  )
}

const styles = StyleSheet.create({
  moon: {
  position: 'absolute',
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  left: '20%',
  top: '25%'
  }
});
