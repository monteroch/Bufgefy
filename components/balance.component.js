import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BalanceComponent = (props) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Total Balance</Text>
            <Text style={styles.body}>$1,470.85</Text>
            <Text style={styles.footer}>-$330.93 yesterday</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    title: {
        fontSize: 14,
        color: '#9c9c9c'
    },
    body: {
        fontSize: 35,
        marginVertical: 10
    },
    footer: {
        fontSize: 14,
        color: "#e03c31"
    }
});