import * as React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

import SignUpScreen from './../screens/authScreens/SignUpScreen';

import COLORS from './../global/LandingColors';
import SplashScreen from './../screens/Splash';




const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
   
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen}
           options = {{ 
                    headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
        <Stack.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen}
           options = {{ 
                    headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
        
        <Stack.Screen name="SignInScreen" component={SignInScreen}
           options = {{ 
                    headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}
           options = {{ 
                    headerShown:false, 
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
        {/* <Stack.Screen name="ProductDetails" component={ProductDetails}
         //   options = {{ 
         //            headerShown:false, 
         //    }}
            options={({ navigation }) => ({
            // title: 'Product details',
            headerShown:true, 
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} 
         /> */}
      
        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen}
         //   options = {{ 
         //            headerShown:false, 
         //    }}
         options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () =>{         <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
,<CartIcon navigation={navigation}/>},
          })}
         /> */}

         {/* <Stack.Screen 
               name="DetailsScreen" 
               component={DetailsScreen} 
               options={({ navigation }) => ({
                  title: 'Product Details',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                     <CartIcon navigation={navigation} />

                  ),
               })} 
         />

        <Stack.Screen name='Cart' component={Cart} 
         options={({ navigation }) => ({
                  title: 'My Cart',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                     <CartIcon navigation={navigation} />

                  ),
               })} 
          
           />




      
        <Stack.Screen name="CartScreen" component={CartScreen}
           options = {{ 
                    headerShown:true, 
            }}
         />
       */}
        {/* <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}
           options = {{ 
                    headerShown:false, 
            }}
         /> */}

        

         {/* <Stack.Screen name='JrexMapScreen' component={JrexMapScreen} 
               options={({ navigation }) => ({
                  title: 'J-Rex Location',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                     <CartIcon navigation={navigation} />

                  ),
               })} 

            />




        <Stack.Screen 
               name="CheckoutScreen" 
               component={CheckoutScreen} 
               options={({ navigation }) => ({
                  title: 'Product Cart Details',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                     <CartIcon navigation={navigation} />

                  ),
               })} 
         />
      
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
           options = {{ 
                    headerShown:false, 
                    // title: 'Sidebar'
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
         />
       */}
      
      </Stack.Navigator>
  
  );
};


const styles = StyleSheet.create({
   headerTitle: {
     fontSize: 20,
     color:COLORS.primary
   }
 });