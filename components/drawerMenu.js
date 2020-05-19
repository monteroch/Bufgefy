import React from 'react';
import { View } from 'react-native';
import { signOutRequest } from '../redux/actions/auth.actions';
import { useDispatch } from "react-redux";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  
  export function CustomDrawerContent(props) {

    const dispatch = useDispatch();

    const pressHandler = () => {
        dispatch(signOutRequest())
        console.log("Hola");
    };

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
            icon={() => <SimpleLineIcons name="logout" size={24} color="black" />}
            label="Sign out!"
            onPress={pressHandler}
        />
      </DrawerContentScrollView>
    );
  }