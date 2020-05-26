import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CardComponent = () => {

    return(
        <View style={styles.container}>
            <Text>This is a card</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3dbe6',
        padding: 10,
        borderRadius: 6,
        elevation: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.6,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    }
});