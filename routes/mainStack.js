import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../screens/dashboard';
import { Settings } from '../screens/settings';
import { About } from '../screens/about';
import { useWindowDimensions } from 'react-native';
import { CustomDrawerContent } from '../components/drawerMenu';


export function MainStack(){

    const Drawer = createDrawerNavigator();
    const dimensions = useWindowDimensions();

    return(
        <Drawer.Navigator 
            initialRouteName="Dashboard"
            drawerStyle={{
                width: 200,
                // backgroundColor:'rgba(0, 0, 0, 0.7)',
                
            }}
            drawerContentOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue'
            }}
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen name="dashboard" component={ Dashboard }/>
            <Drawer.Screen name="settings" component={ Settings }/>
            <Drawer.Screen name="about" component={ About }/>
        </Drawer.Navigator>
    );
};