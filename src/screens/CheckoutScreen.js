
// import React, { useEffect, useState, useContext, useRef } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   Alert,
//   ScrollView,
//   SafeAreaView,
//   ActivityIndicator,
//   Platform,
//   ToastAndroid,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import { Paystack } from 'react-native-paystack-webview';
// import { CartContext } from '../CartContext';
// import COLORS from './../global/LandingColors';
// import { auth, db, firestore } from './../../firebase';
// // import {
// //   collection, addDoc, setDoc,doc, 
// //   onSnapshot, getDocs, query, where,
// //    orderBy 
// // } from 'firebase/firestore';
// import {
//   collection,
//   addDoc,
//   setDoc,
//   doc,
//   onSnapshot,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   limit // Add the missing import
// } from 'firebase/firestore';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { } from 'firebase/firestore';
// import { Ionicons, Entypo } from '@expo/vector-icons';


// const chipWidth = Dimensions.get('window').width / 3 - 16;
// const CheckoutScreen = ({navigation, route}) => {
//   const { items, emptyCart, getTotalAmount, getItemsCount, getTotalItems } = useContext(CartContext);
//   const [activeTab, setActiveTab] = useState('delivery');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const paystackWebViewRef = useRef(null);

  
  
//   const proceedToPayment = () => {
//     if (email === '' || address === '' || phone === '' || name === '') {
//       // One or more fields are empty, display an alert
//       Alert.alert('Error', 'Please fill in all the required fields');
//       return;
//     }
    
//     // All fields are filled, navigate to the payment screen
//     navigation.navigate('Payment');
//     setActiveTab('payment');
// };


// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const day = String(currentDate.getDate()).padStart(2, '0');

// const formattedDate = `${month}-${day}-${year}`;
//   useEffect(() => {
//     const user = auth.currentUser;
//     if (user) {
//       const userDocRef = doc(db, 'users', user.uid);
//       const unsubscribe = onSnapshot(userDocRef, (doc) => {
//         if (doc.exists()) {
//           const userData = doc.data();
//           setEmail(userData.email);
//           setPhone(userData.phone);
//           setName(userData.name);
//         }
//       });

//       return () => unsubscribe();
//     }
//   }, []);


//   const handlePaymentSuccess = async (response) => {
//     console.log('Payment successful:', response);
//     emptyCart();
//     navigation.navigate('CustomerReceiptScreen', {
//       email: email,
//       address: address,
//       phone: phone,
//       name: name,
//       items: items,
//       totalAmount: getTotalAmount().toFixed(2),
//       paymentStatus: 'Success', // Set the appropriate payment status here
//     });

//     ToastAndroid.show('Payment successful!', ToastAndroid.SHORT);
  
//     const checkoutDetails = {
//       email,
//       address,
//       phone,
//       name,
//       items: items.map(item => ({
//         name: item.product.name,
//         quantity: item.qty,
//       })),
//       totalAmount: getTotalAmount().toFixed(2),
//       date: formattedDate,
//       paymentStatus: 'success', // Add payment status
//     };
  
//     try {
//       const docRef = await addDoc(collection(firestore, 'checkouts'), checkoutDetails);
//       console.log('Checkout details saved with ID:', docRef.id);
//     } catch (error) {
//       console.error('Error saving checkout details:', error);
//     }
//   };
  
//   const handlePaymentError = async (error) => {
//     console.log('Payment error:', error);
//     navigation.navigate('CustomerReceiptScreen', {
//       email: email,
//       address: address,
//       phone: phone,
//       name: name,
//       items: items,
//       totalAmount: getTotalAmount().toFixed(2),
//       paymentStatus: 'error', // Set the appropriate payment status here
//     });
//     emptyCart();
//     ToastAndroid.show('Payment failed. Please try again.', ToastAndroid.SHORT);
  
//     const checkoutDetails = {
//       email,
//       address,
//       phone,
//       name,
//       items: items.map(item => ({
//         name: item.product.name,
//         quantity: item.qty,
//       })),
//       totalAmount: getTotalAmount().toFixed(2),
//       date: formattedDate,
//       paymentStatus: 'error', // Add payment status
//     };
  
//     try {
//       const docRef = await addDoc(collection(firestore, 'checkouts'), checkoutDetails);
//       console.log('Checkout details saved with ID:', docRef.id);
//     } catch (error) {
//       console.error('Error saving checkout details:', error);
//     }
//   };
  
//   const handlePaymentCancel = async () => {
//     console.log('Payment cancelled');
//     emptyCart();
//     navigation.navigate('CustomerReceiptScreen', {
//       email: email,
//       address: address,
//       phone: phone,
//       name: name,
//       items: items,
//       totalAmount: getTotalAmount().toFixed(2),
//       paymentStatus: 'cancelled', // Set the appropriate payment status here
//     });
//     ToastAndroid.show('Payment cancelled.', ToastAndroid.SHORT);
  
//     const checkoutDetails = {
//       email,
//       address,
//       phone,
//       name,
//       items: items.map(item => ({
//         name: item.product.name,
//         quantity: item.qty,
//       })),
//       totalAmount: getTotalAmount().toFixed(2),
//       date:formattedDate,
//       paymentStatus: 'cancelled', // Add payment status
//     };
  
//     try {
//       const docRef = await addDoc(collection(firestore, 'checkouts'), checkoutDetails);
//       console.log('Checkout details saved with ID:', docRef.id);
//     } catch (error) {
//       console.error('Error saving checkout details:', error);
//     }
//   };

//   // const currentDate = new Date();
//   const oneDayAgo = new Date(currentDate);
//   oneDayAgo.setDate(oneDayAgo.getDate() - 1);
//   const twoDaysAgo = new Date(currentDate);
//   twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

//   const oneDayAgoString = oneDayAgo.toISOString().split('T')[0];
//   const twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

//   const [selectedDay, setSelectedDay] = useState('today');
//   const [transactions, setTransactions] = useState([]);
//   const [filteredTransactions, setFilteredTransactions] = useState([]);

//   // useEffect(() => {
    
//   //   const fetchTransactions = async () => {
//   //     try {
//   //       const transactionsRef = collection(firestore, 'checkouts');
//   //       let transactionsQuery = transactionsRef;
//   //       let selectedDate;
  
//   //       if (selectedDay === 'today') {
//   //         selectedDate = new Date(); // Current date
//   //       } else if (selectedDay === 'oneDayAgo') {
//   //         selectedDate = new Date();
//   //         selectedDate.setDate(selectedDate.getDate() - 1); // One day ago
//   //       } else if (selectedDay === 'twoDaysAgo') {
//   //         selectedDate = new Date();
//   //         selectedDate.setDate(selectedDate.getDate() - 2); // Two days ago
//   //       }
  
//   //       if (selectedDate) {
//   //         transactionsQuery = query(transactionsRef, where('date', '==', selectedDate));
//   //       }
  
//   //       const transactionsSnapshot = await getDocs(transactionsQuery);
//   //       const transactionData = transactionsSnapshot.docs.map((doc) => doc.data());
//   //       setTransactions(transactionData);
//   //     } catch (error) {
//   //       console.error('Error fetching transactions:', error);
//   //     }
//   //   };


//   //   fetchTransactions();
//   // }, [selectedDay]);

//   // useEffect(() => {
//   //   if (selectedDay === '') {
//   //     setFilteredTransactions(transactions);
//   //   } else {
//   //     const filtered = transactions.filter(transaction => transaction.date === selectedDay);
//   //     setFilteredTransactions(filtered);
//   //   }
//   // }, [selectedDay, transactions]);

//   // const handleDaySelection = (day) => {
//   //   setSelectedDay(day);
//   // };


//   // const handleFilter = (day) => {
//   //   setSelectedDay(day);
//   // };

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const user = auth.currentUser;

//       if (user) {
//         const { email, uid } = user;
//         const checkoutsRef = collection(db, 'checkouts');
//         const q = query(
//           checkoutsRef,
//           where('email', '==', email),
//           orderBy('date', 'desc'),
//           orderBy('transaction', 'desc'),
//           limit(10)
//         );

//         try {
//           const snapshot = await getDocs(q);
//           const records = snapshot.docs.map((doc) => doc.data());
//           console.log('Fetched records:', records);
//         } catch (error) {
//           console.error('Error fetching records:', error);
//         }
//       }
//     };

//     fetchTransactions();
//   }, []);


//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item, })}>
//       <View style={styles.rowContainer}>
//       <View style={styles.columnContainer}>
//       <Text style={styles.columnText}>
//            Date:
//           </Text>
//           <Text style={styles.columnText}>{item.date}</Text>
         
//         </View>
      
//       <View style={styles.transactionContainer}>
//             <Text style={styles.columnText}>
//             Amount:
//           </Text>
//             <Text style={styles.columnText}>
//            {item.totalAmount}
//           </Text>
//       </View>
//       <View style={styles.columnContainer}>
//       <Text style={styles.columnText}>
//             Status
//              <Ionicons name="md-chevron-forward-circle-outline" size={14} color="#000" />
//           </Text>
//           <Text style={[styles.columnText, styles.greenText]}>
//              {item.paymentStatus}
//           </Text>
          
//       </View>
//     </View>

     
// </TouchableOpacity>
//     );
//   };




//   return (
//     <View style={styles.container}>
//       <View style={styles.navBar}>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             activeTab === 'delivery' && styles.activeTabButton,
//             activeTab === 'delivery' && styles.activeTabText,
//           ]}
//           onPress={() => handleTabChange('delivery')}
//         >
//           <Text style={[styles.tabText, activeTab === 'delivery' && styles.activeTabText]}>
//             Delivery Information
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             activeTab === 'payment' && styles.activeTabButton,
//             activeTab === 'payment' && styles.activeTabText,
//           ]}
//           onPress={() => handleTabChange('payment')}
//         >
//           <Text style={[styles.tabText, activeTab === 'payment' && styles.activeTabText]}>
//             Payment
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             activeTab === 'summary' && styles.activeTabButton,
//             activeTab === 'summary' && styles.activeTabText,
//           ]}
//           onPress={() => handleTabChange('summary')}
//         >
//           <Text style={[styles.tabText, activeTab === 'summary' && styles.activeTabText]}>
//             Summary
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {activeTab === 'delivery' && (
//         <DeliveryInformationScreen
//           email={email}
//           address={address}
//           phone={phone}
//           name={name}
//           setEmail={setEmail}
//           setAddress={setAddress}
//           setPhone={setPhone}
//           setName={setName}
//           proceedToPayment={proceedToPayment}
//         />
//       )}
//       {activeTab === 'payment' &&
//         <PaymentScreen />}
    
//       {activeTab === 'summary' && <SummaryScreen />}
//     </View>
//   );
// };

// const DeliveryInformationScreen = ({
//   email,
//   address,
//   phone,
//   name,
//   setEmail,
//   setAddress,
//   setPhone,
//   setName,
//   proceedToPayment,
// }) => {
//   return (
//     <View style={styles.screenContainer}>
//       <Text style={styles.screenText}>Delivery Information Screen</Text>
//       <View style={styles.cardContainer}>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//           placeholder="Name"
//         />
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Email"
//         />
//         <TextInput
//           style={styles.input}
//           value={phone}
//           onChangeText={setPhone}
//           placeholder="Phone"
//         />
//         <TextInput
//           style={styles.input}
//           value={address}
//           onChangeText={setAddress}
//           placeholder="Address"
//         />
//         <TouchableOpacity style={styles.proceedButton} onPress={proceedToPayment}>
//           <Text style={styles.proceedButtonText}>Proceed</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


// function listItems() {
//   const totalPrice = items.reduce((sum, item) => sum + item.qty * item.product.price, 0).toFixed(2);

//   return (

//     <FlatList
//     data={items}
//     renderItem={({ item }) => (
//         <View style={styles.itemContainer}>
//           <Text style={styles.itemName}> {item.product.name} </Text>
//           <Text style={styles.itemQuantity}>Quantity: {item.qty} </Text>
//         </View>)}
//     keyExtractor={(item) => item.id.toString()}
//     numColumns={2}
//     ListFooterComponent={<Text style={styles.totalPrice}>Total Price: &#8358;{totalPrice}</Text>}
//   />
//   );
// }






// const SummaryScreen = () => {
//   return (
//     <View style={styles.screenContainer}>
//       <Text style={styles.screenText}>Summary Screen</Text>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },
//   navBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   activeTabButton: {
//     backgroundColor: '#2B60DA',
//   },
//   tabText: {
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   activeTabText: {
//     color: '#fff',
//   },
//   tabContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   tabIndicator: {
//     backgroundColor: '#2B60DA',
//     height: 3,
//   },
//   screenContainer: {
//     flex: 1,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   screenText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   cardContainer: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     padding: 20,
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   proceedButton: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 5,
//     borderColor: COLORS.primary,
//     backgroundColor: '#CCC0',
//     fontWeight: '900',

//   },
//   proceedButtonText: {
//     color:COLORS.primary,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

//   navBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     backgroundColor: COLORS.white,
//     elevation: 2, // Add elevation for a shadow effect on Android
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   activeTabButton: {
//     backgroundColor: COLORS.primary,
//   },
//   tabText: {
//     fontSize: 14, // Adjust the font size as needed
//     fontWeight: 'bold',
//     color: COLORS.light,
//   },
//   activeTabText: {
//     color: COLORS.white,
//   },
//   cardContainer: {
//     backgroundColor: COLORS.white,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     width: '100%',
//     marginTop: 10,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
  
  
// });

// export default CheckoutScreen;




import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Platform,
  ToastAndroid,
  FlatList,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView ,
} from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
import { CartContext } from '../CartContext';
import COLORS from './../global/LandingColors';
import { auth, db, firestore } from './../../firebase';
import {
  collection, addDoc, setDoc,doc, 
  onSnapshot, getDocs, query, where,
   orderBy 
} from 'firebase/firestore';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { } from 'firebase/firestore';
import { Ionicons, Entypo } from '@expo/vector-icons';


const chipWidth = Dimensions.get('window').width / 3 - 16;

const Tab = createMaterialTopTabNavigator();
const tabBarOptions = {
  tabBarActiveTintColor: '#FFFFFF',
  tabBarLabelStyle: {
    fontWeight: '900',
  },
  tabBarIndicatorStyle: {
    height: 3,
  },
  tabBarStyle: {
    backgroundColor: '#205CE5',
  },
};



export default function CheckoutScreen({ route, navigation }) {
  const { items, emptyCart, getTotalAmount, getItemsCount, getTotalItems } = useContext(CartContext);

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const paystackWebViewRef = useRef(null);


const handleProceed = () => {
  if (email === '' || address === '' || phone === '' || name === '') {
    // One or more fields are empty, display an alert
    Alert.alert('Error', 'Please fill in all the required fields');
    return;
  }

  // All fields are filled, navigate to the payment screen
  navigation.navigate('Payment');
};

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${month}-${day}-${year}`;
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setEmail(userData.email);
          setPhone(userData.phone);
          setName(userData.name);
        }
      });

      return () => unsubscribe();
    }
  }, []);

  const handlePaymentSuccess = async (response) => {
    console.log('Payment successful:', response);
    emptyCart();
    navigation.navigate('CustomerReceiptScreen', {
      email: email,
      address: address,
      phone: phone,
      name: name,
      items: items,
      totalAmount: getTotalAmount().toFixed(2),
      paymentStatus: 'Success', // Set the appropriate payment status here
    });

    ToastAndroid.show('Payment successful!', ToastAndroid.SHORT);
  
    const checkoutDetails = {
      email,
      address,
      phone,
      name,
      items: items.map(item => ({
        name: item.product.name,
        quantity: item.qty,
      })),
      totalAmount: getTotalAmount().toFixed(2),
      date: formattedDate,
      paymentStatus: 'success', // Add payment status
    };
  
    try {
      const docRef = await addDoc(collection(firestore, 'checkouts'), checkoutDetails);
      console.log('Checkout details saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving checkout details:', error);
    }
  };
  
  const handlePaymentError = async (error) => {
    console.log('Payment error:', error);
    navigation.navigate('CustomerReceiptScreen', {
      email: email,
      address: address,
      phone: phone,
      name: name,
      items: items,
      totalAmount: getTotalAmount().toFixed(2),
      paymentStatus: 'error', // Set the appropriate payment status here
    });
    emptyCart();
    ToastAndroid.show('Payment failed. Please try again.', ToastAndroid.SHORT);
  
    const checkoutDetails = {
      email,
      address,
      phone,
      name,
      items: items.map(item => ({
        name: item.product.name,
        quantity: item.qty,
      })),
      totalAmount: getTotalAmount().toFixed(2),
      date: formattedDate,
      paymentStatus: 'error', // Add payment status
    };
  
    try {
      const docRef = await addDoc(collection(firestore, 'checkouts'), checkoutDetails);
      console.log('Checkout details saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving checkout details:', error);
    }
  };
  
  const handlePaymentCancel = async () => {
    console.log('Payment cancelled');
    emptyCart();
    navigation.navigate('CustomerReceiptScreen', {
      email: email,
      address: address,
      phone: phone,
      name: name,
      items: items,
      totalAmount: getTotalAmount().toFixed(2),
      paymentStatus: 'cancelled', // Set the appropriate payment status here
    });
    ToastAndroid.show('Payment cancelled.', ToastAndroid.SHORT);
  
    const checkoutDetails = {
      email,
      address,
      phone,
      name,
      items: items.map(item => ({
        name: item.product.name,
        quantity: item.qty,
      })),
      totalAmount: getTotalAmount().toFixed(2),
      date:formattedDate,
      paymentStatus: 'cancelled', // Add payment status
    };
  
    try {
      const docRef = await addDoc(collection(firestore, 'checkouts'), checkoutDetails);
      console.log('Checkout details saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving checkout details:', error);
    }
  };

  // const currentDate = new Date();
  const oneDayAgo = new Date(currentDate);
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const twoDaysAgo = new Date(currentDate);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const oneDayAgoString = oneDayAgo.toISOString().split('T')[0];
  const twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

  const [selectedDay, setSelectedDay] = useState('today');
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    
    const fetchTransactions = async () => {
      try {
        const transactionsRef = collection(firestore, 'checkouts');
        let transactionsQuery = transactionsRef;
        let selectedDate;
  
        if (selectedDay === 'today') {
          selectedDate = new Date(); // Current date
        } else if (selectedDay === 'oneDayAgo') {
          selectedDate = new Date();
          selectedDate.setDate(selectedDate.getDate() - 1); // One day ago
        } else if (selectedDay === 'twoDaysAgo') {
          selectedDate = new Date();
          selectedDate.setDate(selectedDate.getDate() - 2); // Two days ago
        }
  
        if (selectedDate) {
          transactionsQuery = query(transactionsRef, where('date', '==', selectedDate));
        }
  
        const transactionsSnapshot = await getDocs(transactionsQuery);
        const transactionData = transactionsSnapshot.docs.map((doc) => doc.data());
        setTransactions(transactionData);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };


    fetchTransactions();
  }, [selectedDay]);

  useEffect(() => {
    if (selectedDay === '') {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(transaction => transaction.date === selectedDay);
      setFilteredTransactions(filtered);
    }
  }, [selectedDay, transactions]);

  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };


  const handleFilter = (day) => {
    setSelectedDay(day);
  };

  
const renderTransactionItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('TransactionHistoryDetailScreen', {
          transaction: item,
        })
      }
    >
      <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
          <Text style={styles.columnText}>Date:</Text>
          <Text style={styles.columnText}>{item.date}</Text>
        </View>

        <View style={styles.transactionContainer}>
          {item.items.map((item, index) => (
            <View key={index} style={styles.columnContainer}>
              <Text style={styles.transactionText}>{item.name}</Text>
              {/* <Text style={styles.transactionText}>
                Quantity: {item.quantity}
              </Text> */}
            </View>
          ))}
          <Text style={styles.columnText}>Amount:</Text>
          <Text style={styles.columnText}>{item.totalAmount}</Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.columnText}>
            Status{' '}
            <Ionicons
              name="md-chevron-forward-circle-outline"
              size={14}
              color="#000"
            />
          </Text>
          <Text style={[styles.columnText, styles.greenText]}>
            {item.paymentStatus}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


// const DeliveryInformationScreen = ({ setEmail, setAddress, setPhone, setName }) => {
//   return (
//     // <KeyboardAvoidingView  style={{ flex: 1 }} behavior="padding">
//           <SafeAreaView style={styles.container}>

//       <View style={styles.header}>
//         <Text style={styles.headerText}>Checkout</Text>
//       </View>
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
//       >

// <View style={styles.card}>
//   <TextInput
//     style={styles.input}
//     placeholder="Email"
//     value={email}
//     onChangeText={setEmail}
//   />
//   <TextInput
//     style={styles.input}
//     placeholder="Address"
//     value={address}
//     onChangeText={setAddress}
//   />
//   <TextInput
//     style={styles.input}
//     placeholder="Phone"
//     value={phone}
//     onChangeText={setPhone}
//   />
//   <TextInput
//     style={styles.input}
//     placeholder="Name"
//     value={name}
//     onChangeText={setName}
//   />
// </View>

// <View style={styles.buttonContainer}>
//   <TouchableOpacity
//     style={styles.placeOrderButton}
//     onPress={handleProceed}
//     disabled={isLoading}
//   >
//     <Text style={styles.buttonText}>Proceed</Text>
//   </TouchableOpacity>
// </View>
//       {/* </ScrollView> */}
// </KeyboardAvoidingView>
//   </SafeAreaView>
//   );
// };

const DeliveryInformationScreen = ({ setEmail, setAddress, setPhone, setName }) => {
  return (
    <View style={{alignContent:'center', flex:1, justifyContent:'center'}}>
      <View style={{marginVertical:20, alignItems:'center'}}>
        <Text style={{fontWeight:'900', color:COLORS.primary}}>Delivery Information</Text>
      </View>
   
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.placeOrderButton}
            onPress={handleProceed}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};


const SummaryScreen = ({ navigation, getTotalAmount, items, emptyCart }) => {
  return (
    <View style={styles.tabContainer}>
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#FFF', marginVertical:10, }}>
    <TouchableOpacity
          style={[ selectedDay === '' && styles.filterButtonSelected]}
          onPress={() => handleDaySelection('')}
        >
          <Text style={{color:COLORS.primary, fontWeight:'900'}}>All Trans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ selectedDay === oneDayAgoString && styles.filterButtonSelected]}
          onPress={() => handleDaySelection(oneDayAgoString)}
        >
          <Text style={{color:COLORS.primary, fontWeight:'900'}}>One Day Ago</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={[styles.filterButton, selectedDay === twoDaysAgoString && styles.filterButtonSelected]}
          style={[ selectedDay === twoDaysAgoString && styles.filterButtonSelected]}
          onPress={() => handleDaySelection(twoDaysAgoString)}
        >
          <Text style={{color:COLORS.primary, fontWeight:'900'}}>TwoDays Ago</Text>
        </TouchableOpacity>
      </View>
     
      <FlatList
        data={filteredTransactions}
        keyExtractor={item => item.id}
        renderItem={renderTransactionItem}
      />

    </View>
    </View>
  );
};

  const DeliveryInformationComponent = () => (
    <DeliveryInformationScreen setEmail={setEmail} setAddress={setAddress} setPhone={setPhone} setName={setName} />
  );

  function listItems() {
        const totalPrice = items.reduce((sum, item) => sum + item.qty * item.product.price, 0).toFixed(2);
    
        return (

          <FlatList
          data={items}
          renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemName}> {item.product.name} </Text>
                <Text style={styles.itemQuantity}>Quantity: {item.qty} </Text>
              </View>)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          ListFooterComponent={<Text style={styles.totalPrice}>Total Price: &#8358;{totalPrice}</Text>}
        />
        );
      }
    

  const PaymentScreen = () => (
    <View style={styles.container}>
    <View style={styles.tabContainer}>
    

      <Text style={styles.tabText}>Click Payment Button To complete Order</Text>
     

    <View style={styles.amountContainer}>
      {/* <View style={styles.container}> */}
        <View style={styles.card}> 
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.lineText}> {listItems()}</Text>
            <View style={styles.line} />
          </View>
        </View>
      {/* </View> */}
    </View>
   
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={() => paystackWebViewRef.current.startTransaction()}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
      {isLoading && (
        <ActivityIndicator size="small" color="#0000ff" style={styles.loadingIndicator} />
      )}
    </View>

    <Paystack
      paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
      billingPhoneNumber={phone}
      billingName={email}
      amount={getTotalAmount().toFixed(2)}
      billingEmail={email}
      refNumber={new Date().getTime().toString()}
      onCancel={handlePaymentCancel}
      onSuccess={handlePaymentSuccess}
      onError={handlePaymentError}
      autoStart={false}
      ref={paystackWebViewRef}
      style={styles.loadingIndicator}
      ButtonText="Pay Now"
      showPayButton={true}
      showPayOption={true}
      channels={['card', 'bank', 'ussd']}
      currency="NGN"
      activityIndicatorColor="green"
      SafeAreaViewContainer={{ marginTop: 25 }}
      SafeAreaViewContainerModal={{ marginTop: 25 }}
    />
  </View>
  </View>
    );

  const SummaryComponent = () => (
    <SummaryScreen navigation={navigation} getTotalAmount={getTotalAmount} items={items} emptyCart={emptyCart} />
  );

  return (

    <SafeAreaView style={styles.container}>
      <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen name="Delivery Information" component={DeliveryInformationComponent} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Summary" component={SummaryComponent} />
    </Tab.Navigator>
    </SafeAreaView>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2B60DA',
    padding: 10,
  },
  tabContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFCFF',
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 24,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  amountContainer:{
    flex: 1,
    backgroundColor: '#2B60DA',
    borderRadius: 15,
    padding: 2,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  placeOrderButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabIndicator: {
    backgroundColor: COLORS.tabIndicator,
    height: 3,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#cfcccc',
  },
  filterButtonText: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#cfcccc',
  },
  filterButtonSelected: {
    color: '#2B60DA',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: COLORS.primary,
    backgroundColor: '#CCC0',
    fontWeight: '900',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardDate: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardAmount: {
    fontSize: 16,
  },
  cardBody: {},
  cardDescription: {
    fontSize: 14,
    color: COLORS.light,
    fontWeight: '900',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  lineText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionContainer: {
    padding: 10,
  },
  transactionText: {
    color: COLORS.dark,
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
  },
  columnText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#333333',
  },
  transactionContainer: {
    flex: 2,
    marginLeft: 10,
  },
  transactionText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#ccc',
  },
  greenText: {
    color: '#2B60DA',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  placeOrderButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
