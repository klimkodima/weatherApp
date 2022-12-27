import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Stars from './Stars';
import Moon from './Moon';
import Sun from './Sun';
import Clouds from './Clouds';
import Birds from './Birds';


export default function Sky({ isDayNow }) {

  return (
    <>
      {isDayNow ?
        <LinearGradient colors={['#feb8b0', '#fef9db']} style={styles.sky}>
          <Sun/>
          <Clouds/>
          <Birds/>
        </LinearGradient>
        : <LinearGradient
          colors={['#4c3f6d', '#6c62bb', '#93b1ed']}
          style={styles.skyNight}
        >
          <Stars />
          <Moon />
        </LinearGradient>
      }
    </>
  )
}

const styles = StyleSheet.create({
  sky: {
    flex: 1.5,
   
  },
  skyNight: {
    flex: 1.5,
  }
})