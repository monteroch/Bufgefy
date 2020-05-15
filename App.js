import  React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './routes/authstack';
import { MainStack } from './routes/mainStack';
import { navigatorRef } from './routes/RootNavigation';

import { initFirebase } from './firebase';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigatorRef}>
        <Stack.Navigator>
          <Stack.Screen name="auth" component={ AuthStack } options={{headerShown:false}}/>
          <Stack.Screen name="main" component={ MainStack } options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}