import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LandingScreen from '../screens/LandingScreen';
import DrawerContent from './../components/DrawerContent';


import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import { Cart } from './../screens/Cart';
import DetailsScreen from './../screens/DetailsScreen';
import CheckoutScreen from './../screens/CheckoutScreen';
import JrexMapScreen from './../screens/JrexMapScreen';
import { CartIcon } from './../components/CartIcon';
import { colors } from './../global/styles';
import MyOrderScreen from './../screens/MyOrderScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import COLORS from './../global/LandingColors';
import {  StyleSheet } from 'react-native'
import ProfileScreen from './../screens/ProfileScreen';
import ProfileDetailScreen from './../screens/ProfileDetailScreen';
import PaymentScreen from './../screens/PaymentScreen';
import AddProduct from './../screens/AddProduct';
import UserProfile from './../screens/UserProfile';
import UserList from './../screens/UserList';
import PhoneCallButton from '../screens/PhoneCallButton';
import SettingsScreen from './../SettingScreen';
import ChatScreen from './../screens/ChatScreen';
import CustomerReceiptScreen from './../screens/CustomerReceiptScreen';
import TransactionHistoryScreen from './../screens/TransactionHistoryScreen';
import TransactionHistoryDetailScreen from './../TransactionHistoryDetailScreen ';
import { View } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './../../firebase'; // Assuming you have already imported and initialized Firebase
import SalesReportScreen from './../screens/SalesReportScreen';
import SalesReportDetailScreen from './../SalesReportDetailScreen';
import UserListScreen from './../screens/UserListScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AppTabNavigator() {
//    const [checkUser, setCheckUser] = useState([]);
//    const [isUser, setIsUser] = useState(false);
//    const [isAdmin, setIsAdmin] = useState(false);
 
//    useEffect(() => {
//      const fetchCheckUser = async () => {
//        try {
//          const userType = 'user'; // Replace this with the actual userType from the user collection
//          const checkUserRef = collection(db, 'users');
//          const checkUserQuery = query(checkUserRef, where('userType', '==', userType));
//          const checkUserSnapshot = await getDocs(checkUserQuery);
//          const checkUserData = checkUserSnapshot.docs.map(doc => doc.data());
//          setCheckUser(checkUserData);
//          setIsUser(userType === 'user');
//          setIsAdmin(userType === 'admin');
//        } catch (error) {
//          console.error('Error fetching checkUser:', error);
//        }
//      };
 
//      fetchCheckUser();
//    }, [])



//   return (
//     <Tab.Navigator tabBarOptions ={{
//                 activeTintColor:colors.buttons,
//                 inactiveTintColor: colors.buttons,
//             style: { backgroundColor: colors.cardbackground },
//         }}


//         screenOptions={{
//         tabBarActiveTintColor:colors.buttons,
//         tabBarInactiveTintColor: colors.buttons,
//         tabBarShowLabel: false,
//         tabBarStyle: {

//         backgroundColor: colors.cardbackground
//         }
//         }}
   
//     >
//       <Tab.Screen 
//             name="LandingScreen"
//           component={LandingScreen}
//           options ={{
//                   // tabBarLabel:"Home",
//                   // title: 'Home Page',
                 
//                   headerShown:false, 
//                   tabBarIcon:({color,size})=>(
//                   <Icon 
//                     name='home'
//                     type = 'material'
//                     color={colors}
//                     size ={size}
//                   />)
//             }}
//        />
// <Tab.Screen 
//   name="Cart"
//   component={Cart}
//   options={({ navigation }) => ({
//     title: 'My Cart Details',
//     headerTitleStyle: styles.headerTitle,
//     headerShown: true, 
//     tabBarIcon: ({ color, size }) => (
//       <Icon 
//         name='shopping-cart'
//         type='material'
//         color={color}
//         size={size}
//       />
//     ),
//     headerLeft: () => (
//       <Icon 
//         name="arrow-back-ios" 
//         size={28} 
//         onPress={() => navigation.goBack()}
//         style={{ marginLeft: 20 }}
//       />
//     ),
//     headerRight: () => (
//       <View style={{ flexDirection: 'row', marginRight: 20 }}>
//         <CartIcon />
//         <Icon 
//           name="location-history" 
//           size={28} 
//           onPress={() => navigation.navigate("TransactionHistoryScreen")} 
//           style={{ marginLeft: 10 }}
//         />
//       </View>
//     ),
//   })} 
// />

//       <Tab.Screen 
//           name="TransactionHistoryScreen"
//           component={TransactionHistoryScreen}
//           options={({ navigation }) => ({
//                   title: 'My Cart Details',
//                   headerTitleStyle: styles.headerTitle,
//                   headerShown:true, 
//                   tabBarIcon:({color,size})=>(
//                   <Ionicons
//                   name='md-receipt'
//                     type = 'material'
//                     color={color}
//                     size ={size}
//                   />),
//                   headerLeft: () => (
                    
//                     <Icon name="arrow-back-ios" 
//                     size={28} 
//                     onPress={() => navigation.goBack()}
//                     style={{marginLeft:20}}
//                      />

//                  ),
//                  headerRight: () => (
                    
//                     <CartIcon />

//                  ),
//                 })} 
          
//        />


// {isAdmin ? (
//   <Tab.Screen 
//     name="Profile"
//     component={ProfileScreen}
//     options={({ navigation }) => ({
//       title: 'Profile',
//       headerTitleStyle: styles.headerTitle,
//       headerShown:true, 
//       tabBarIcon:({color,size})=>(
//         <Icon 
//           name='person'
//           type = 'material'
//           color={color}
//           size ={size}
//         />
//       ),
//       headerLeft: () => (
//         <Icon
//           name="arrow-back-ios"
//           size={28}
//           onPress={() => navigation.goBack()}
//           style={{marginLeft:20}}
//         />
//       ),
//       headerRight: () => (
//         <CartIcon />
//       ),
//     })} 
//   />
// ) : null}

// {isAdmin ? (
//   <Tab.Screen 
//     name="SalesReportScreen"
//     component={SalesReportScreen}
//     options={({ navigation }) => ({
//       title: 'Sales Report',
//       headerTitleStyle: styles.headerTitle,
//       headerShown:true, 
//       tabBarIcon:({color,size})=>(
//         <Icon 
//           name='person'
//           type = 'material'
//           color={color}
//           size ={size}
//         />
//       ),
//       headerLeft: () => (
//         <Icon
//           name="arrow-back-ios"
//           size={28}
//           onPress={() => navigation.goBack()}
//           style={{marginLeft:20}}
//         />
//       ),
//       headerRight: () => (
//         <CartIcon />
//       ),
//     })} 
//   />
// ) : null}

//     </Tab.Navigator>
//   );
// }

const [checkUser, setCheckUser] = useState([]);
const [isUser, setIsUser] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  const fetchCheckUser = async () => {
    try {
      const userType = 'user'; // Replace this with the actual userType from the user collection
      const checkUserRef = collection(db, 'users');
      const checkUserQuery = query(checkUserRef, where('userType', '==', userType));
      const checkUserSnapshot = await getDocs(checkUserQuery);
      const checkUserData = checkUserSnapshot.docs.map(doc => doc.data());
      setCheckUser(checkUserData);
      setIsUser(userType === 'user');
      setIsAdmin(userType === 'admin');
    } catch (error) {
      console.error('Error fetching checkUser:', error);
    }
  };

  fetchCheckUser();
}, []);

return (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeTintColor: colors.buttons,
//       inactiveTintColor: colors.buttons,
//       style: { backgroundColor: colors.cardbackground },
//     }}
//     screenOptions={({ route }) => ({
//       tabBarActiveTintColor: colors.buttons,
//       tabBarInactiveTintColor: colors.buttons,
//       tabBarShowLabel: false,
//       tabBarStyle: {
//         backgroundColor: colors.cardbackground,
//       },
//       tabBarIcon: ({ color, size }) => {
//         let iconName;

//         if (route.name === 'LandingScreen') {
//           iconName = 'home';
//         } else if (route.name === 'Cart') {
//           iconName = 'shopping-cart';
//         } else if (route.name === 'TransactionHistoryScreen') {
//           iconName = 'md-receipt';
//         } else if (route.name === 'Profile' || route.name === 'SalesReportScreen') {
//           iconName = 'person';
//         }

//         return <Icon name={iconName} type="material" color={color} size={size} />;
//       },
//     })}
//   >
<Tab.Navigator
  tabBarOptions={{
    activeTintColor: colors.buttons,
    inactiveTintColor: colors.buttons,
    style: { backgroundColor: colors.cardbackground },
  }}
  screenOptions={({ route }) => ({
    tabBarActiveTintColor: colors.buttons,
    tabBarInactiveTintColor: colors.buttons,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: colors.cardbackground,
    },
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'LandingScreen') {
        iconName = 'home';
      } else if (route.name === 'Cart') {
        iconName = 'shopping-cart';
      } else if (route.name === 'TransactionHistoryScreen') {
        iconName = 'md-receipt';
        return <Ionicons name={iconName} type="material" color={color} size={size} />;
      } else if (route.name === 'salesReport' || route.name === 'SalesReportScreen') {
        iconName = 'chart-line';
        return <MaterialCommunityIcons name={iconName} type="material" color={color} size={size} />;

      
      }
    else if (route.name === 'UserListScreen' || route.name === 'UserListScreen') {
        iconName = 'account-group';
        return <MaterialCommunityIcons name={iconName} type="material" color={color} size={size} />;

      
      }
       else if (route.name === 'Profile' || route.name === 'ProfileScreen') {
        iconName = 'person';
      }

      return <Icon name={iconName} type="material" color={color} size={size} />;
    },
  })}
>
    <Tab.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{ headerShown: false }}
    />
    {/* <Tab.Screen
      name="Cart"
      component={Cart}
      options={({ navigation }) => ({
        title: 'My Cart Details',
        headerTitleStyle: styles.headerTitle,
        headerShown: true,
        headerLeft: () => (
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 20 }}>
            <CartIcon />
            <Icon
              name="location-history"
              size={28}
              onPress={() => navigation.navigate('TransactionHistoryScreen')}
              style={{ marginLeft: 10 }}
            />
          </View>
        ),
      })}
    /> */}
    <Tab.Screen
  name="Cart"
  component={Cart}
  options={({ navigation }) => ({
    title: 'My Cart Details',
    headerTitleStyle: styles.headerTitle,
    headerShown: true,
    headerLeft: () => (
      <Icon
        name="arrow-back-ios"
        size={28}
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20 }}
      />
    ),
    headerRight: () => (
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <CartIcon />
        <Ionicons
          name="notifications"
          size={28}
          onPress={() => navigation.navigate('TransactionHistoryScreen')}
          style={{ marginLeft: 10 }}
        />
      </View>
    ),
  })}
/>

    <Tab.Screen
      name="TransactionHistoryScreen"
      component={TransactionHistoryScreen}
      options={({ navigation }) => ({
        title: 'My Cart Details',
        headerTitleStyle: styles.headerTitle,
        headerShown: true,
        headerLeft: () => (
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}
          />
        ),
        headerRight: () => <CartIcon />,
      })}
    />
      

      

    {isAdmin ? (
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: 'Profile',
          headerTitleStyle: styles.headerTitle,
          headerShown: true,
          headerLeft: () => (
            <Icon
              name="arrow-back-ios"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => <CartIcon />,
        })}
      />
    ) : null}

    {isAdmin ? (
      <Tab.Screen
        name="SalesReportScreen"
        component={SalesReportScreen}
        options={({ navigation }) => ({
          title: 'Sales Report',
          headerTitleStyle: styles.headerTitle,
          headerShown: true,
          headerLeft: () => (
            <Icon
              name="arrow-back-ios"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => <CartIcon />,
        })}
      />
    ) : null}

    {isAdmin ? (
      <Tab.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={({ navigation }) => ({
          title: 'User history',
          headerTitleStyle: styles.headerTitle,
          headerShown: true,
          headerLeft: () => (
            <Icon
              name="arrow-back-ios"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => <CartIcon />,
        })}
      />
    ) : null}



  </Tab.Navigator>
);
}


function AppDrawerNavigator() {
  return (
    <Drawer.Navigator 
        drawerContent={ props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={AppTabNavigator} 
         options = {{ 
                    headerShown:false, 
                    drawerIcon: ({ color, size }) => (
                     <Icon
                     name="home"
                     type="material"
                     color={color}
                     size={size}
                     />
                  ),
            }}
      />
      <Drawer.Screen name="Business Console" component={BusinessConsoleScreen}
          options = {{ 
                    headerShown:false, 
                    drawerIcon: ({ color, size }) => (
                     <Icon
                     name="business"
                     type="material"
                     color={color}
                     size={size}
                     />
                  ),
            }}
       />
      <Drawer.Screen name="Profile Detail" component={ProfileDetailScreen} 
           options={{
            drawerIcon: ({ color, size }) => (
               <Icon
               name="person"
               type="material"
               color={color}
               size={size}
               />
            ),
         }}
      />
      <Drawer.Screen name="UserProfile" component={UserList} 
           options={{
            drawerIcon: ({ color, size }) => (
               <Icon
               name="person"
               type="material"
               color={color}
               size={size}
               />
            ),
         }}
      />
    </Drawer.Navigator>
  );
}

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppDrawerNavigator" component={AppDrawerNavigator}
             options = {{ 
                    headerShown:false, 
                    // title: 'Sidebar'
                    // ...TransitionPresets.RevealFromBottomAndroid 
            }}
       />
      <Stack.Screen 
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


        <Stack.Screen name='JrexMapScreen' component={JrexMapScreen} 
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
        <Stack.Screen name='PhoneCallButton' component={PhoneCallButton} 
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
                  title: 'My Cart Details',
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
               name="ProfileScreen" 
               component={ProfileScreen} 
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
            <Stack.Screen 
               name="ProfileDetailScreen" 
               component={ProfileDetailScreen} 
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
            <Stack.Screen 
               name="UserProfile" 
               component={UserProfile} 
               options={({ navigation }) => ({
                  title: 'UserProfile Details',
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
               name="PaymentScreen" 
               component={PaymentScreen} 
               options={({ navigation }) => ({
                  title: 'Payment',
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
               name="SettingsScreen" 
               component={SettingsScreen} 
               options={({ navigation }) => ({
                  title: 'Payment',
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
               name="CustomerReceiptScreen" 
               component={CustomerReceiptScreen} 
               options={({ navigation }) => ({
                  title: 'Print Receipt',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                     <Icon name="location-history" size={28} onPress={() => navigation.navigate("TransactionHistoryScreen")} />

                  ),
               })} 
         />
            <Stack.Screen 
               name="TransactionHistoryScreen" 
               component={TransactionHistoryScreen} 
               options={({ navigation }) => ({
                  title: 'Transaction History',
                  headerTitleStyle: styles.headerTitle,
                  headerLeft: () => (
                    
                     <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

                  ),
                  headerRight: () => (
                     
                     <Icon name="notifications" size={28} onPress={() => navigation.navigate("CustomerReceiptScreen")} />

                  ),
               })} 
         />
         <Stack.Screen 
            name="TransactionHistoryDetailScreen" 
            component={TransactionHistoryDetailScreen} 
            options={({ navigation }) => ({
               title: 'Transaction History',
               headerTitleStyle: styles.headerTitle,
               headerLeft: () => (
                  
                  <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

               ),
               headerRight: () => (
                  
                  <Icon name="notifications" size={28} onPress={() => navigation.navigate("CustomerReceiptScreen")} />

               ),
            })} 
         />
         {/* <Stack.Screen 
            name="SalesReportScreen" 
            component={SalesReportScreen} 
            options={({ navigation }) => ({
               title: 'Sale Report',
               headerTitleStyle: styles.headerTitle,
               headerLeft: () => (
                  
                  <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

               ),
               headerRight: () => (
                  
                  <Icon name="notifications" size={28} onPress={() => navigation.navigate("CustomerReceiptScreen")} />

               ),
            })} 
         /> */}
         <Stack.Screen 
            name="SalesReportDetailScreen" 
            component={SalesReportDetailScreen} 
            options={({ navigation }) => ({
               title: 'Sales History',
               headerTitleStyle: styles.headerTitle,
               headerLeft: () => (
                  
                  <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />

               ),
               headerRight: () => (
                  
                  <Icon name="notifications" size={28} onPress={() => navigation.navigate("CustomerReceiptScreen")} />

               ),
            })} 
         />


    </Stack.Navigator>
  );
}




const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20,
      color:COLORS.primary
    }
  });