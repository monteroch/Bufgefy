import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TransactionsComponent = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}><Text style={styles.titleText}>Transaction</Text></View>
                <View style={styles.options}><Text style={styles.optionsText}>See all</Text></View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3dbe6',
    },
    header: {
        flexDirection: 'row'
    },
    title:{
        flex: 1,
    },
    options: {
        flex: 1,
        alignItems: 'flex-end'
    },
    titleText: {

    },
    optionsText: {
        color: '#cc5500'
    }
});