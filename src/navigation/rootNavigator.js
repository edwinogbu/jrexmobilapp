import 'react-native-gesture-handler';
import React, { useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './authNavigator';
import { CartProvider } from '../CartContext';
import AppStack from './AppStack';
// import { SignInContext } from '../contexts/authContext';
import { SignInContext } from '../contexts/authContext';


export default function RootNavigator() {
  const { signedIn } = useContext(SignInContext);


  return (
    <CartProvider>
      <NavigationContainer>
        {/* {signedIn.userToken === 'signed-in' || signedIn.userToken === 'signed-up'  ? ( */}
        {signedIn.userToken ? (

          <AppStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </CartProvider>
  );
}
