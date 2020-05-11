import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components/header';

export const Dashboard = ({navigation}) => {
    return(        
        <View style={styles.container}>
            <Header navigation={navigation} title="Dashboard" />
            <View style={styles.body}>
                <Text style={styles.content}>Dashboard</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ace1af',
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