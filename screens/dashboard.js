import React, { useEffect, useState  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components/header';
import { BalanceComponent } from '../components/balance.component';
import { TransactionsComponent } from '../components/transactions.component';
import { useSelector } from 'react-redux'
import { useFonts } from '@use-expo/font';

export const Dashboard = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        'Manrope': require('../assets/fonts/Manrope.ttf')
    });

    useEffect(() => {
        //get the user
    }, []);

    const user = useSelector(state => state.user);

    const greeting = () => {
        let date = new Date();
        let hours = date.getHours();
        let result;
        switch(true){
            case (hours > 0 && hours < 12):
                result = "Good morning,";
                break;
            case (hours > 12 && hours < 17):
                result = "Good afternoon,";
                break;
            case (hours > 17 && hours < 21):
                result = "Good evening,";
                break;
            case (hours > 21 && hours < 24):
                result = "Good nigth,";
                break;
            default:
                result = "Good morning,";
        }
        return result;
    }

    return(
        (!fontsLoaded) ? (<Text>Loadding</Text>) : (
            <View style={styles.container}>
                <Header navigation={navigation} />
                <View style={styles.body}>
                    {(user) ?
                        (
                            <View>
                                <Text style={styles.greeting}>{ greeting() }</Text>
                                <Text style={styles.greeting}>{user.fullname.split(" ")[1]}!</Text>
                                <BalanceComponent/>
                                <TransactionsComponent />
                            </View>
                        ):
                        (<Text>No user found</Text>)
                    }
                </View>
            </View>
        )
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d3dbe6',
        height: '100%',
    },
    body:{
        display: "flex",
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        padding:20,
    },
    content: {
        fontSize: 40
    },
    greeting: {
        fontFamily: 'Manrope',
        fontSize: 24
    }
});