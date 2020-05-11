import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const SignUp = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.content}>SignUp</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffff99',
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