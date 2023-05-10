//import
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, SignIn, SignUp, Home, CashOnHand, CashOnBank} from './src/screens';
import FlashMessage from 'react-native-flash-message';

//Function Component
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> 

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name='SignUp'
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name='CashOnHand'
          component={CashOnHand}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name='CashOnBank'
          component={CashOnBank}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

//Export
export default App;