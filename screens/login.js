import  React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { global } from '../shared/styles';
import { useFonts } from '@use-expo/font';

export function Login({ navigation }){

    let [fontsLoaded] = useFonts({
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
        'Quicksand_300': require('../assets/fonts/Quicksand_300.ttf'),
        'Quicksand_400': require('../assets/fonts/Quicksand_400.ttf'),
        'Manrope': require('../assets/fonts/Manrope.ttf')
    });

    // const [ email, setEmail ] = useState('christian@test.com');
    // const [ password, setPassword ] = useState('holamundo');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = () => {
        console.log(`The email and password are: ${email}: ${password}`);
    }


    return(
        (!fontsLoaded) ? (<Text>Loadding</Text>) : (
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Hello!</Text>
                        <Text style={styles.subtitle}>Welcome back</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={email => setEmail(email)}
                            placeholder='Email'
                            placeholderTextColor='rgba(0, 0, 0, 0.2)'
                            value={email}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.formInput}
                            secureTextEntry={true}
                            onChangeText={password => setPassword(password)}
                            placeholder='Password'
                            placeholderTextColor='rgba(0, 0, 0, 0.2)'
                            value={password}
                        />
                    </View>
                    <TouchableHighlight style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.loginFooter} onPress={ () => navigation.navigate('signup') }>
                        <Text style={styles.bottomLegend}> Don't have an account? <Text style={styles.boldText}> Sign Up</Text></Text>
                    </TouchableHighlight>
                </View>
            </TouchableWithoutFeedback>
        )   
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebecf0',
        width: '100%',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        // alignItems: 'center',
    },
    header:{
        marginBottom: 50
    },
    title: {
        fontSize: 50,
        fontFamily: 'Manrope',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Manrope',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    formInput: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: 50,
        color: '#000',
        paddingHorizontal: 20,
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 3
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 40,
        backgroundColor: '#59cd90',
        marginBottom: 20
    },
    buttonText: {
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        fontFamily: 'Manrope',
        fontSize: 17,
        color: '#ffffff'
    },
    loginFooter: {
        marginBottom: 60
    },
    bottomLegend: {
        fontFamily: 'Manrope',
        color: 'rgb(0, 0, 0)',
        fontSize: 15
    },
    boldText: {
        fontFamily: 'Manrope',
        fontFamily: 'Manrope',
        color: 'rgb(29, 53, 87)',
        fontSize: 15,
        fontWeight: 'bold'
    },
});