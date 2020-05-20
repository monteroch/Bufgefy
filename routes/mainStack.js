import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../screens/dashboard';
import { Settings } from '../screens/settings';
import { About } from '../screens/about';
import { useWindowDimensions } from 'react-native';
import { CustomDrawerContent } from '../components/drawerMenu';
import { SimpleLineIcons } from '@expo/vector-icons';


export function MainStack(){

    const Drawer = createDrawerNavigator();
    const dimensions = useWindowDimensions();

    return(
        <Drawer.Navigator 
            initialRouteName="Dashboard"
            drawerStyle={{
                width: 60,
                // backgroundColor:'rgba(0, 0, 0, 0.7)',
                
            }}
            drawerContentOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue'
            }}
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen 
                name="dashboard" 
                component={ Dashboard }
                options={{
                    drawerIcon:(
                        () => <SimpleLineIcons name="home" size={24} color="#ffffff" />
                    )
                }}
            />
            <Drawer.Screen 
                name="settings" 
                component={ Settings }
                options={{
                    drawerIcon:(
                        () => <SimpleLineIcons name="settings" size={24} color="#ffffff" />
                    )
                }}
            />
            <Drawer.Screen 
                name="about" 
                component={ About }
                options={{
                    drawerIcon:(
                        () => <SimpleLineIcons name="info" size={24} color="#ffffff" />
                    )
                }}
            />
        </Drawer.Navigator>
    );
};