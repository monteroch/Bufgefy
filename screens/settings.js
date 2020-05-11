import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components/header';

export const Settings = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Header navigation={navigation} title="Settings" />
            <View style={styles.body}>
                <Text style={styles.content}>Settings</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffa6c9',
        height: '100%'
    },
    body:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1
    },
    content: {
        fontSize: 40
    }
});