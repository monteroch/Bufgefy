import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export const Header = ({navigation, title}) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.headerContainer}>
            <SimpleLineIcons style={styles.headerIcon} name="menu" size={22} color="#c4c3d0" onPress={openMenu}/>
            <View style={styles.headerContent}>
                <Text style={styles.title}> { title } </Text>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    headerContent:{
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: 'center'
    },
    headerIcon: {
        // backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#c4c3d0',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
        top: 25,
        position: 'absolute',
        zIndex: 100
    },
    title: {
        // backgroundColor: 'pink',
        fontSize: 22,
        color: '#c4c3d0',
    }
});