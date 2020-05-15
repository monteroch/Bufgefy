import React from 'react';
import { View } from 'react-native';
import { signOutRequest } from '../redux/actions/auth.actions';
import { useDispatch } from "react-redux";
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
            label="Sign out!"
            onPress={pressHandler}
        />
      </DrawerContentScrollView>
    );
  }