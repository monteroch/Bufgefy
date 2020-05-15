import  React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text , TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import { global } from '../shared/styles';
import { useFonts } from '@use-expo/font';
import { createAccountRequest } from '../redux/actions/auth.actions';

export function SignUp({ navigation }){

    let [fontsLoaded] = useFonts({
        'Manrope': require('../assets/fonts/Manrope.ttf')
    });

    const dispatch = useDispatch();


    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    const handleSubmit = () => {
        console.log(`The data is:`);
        console.log(`Fullname: ${fullname}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`passwordConfirmation: ${passwordConfirmation}`);
        if(password === passwordConfirmation){
            dispatch(createAccountRequest({
                fullname: fullname,
                email: email,
                password: password
            }));
        }
        setFullname("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
    }


    return(
        (!fontsLoaded) ? (<Text>Loadding</Text>) : (
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Welcome!</Text>
                        <Text style={styles.subtitle}>Get the best from our app</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={fullname => setFullname(fullname)}
                            placeholder='Fullname'
                            placeholderTextColor='rgba(0, 0, 0, 0.2)'
                            value={fullname}
                        />
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
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.formInput}
                            secureTextEntry={true}
                            onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}
                            placeholder='Password'
                            placeholderTextColor='rgba(0, 0, 0, 0.2)'
                            value={passwordConfirmation}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.9}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginFooter} onPress={ () => navigation.navigate('login') } activeOpacity={0.9}>
                        <Text style={styles.bottomLegend}> Already a member? <Text style={styles.boldText}> Login</Text></Text>
                    </TouchableOpacity>
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
        backgroundColor: 'rgb(29, 53, 87)',
        marginBottom: 20,
    },
    buttonText: {
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        fontFamily: 'Manrope',
        fontSize: 17,
        color: '#ffffff'
    },
    loginFooter: {
        marginBottom: 60,
        alignItems: 'center'
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