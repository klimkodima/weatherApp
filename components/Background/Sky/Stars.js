import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stars() {

  return (
    <View style={styles.stars}>
      <LinearGradient colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']} style={styles.shootingStar}/>
      <View style={[styles.star, styles.starLarge, styles.starLarge1]}/>
      <View style={[styles.star, styles.starLarge, styles.starLarge2]}/>
      <View style={[styles.star, styles.starLarge, styles.starLarge3]}/>
      <View style={[styles.star, styles.starLarge, styles.starLarge4]}/>
      <View style={[styles.star, styles.starMedium, styles.starMedium1]}/>
      <View style={[styles.star, styles.starMedium, styles.starMedium2]}/>
      <View style={[styles.star, styles.starMedium, styles.starMedium3]}/>
      <View style={[styles.star, styles.starMedium, styles.starMedium4]}/>
      <View style={[styles.star, styles.starSmall, styles.starSmall1]}/>
      <View style={[styles.star, styles.starSmall, styles.starSmall2]}/>
      <View style={[styles.star, styles.starSmall, styles.starSmall3]}/>
      <View style={[styles.star, styles.starSmall, styles.starSmall4]}/>
    </View >
  )
}

const styles = StyleSheet.create({
  stars: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 10
  },
  shootingStar: {
    position: 'absolute',
    width: '4px',
    height: '45px',
    left: '65%',
    top: '15%',
    transformOrigin: 'left',
    transform: 'rotate(240deg)',
  },
  star: {
    borderRadius: '50%',
    backgroundColor: '#fff',
    position: 'absolute',
  },
  starLarge: {
    width: '5px',
    height: '5px',
  },
  starMedium: {
    width: '4px',
    height: '4px',
    opacity: '0,5'

  },
  starSmall: {
    width: '3px',
    height: '3px',
    opacity: '0,8'
  },
  starLarge1: {
    left: '70%',
    top: '40%',
  },
  starLarge2: {
    left: '55%',
    top: '50%',
  },
  starLarge3: {
    left: '35%',
    top: '15%',
  },
  starLarge4: {
    left: '5%',
    top: '70%',
  },
  starMedium1: {
    left: '88%',
    top: '15%',
  },
  starMedium2: {
    left: '65%',
    top: '65%',
  },
  starMedium3: {
    left: '50%',
    top: '20%',
  },
  starMedium4: {
    left: '25%',
    top: '85%',
  },
  starSmall1: {
    left: '90%',
    top: '65%',
  },
  starSmall2: {
    left: '45%',
    top: '70%',
  },
  starSmall3: {
    left: '45%',
    top: '5%',
  },
  starSmall4: {
    left: '10%',
    top: '35%',
  }
})