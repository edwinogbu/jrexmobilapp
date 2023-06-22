import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../CartContext';

const ConfirmationScreen = ({ navigation }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleFinish = () => {
    clearCart();
    navigation.navigate('Home');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.subtitle}>Thank you for your purchase!</Text>
      <Text style={styles.orderDetails}>Order Details:</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.itemList}
      />
      <Button title="Finish" onPress={handleFinish} style={styles.finishButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  orderDetails: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemList: {
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555555',
  },
  finishButton: {
    marginTop: 20,
    width: 200,
  },
});

export default ConfirmationScreen;




// import React, { useContext } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import { CartContext } from '../path/to/CartContext';

// const ConfirmationScreen = ({ navigation }) => {
//   const { cartItems, clearCart } = useContext(CartContext);

//   const handleFinish = () => {
//     clearCart();
//     navigation.navigate('Home');
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Confirmation</Text>
//       <Text style={styles.subtitle}>Thank you for your purchase!</Text>
//       <Text style={styles.orderDetails}>Order Details:</Text>
//       <FlatList
//         data={cartItems}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.itemList}
//       />
//       <Button title="Finish" onPress={handleFinish} style={styles.finishButton} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333333',
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#555555',
//   },
//   orderDetails: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333333',
//   },
//   itemList: {
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   itemQuantity: {
//     fontSize: 14,
//     color: '#777777',
//   },
//   finishButton: {
//     marginTop: 20,
//     width: '70%',
//     backgroundColor: '#2B60DA',
//   },
// });

// export default ConfirmationScreen;



// import React, { useContext } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import { CartContext } from '../path/to/CartContext';

// const ConfirmationScreen = ({ navigation }) => {
//   const { cartItems, clearCart } = useContext(CartContext);

//   const handleFinish = () => {
//     clearCart();
//     navigation.navigate('Home');
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Order Confirmation</Text>
//       </View>
//       <View style={styles.content}>
//         <Text style={styles.subtitle}>Thank you for your purchase!</Text>
//         <Text style={styles.orderDetails}>Order Details:</Text>
//         <FlatList
//           data={cartItems}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.itemList}
//         />
//         <Button title="Finish" onPress={handleFinish} style={styles.finishButton} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     backgroundColor: '#2B60DA',
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 20,
//     color: '#555555',
//   },
//   orderDetails: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333333',
//   },
//   itemList: {
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   itemQuantity: {
//     fontSize: 14,
//     color: '#777777',
//   },
//   finishButton: {
//     marginTop: 20,
//     width: '100%',
//     backgroundColor: '#FF9900',
//   },
// });

// export default ConfirmationScreen;
