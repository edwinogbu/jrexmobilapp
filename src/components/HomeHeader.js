// // import React from 'react'
// import React, { useContext } from 'react';
// import { CartContext } from '../CartContext';

// import { View, Text, StyleSheet } from 'react-native';
// import {Icon, withBadge} from 'react-native-elements'
// import {colors, parameters} from '../global/styles'
// import COLORS from './../global/LandingColors';

// export default function HomeHeader({navigation}) {
//     const { getItemsCount } = useContext(CartContext);
//     const count = getItemsCount();
//     const BadgeIcon = withBadge(count)(Icon);
  
//   return (
//     <View style={styles.header}>
//       <View style={{alignItems:"center", justifyContent:"center", marginLeft:15}}>
//         <Icon 
//           type='material-community'
//           name ="menu"
//           color={colors.cardbackground}
//           size = {32}
//           onPress ={()=>{navigation.toggleDrawer()}}
        
//         />
//       </View>
//       <View style={{alignItems:"center", justifyContent:"center"}}>
//         <Text style={{color:colors.cardbackground, fontSize:18, fontWeight:'bold'}}>Call To Order: 08173330147</Text>
//       </View>
//       <View style={{alignContent:"center", justifyContent:"center", marginRight:15}}>
//       <BadgeIcon
//           type="material-community"
//           name="cart"
//           size={35}
//           color={colors.cardbackground}
//           onPress={() => {
//             navigation.navigate('Cart');
//           }}
//         />

// <View style={{  }}>
       
//         <Icon 
//           name="location-history" 
//           size={28} 
//           onPress={() => navigation.navigate("TransactionHistoryScreen")} 
//           style={{ marginLeft: 10 }}
//         />
//       </View>
//       </View>
//     </View>
//   )
// }

// const styles =StyleSheet.create({
//     header:{
//         flexDirection: 'row',
//         backgroundColor: COLORS.primary,
//         height:parameters.headerHeight,
//         justifyContent:"space-between"
//     }
// })


// import React, { useContext } from 'react';
// import { CartContext } from '../CartContext';
// import { View, Text, StyleSheet } from 'react-native';
// import { Icon, withBadge } from 'react-native-elements';
// import { colors, parameters } from '../global/styles';
// import COLORS from './../global/LandingColors';

// export default function HomeHeader({ navigation }) {
//   const { getItemsCount } = useContext(CartContext);
//   const count = getItemsCount();
//   const BadgeIcon = withBadge(count)(Icon);

//   return (
//     <View style={styles.header}>
//       <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
//         <Icon
//           type='material-community'
//           name="menu"
//           color={colors.cardbackground}
//           size={32}
//           onPress={() => { navigation.toggleDrawer() }}
//         />
//       </View>
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <Text style={{ color: colors.cardbackground, fontSize: 18, fontWeight: 'bold' }}>Order: 08173330147</Text>
//       </View>
//       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
//         <BadgeIcon
//           type="material-community"
//           name="cart"
//           size={35}
//           color={colors.cardbackground}
//           onPress={() => {
//             navigation.navigate('Cart');
//           }}
//         />
//         <Icon
//           name="notification"
//           size={28}
//           onPress={() => navigation.navigate("TransactionHistoryScreen")}
//           style={{ marginLeft: 10 }}
//           color={colors.cardbackground}
//         />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.primary,
//     height: parameters.headerHeight,
//     justifyContent: "space-between"
//   }
// });

// import React, { useContext } from 'react';
// import { CartContext } from '../CartContext';
// import { View, Text, StyleSheet } from 'react-native';
// import { Icon, withBadge } from 'react-native-elements';
// import { colors, parameters } from '../global/styles';
// import COLORS from './../global/LandingColors';

// export default function HomeHeader({ navigation }) {
//   const { getItemsCount } = useContext(CartContext);
//   const count = getItemsCount();
//   const BadgeIcon = withBadge(count)(Icon);
//   const notificationCount = 2; // Replace with your actual notification count
//   const NotificationBadgeIcon = withBadge(notificationCount)(Icon);

//   return (
//     <View style={styles.header}>
//       <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
//         <Icon
//           type='material-community'
//           name="menu"
//           color={colors.cardbackground}
//           size={32}
//           onPress={() => { navigation.toggleDrawer() }}
//         />
//       </View>
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <Text style={{ color: colors.cardbackground, fontSize: 18, fontWeight: 'bold' }}>Order: 08173330147</Text>
//       </View>
//       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
//         <BadgeIcon
//           type="material-community"
//           name="cart"
//           size={35}
//           color={colors.cardbackground}
//           onPress={() => {
//             navigation.navigate('Cart');
//           }}
//         />
//        <NotificationBadgeIcon
//           name="bell" // Replace with the appropriate icon name
//           type="material-community"
//           size={28}
//           onPress={() => navigation.navigate("TransactionHistoryScreen")}
//           style={{ marginLeft: 10 }}
//           color={colors.cardbackground}
//         />

//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.primary,
//     height: parameters.headerHeight,
//     justifyContent: "space-between"
//   }
// });


// import React, { useContext } from 'react';
// import { CartContext } from '../CartContext';
// import { View, Text, StyleSheet } from 'react-native';
// import { Icon, withBadge } from 'react-native-elements';
// import { colors, parameters } from '../global/styles';
// import COLORS from './../global/LandingColors';

// export default function HomeHeader({ navigation }) {
//   const { getItemsCount } = useContext(CartContext);
//   const count = getItemsCount();
//   const BadgeIcon = withBadge(count)(Icon);
//   const notificationCount = 2; // Replace with your actual notification count
//   const NotificationBadgeIcon = withBadge(notificationCount)(Icon);

//   return (
//     <View style={styles.header}>
//       <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
//         <Icon
//           type='material-community'
//           name="menu"
//           color={colors.cardbackground}
//           size={32}
//           onPress={() => { navigation.toggleDrawer() }}
//         />
//       </View>
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <Text style={{ color: colors.cardbackground, fontSize: 18, fontWeight: 'bold' }}>Order: 08173330147</Text>
//       </View>
//       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
//         <BadgeIcon
//           type="material-community"
//           name="cart"
//           size={35}
//           color={colors.cardbackground}
//           onPress={() => {
//             navigation.navigate('Cart');
//           }}
//         />
//         <View style={{ position: "relative" }}>
//           <NotificationBadgeIcon
//             name="bell" // Replace with the appropriate icon name
//             type="material-community"
//             size={28}
//             onPress={() => navigation.navigate("TransactionHistoryScreen")}
//             style={{ marginLeft: 10 }}
//             color={colors.cardbackground}
//           />
//           {notificationCount > 0 && (
//             <View style={styles.notificationCount}>
//               <Text style={styles.notificationText}>{notificationCount}</Text>
//             </View>
//           )}
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.primary,
//     height: parameters.headerHeight,
//     justifyContent: "space-between"
//   },
//   notificationCount: {
//     position: "absolute",
//     top: -8,
//     right: -8,
//     backgroundColor: colors.notificationBackground,
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   notificationText: {
//     color: colors.notificationText,
//     fontSize: 12,
//     fontWeight: "bold"
//   }
// });

// import React, { useContext, useEffect, useState } from 'react';
// import { CartContext } from '../CartContext';
// import { View, Text, StyleSheet } from 'react-native';
// import { Icon, withBadge } from 'react-native-elements';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from './../../firebase';
// import { colors, parameters } from '../global/styles';
// import COLORS from './../global/LandingColors';

// export default function HomeHeader({ navigation }) {
//   const { getItemsCount } = useContext(CartContext);
//   const count = getItemsCount();
//   const BadgeIcon = withBadge(count)(Icon);
//   const [notificationCount, setNotificationCount] = useState(0);
//   const NotificationBadgeIcon = withBadge(notificationCount)(Icon);

//   useEffect(() => {
//     const fetchNotificationCount = async () => {
//       try {
//         const checkoutsRef = collection(firestore, 'checkouts');
//         const checkoutsSnapshot = await getDocs(checkoutsRef);
//         const checkoutsCount = checkoutsSnapshot.size;
//         setNotificationCount(checkoutsCount);
//       } catch (error) {
//         console.error('Error fetching notification count:', error);
//       }
//     };

//     fetchNotificationCount();
//   }, []);

//   return (
//     <View style={styles.header}>
//       <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
//         <Icon
//           type='material-community'
//           name="menu"
//           color={colors.cardbackground}
//           size={32}
//           onPress={() => { navigation.toggleDrawer() }}
//         />
//       </View>
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <Text style={{ color: colors.cardbackground, fontSize: 18, fontWeight: 'bold' }}>Order: 08173330147</Text>
//       </View>
//       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
//         <BadgeIcon
//           type="material-community"
//           name="cart"
//           size={35}
//           color={colors.cardbackground}
//           onPress={() => {
//             navigation.navigate('Cart');
//           }}
//         />
//         <View style={{ position: "relative" }}>
//           <NotificationBadgeIcon
//             name="bell" // Replace with the appropriate icon name
//             type="material-community"
//             size={28}
//             onPress={() => navigation.navigate("TransactionHistoryScreen")}
//             style={{ marginLeft: 10 }}
//             color={colors.cardbackground}
//           />
//           {notificationCount > 0 && (
//             <View style={styles.notificationCount}>
//               <Text style={styles.notificationText}>{notificationCount}</Text>
//             </View>
//           )}
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.primary,
//     height: parameters.headerHeight,
//     justifyContent: "space-between"
//   },
//   notificationCount: {
//     position: "absolute",
//     top: -8,
//     right: -8,
//     backgroundColor: colors.notificationBackground,
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   notificationText: {
//     color: colors.notificationText,
//     fontSize: 12,
//     fontWeight: "bold"
//   }
// });

import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { firestore } from './../../firebase';
import { colors, parameters } from '../global/styles';
import COLORS from './../global/LandingColors';

export default function HomeHeader({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  const count = getItemsCount();
  const BadgeIcon = withBadge(count)(Icon);
  const [notificationCount, setNotificationCount] = useState(0);
  const NotificationBadgeIcon = withBadge(notificationCount)(Icon);

  useEffect(() => {
    const fetchNotificationCount = async () => {
      try {
        const checkoutsRef = collection(firestore, 'checkouts');
        const checkoutsSnapshot = await getDocs(checkoutsRef);
        const checkoutsCount = checkoutsSnapshot.size;
        setNotificationCount(checkoutsCount);
      } catch (error) {
        console.error('Error fetching notification count:', error);
      }
    };

    const unsubscribe = onSnapshot(collection(firestore, 'checkouts'), () => {
      fetchNotificationCount();
    });

    return () => unsubscribe();
  }, []);

  const handleTransactionHistoryPress = () => {
    setNotificationCount(0);
    navigation.navigate('TransactionHistoryScreen');
  };

  return (
    <View style={styles.header}>
      <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
        <Icon
          type='material-community'
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => { navigation.toggleDrawer() }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: colors.cardbackground, fontSize: 18, fontWeight: 'bold' }}>Order: 08173330147</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 15 }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardbackground}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
        <View style={{ position: "relative" }}>
          <NotificationBadgeIcon
            name="bell" // Replace with the appropriate icon name
            type="material-community"
            size={28}
            onPress={handleTransactionHistoryPress}
            style={{ marginLeft: 10 }}
            color={colors.cardbackground}
          />
          {notificationCount > 0 && (
            <View style={styles.notificationCount}>
              <Text style={styles.notificationText}>{notificationCount}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: parameters.headerHeight,
    justifyContent: "space-between"
  },
  notificationCount: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: colors.notificationBackground,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  notificationText: {
    color: colors.notificationText,
    fontSize: 12,
    fontWeight: "bold"
  }
});
