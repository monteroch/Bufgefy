import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { useFonts } from '@use-expo/font';


export const Welcome = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        'ComicNeue-Regular': require('../assets/fonts/ComicNeue-Regular.ttf'),
        'Damion-Regular': require('../assets/fonts/Damion-Regular.ttf'),
        'GrandHotel-Regular': require('../assets/fonts/GrandHotel-Regular.ttf'),
        'Manrope': require('../assets/fonts/Manrope.ttf')
    });

    return(
        (!fontsLoaded) ? (<Text>Loadding</Text>) : (
            <ImageBackground source={require('../assets/images/wp4.jpg')} style={styles.container}>
                <Text style={styles.content}>Budgefy</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableHighlight style={styles.buttonSignUp} onPress={() => navigation.navigate('signup')}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonLogin} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        )
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bcd4e6',
        display: "flex",
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        marginTop: 120,
        fontSize: 50,
        fontFamily: 'GrandHotel-Regular'
    },
    buttonsContainer: {
        width: '100%',
        padding: 30
    },
    buttonSignUp: {
        borderWidth: 1.5,
        borderColor: 'rgb(255, 255, 255)',
        marginTop: 20,
        height: 45
    },
    buttonLogin:{
        borderWidth: 1.5,
        borderColor: '#d7453b',
        marginTop: 20,
        backgroundColor: '#d7453b'
    },
    buttonText:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'rgb(255, 255, 255)',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Manrope',
    }
});