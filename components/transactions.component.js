import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TransactionsComponent = () => {

    return(
        <View style={styles.container}>
            <Text>TransactionsComponent</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        flexGrow: 1
    }
});