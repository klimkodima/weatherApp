import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Boat from './Boat';

export default function Ocean({ isDayNow }) {

    return (
        <View style={styles.container}>
            {isDayNow && <Boat/>}
            {isDayNow ?
                <>
                    <View style={styles.oceanTop} />
                    <View style={styles.oceanMiddle} />
                    <View style={styles.oceanBottom} />
                </>
                :
                <LinearGradient colors={['#8da6e6', '#788cc9']} style={styles.oceanNight}>
                    <LinearGradient colors={['#fefefe', '#fffbe8']} style={styles.moon}/>
                </LinearGradient>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    oceanTop: {
        backgroundColor: '#ceefe8',
        zIndex: 200,
        flex: 1
    },
    oceanMiddle: {
        backgroundColor: '#baeced',
        zIndex: 200,
        flex: 1
    },
    oceanBottom: {
        backgroundColor: '#ace6f1',
        zIndex: 200,
        flex: 2
    },
    oceanNight: {
        flex: 1,
    },
    moon: {
        position: 'absolute',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        left: '20%',
        top: '25%',
        opacity: 0.3
        }
})