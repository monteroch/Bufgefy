import React, { useEffect, useState  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components/header';
import { useSelector } from 'react-redux'

export const Dashboard = ({navigation}) => {

    useEffect(() => {
        //get the user
    }, []);

    const user = useSelector(state => state.user);

    return(        
        <View style={styles.container}>
            <Header navigation={navigation} title="Dashboard" />
            {(user)?(<Text>{user.fullname}</Text>):(<Text>No user found</Text>)}
            <View style={styles.body}>
                <Text style={styles.content}>Dashboard</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d3dbe6',
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