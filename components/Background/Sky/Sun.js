import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Sun() {
    return (
      <LinearGradient colors={['#fefefe', '#fffbe8']} style={styles.sun}/>
  )
}

const styles = StyleSheet.create({
  sun: {
  position: 'absolute',
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  left: '40%',
  top: '20%'
  }
});