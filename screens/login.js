import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export const Login = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.content}>Login</Text>
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('main')}>
                <Text style={styles.buttonText}>Dashboard</Text>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bcd4e6',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    content: {
        fontSize: 40
    },
    button:{
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)',
        marginTop: 20
    },
    buttonText:{
        paddingVertical: 10,
        paddingHorizontal: 20
    }
});