import { StyleSheet, View } from 'react-native';

export default function Mountains({ isDayNow }) {

    return (
        <View style={styles.mountains}>
            <View style={[styles.mountain, styles.mountainBack1, !isDayNow && styles.mountainNight3]} />
            <View style={[styles.mountain, styles.mountainBack2, !isDayNow && styles.mountainNight3]} />
            <View style={[styles.mountain, styles.mountainBack3, !isDayNow && styles.mountainNight3]} />
            <View style={[styles.mountain, styles.mountainMiddle1, !isDayNow && styles.mountainNight2]} />
            <View style={[styles.mountain, styles.mountainMiddle2, !isDayNow && styles.mountainNight2]} />
            <View style={[styles.mountain, styles.mountainMiddle3, !isDayNow && styles.mountainNight2]} />
            <View style={[styles.mountain, styles.mountainTop1, !isDayNow && styles.mountainNight1]} />
            <View style={[styles.mountain, styles.mountainTop2, !isDayNow && styles.mountainNight1]} />
        </View>
    )
}

const styles = StyleSheet.create({
    mountains: {
        position: 'absolute',
        width: '100%',
        height: '10%',
        bottom: '40%',
    },
    mountain: {
        borderRadius: '50%',
        zIndex: 200,
        position: 'absolute',
    },
    mountainNight1: {
        backgroundColor: '#614da2',
    },
    mountainNight2: {
        backgroundColor: '#6154a4',
    },
    mountainNight3: {
        backgroundColor: '#7980c8',
    },
    mountainBack1: {
        backgroundColor: '#fec6b9',
        width: '180px',
        height: '120px',
        top: '10%',
    },
    mountainBack2: {
        backgroundColor: '#fec6b9',
        width: '200px',
        height: '100px',
        left: '20%',
        top: '13%',
    },
    mountainBack3: {
        backgroundColor: '#fec6b9',
        width: '150px',
        height: '80px',
        left: '55%',
        top: '8%',
    },
    mountainMiddle1: {
        backgroundColor: '#fee1cb',
        width: '150px',
        height: '120px',
        left: '-60px',
        top: '35%',
    },
    mountainMiddle2: {
        backgroundColor: '#fee1cb',
        width: '150px',
        height: '100px',
        left: '10%',
        top: '40%',
    },
    mountainMiddle3: {
        backgroundColor: '#fee1cb',
        width: '220px',
        height: '150px',
        left: '30%',
        top: '25%',
    },
    mountainTop1: {
        backgroundColor: '#fffcdd',
        width: '250px',
        height: '80px',
        left: '60%',
        top: '35%',
    },
    mountainTop2: {
        backgroundColor: '#fffcdd',
        width: '180px',
        height: '45px',
        left: '20%',
        top: '75%',
    },
})