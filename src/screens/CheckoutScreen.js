import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Platform,
  ToastAndroid,
  FlatList,
  Dimensions,
  TouchableOpacity,
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

const chipWidth = Dimensions.get('window').width / 3 - 16;

const Tab = createMaterialTopTabNavigator();

export default function CheckoutScreen({ route, navigation }) {
  // const { items, emptyCart, getTotalAmount } = useContext(CartContext);

  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  // const [phone, setPhone] = useState('');
  // const [name, setName] = useState('');
  // const paystackWebViewRef = useRef(null);
  const { items, emptyCart, getTotalAmount, getItemsCount, getTotalItems } = useContext(CartContext);

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const paystackWebViewRef = useRef(null);

  

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
    // const fetchTransactions = async () => {
    //   try {
    //     const transactionsRef = collection(firestore, 'checkouts');
    //     let transactionsQuery = transactionsRef;

    //     if (selectedDay === oneDayAgoString || selectedDay === twoDaysAgoString) {
    //       transactionsQuery = query(transactionsRef, where('date', '==', selectedDay));
    //     }

    //     const transactionsSnapshot = await getDocs(transactionsQuery);
    //     const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
    //     setTransactions(transactionData);
    //   } catch (error) {
    //     console.error('Error fetching transactions:', error);
    //   }
    // };

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

    // const fetchTransactions = async () => {
    //   try {
    //     const transactionsRef = collection(firestore, 'checkouts');
    //     let transactionsQuery = transactionsRef;
    
    //     // Add the user ID condition to the query
    //     transactionsQuery = query(transactionsRef, where('userId', '==', userId));
    
    //     if (selectedDay === oneDayAgoString || selectedDay === twoDaysAgoString) {
    //       transactionsQuery = query(transactionsQuery, where('date', '==', selectedDay));
    //     }
    
    //     // Order the query by the 'date' field in descending order
    //     transactionsQuery = orderBy(transactionsQuery, 'date', 'desc');
    
    //     const transactionsSnapshot = await getDocs(transactionsQuery);
    //     const transactionData = transactionsSnapshot.docs.map((doc) => doc.data());
    //     setTransactions(transactionData);
    //   } catch (error) {
    //     console.error('Error fetching transactions:', error);
    //   }
    // };
    
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
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item, })}>

         <View style={styles.line} />
        <View style={styles.cardHeader}>
          <Text style={styles.cardDate}>{item.date}</Text>
          <Text style={styles.cardAmount}> {item.totalAmount} </Text>
          <Text style={styles.cardDescription}> {item.paymentStatus} </Text>
         <View style={styles.line} />
        </View>

        <View style={styles.cardBody}>
         <View style={styles.lineContainer}>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <View style={styles.itemRow}>
            {item.items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              </View>
            ))}
          </View>
        </View>
         </View>
      </TouchableOpacity>
    );
  };


const DeliveryInformationScreen = ({ setEmail, setAddress, setPhone, setName }) => {
  return (
    <ScrollView style={styles.tabContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
    </ScrollView>
  );
};

const PaymentScreen = ({ navigation, getTotalAmount, paystackWebViewRef }) => {
  const handlePaymentCancel = () => {
    ToastAndroid.show('Payment canceled.', ToastAndroid.LONG);
  };

  const handlePaymentSuccess = (reference) => {
    ToastAndroid.show('Payment successful.', ToastAndroid.LONG);
    navigation.navigate('SummaryScreen');
  };

  const handlePaymentError = (error) => {
    ToastAndroid.show('Payment error: ' + error, ToastAndroid.LONG);
  };

  return (
    <SafeAreaView style={styles.tabContainer}>
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
    </SafeAreaView>
  );
};

const SummaryScreen = ({ navigation, getTotalAmount, items, emptyCart }) => {
  return (
    <ScrollView style={styles.tabContainer}>
      {/* <Text style={styles.tabText}>Summary screen</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.product.name}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.qty}</Text>
          </View>
        )}
      />
      <Text style={styles.totalAmount}>Total Amount: {getTotalAmount().toFixed(2)}</Text>
      <Button title="Place Order" onPress={() => navigation.navigate('PaymentScreen')} /> */}
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
    <TouchableOpacity
          style={[ selectedDay === '' && styles.filterButtonSelected]}
          onPress={() => handleDaySelection('')}
        >
          <Text style={{color:COLORS.primary, fontWeight:'900'}}>Today</Text>
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
          <Text style={{color:COLORS.primary, fontWeight:'900'}}>Two Days Ago</Text>
        </TouchableOpacity>
      </View>
     
      <FlatList
        data={filteredTransactions}
        keyExtractor={item => item.id}
        renderItem={renderTransactionItem}
      />
          <View style={{ padding: 10, color:'#FFF',backgroundColor:'#CCC' }}>
        {transactions.map((transaction, index) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction })}>
                  <View key={index} style={{ padding: 10, color:'#000',backgroundColor:'#CCC' }}>
                    <Text style={{color:COLORS.dark}}>Transaction ID: {transaction.id}</Text>
                    <Text style={{color:COLORS.dark}}>Date: {transaction.date}</Text>
                    <Text style={{color:COLORS.dark}}>Amount: {transaction.totalAmount}</Text>
                    {/* Display other transaction information as needed */}
                  </View>
            </TouchableOpacity>
        ))}
          </View>
    </View>
    </ScrollView>
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
    

  const PaymentComponent = () => (
    // <PaymentScreen navigation={navigation} getTotalAmount={getTotalAmount} paystackWebViewRef={paystackWebViewRef} />
    <ScrollView style={styles.tabContainer}>
    {/* <Text style={styles.tabText}>Summary screen</Text>
    <View style={styles.paymentMethodContainer}>
      <Text style={styles.detailsTitle}>Enter Your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.detailsTitle}>Enter Your Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Delivery Address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.detailsTitle}>Phone Contact</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.detailsTitle}>Phone Contact</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />
    </View> */}

      <Text style={styles.tabText}>Click Payment Button To complete Order</Text>
     

    <View style={styles.amountContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
        
       
        <View style={styles.lineContainer}>
    <View style={styles.line} />
    <Text style={styles.lineText}> {listItems()}</Text>
    <View style={styles.line} />
  </View>
        </View>
      </View>
    </View>

    {/* <View style={styles.buttonContainer}>
      <Button
        title="Place Order"
        style={styles.placehOrderButton}
        onPress={() => paystackWebViewRef.current.startTransaction()}
        disabled={isLoading}
      />
      {isLoading && (
        <ActivityIndicator size="small" color="#0000ff" style={styles.loadingIndicator} />
      )}
    </View> */}
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
  </ScrollView>
    );

  const SummaryComponent = () => (
    <SummaryScreen navigation={navigation} getTotalAmount={getTotalAmount} items={items} emptyCart={emptyCart} />
  );

  return (

    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: COLORS.primary },
          indicatorStyle: styles.tabIndicator, // Apply the tab indicator style here
          activeTintColor: '#FFFFFF',
          inactiveTintColor: COLORS.tabTextInactive,
          labelStyle: { fontWeight: '900' },
        }}
      >
        <Tab.Screen
          name="Delivery Information"
          component={DeliveryInformationComponent}
        />
        <Tab.Screen name="Payment" component={PaymentComponent} />
        <Tab.Screen name="Summary" component={SummaryComponent} />
      </Tab.Navigator>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
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
    backgroundColor: '#2B60DA',
    // backgroundColor: '#fffc',
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
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    marginTop: 20,
  },
  tabIndicator: {
    backgroundColor: COLORS.tabIndicator, // Set the background color for the tab indicator
    height: 3, // Set the height of the tab indicator
  },
  
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  placeOrderButton: {
    backgroundColor:COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingIndicator: {
    marginTop: 10,
  },
   container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
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
    borderColor:COLORS.primary,
    backgroundColor: '#CCC0',
    fontWeight:'900',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
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
    color: '#999ccc',
    color:COLORS.primary,
    fontWeight:'900'
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
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
});


// import React, { useEffect, useState, useContext, useRef } from 'react';
// import { StyleSheet, Text, TextInput, View, Button, ScrollView, SafeAreaView, ActivityIndicator, Platform, ToastAndroid, FlatList, Dimensions } from 'react-native';
// import { Paystack } from 'react-native-paystack-webview';
// import { CartContext } from '../CartContext';
// import COLORS from './../global/LandingColors';
// import { auth, db, firestore } from './../../firebase';
// import { collection, addDoc, setDoc, doc, onSnapshot } from 'firebase/firestore';

// const chipWidth = Dimensions.get('window').width / 3 - 16;

// export default function CheckoutScreen({ route, navigation }) {
//   const { items, emptyCart, getTotalAmount, getItemsCount, getTotalItems } = useContext(CartContext);

//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const paystackWebViewRef = useRef(null);


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
  

//   function renderChip(name, quantity) {
//     const { width } = Dimensions.get('window');
//     const chipWidth = width / 2 - 20;

//     return (
//       <View style={[styles.chip, { width: chipWidth }]}>
//         <Text style={styles.chipText}>{name} x{quantity}{'\n'}</Text>
//       </View>
//     );
//   }

//   function listItems() {
//     const totalPrice = items.reduce((sum, item) => sum + item.qty * item.product.price, 0).toFixed(2);

//     return (
//       <FlatList
//         data={items}
//         renderItem={({ item }) => renderChip(item.product.name, item.qty)}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         ListFooterComponent={<Text style={styles.totalPrice}>Total Price: &#8358;{totalPrice}</Text>}
//       />
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
      // <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      //   <View style={styles.paymentMethodContainer}>
      //     <Text style={styles.detailsTitle}>Enter Your Email</Text>
      //     <TextInput
      //       style={styles.input}
      //       placeholder="Email Address"
      //       value={email}
      //       onChangeText={setEmail}
      //     />

      //     <Text style={styles.detailsTitle}>Enter Your Address</Text>
      //     <TextInput
      //       style={styles.input}
      //       placeholder="Delivery Address"
      //       value={address}
      //       onChangeText={setAddress}
      //     />

      //     <Text style={styles.detailsTitle}>Phone Contact</Text>
      //     <TextInput
      //       style={styles.input}
      //       placeholder="User Name"
      //       value={name}
      //       onChangeText={setName}
      //     />
      //     <Text style={styles.detailsTitle}>Phone Contact</Text>
      //     <TextInput
      //       style={styles.input}
      //       placeholder="Phone Number"
      //       value={phone}
      //       onChangeText={setPhone}
      //     />
      //   </View>

      //   <View style={styles.amountContainer}>
      //     <View style={styles.container}>
      //       <View style={styles.card}>{listItems()}</View>
      //     </View>
      //   </View>

      //   <View style={styles.buttonContainer}>
      //     <Button
      //       title="Make Payment"
      //       onPress={() => paystackWebViewRef.current.startTransaction()}
      //       disabled={isLoading}
      //     />
      //     {isLoading && (
      //       <ActivityIndicator size="small" color="#0000ff" style={styles.loadingIndicator} />
      //     )}
      //   </View>

      //   <Paystack
      //     paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
      //     billingPhoneNumber={phone}
      //     billingName={email}
      //     amount={getTotalAmount().toFixed(2)}
      //     billingEmail={email}
      //     refNumber={new Date().getTime().toString()}
      //     onCancel={handlePaymentCancel}
      //     onSuccess={handlePaymentSuccess}
      //     onError={handlePaymentError}
      //     autoStart={false}
      //     ref={paystackWebViewRef}
      //     style={styles.loadingIndicator}
      //     ButtonText="Pay Now"
      //     showPayButton={true}
      //     showPayOption={true}
      //     channels={['card', 'bank', 'ussd']}
      //     currency="NGN"
      //     activityIndicatorColor="green"
      //     SafeAreaViewContainer={{ marginTop: 25 }}
      //     SafeAreaViewContainerModal={{ marginTop: 25 }}
      //   />
      // </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollViewContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   paymentMethodContainer: {
//     marginBottom: 20,
//   },
//   detailsTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 3,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: '#fffc',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   totalPrice: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginHorizontal: 16,
//     marginTop: 16,
//     alignSelf: 'flex-end',
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
//   loadingIndicator: {
//     marginTop: 10,
//   },
//   chip: {
//     backgroundColor: '#e3e3e3',
//     borderRadius: 4,
//     padding: 1,
//     margin: 1,
//     marginBottom: 3,
//     flexBasis: chipWidth,
//   },
//   chipText: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//   },
// });




// import React, { useEffect, useState, useContext, useRef } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ActivityIndicator,
//   Platform,
//   ToastAndroid ,
//   FlatList,
//   Dimensions 
// } from 'react-native';
// import { Paystack } from 'react-native-paystack-webview';
// import { CartContext } from '../CartContext';
// import COLORS from './../global/LandingColors';

// const chipWidth = Dimensions.get('window').width / 3 - 16;


// export default function CheckoutScreen({ route, navigation, cartInformation, userInformation, orderDetails, }) {
//   const {
//     items,
//     removeItemFromCart,
//     getItemsCount,
//     getTotalItems,
//     getTotalPrice,
//     incrementItemQty,
//     decrementItemQty,
//     emptyCart,
//     getSubTotal,
//     getTotal,
//     getTotalAmount,
//     getCardSubTotal,
//   } = useContext(CartContext);

//   const [selectedMethod, setSelectedMethod] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [amount, setAmount] = useState('');
//   const [itemsPrice, setItemsPrice] = useState('');
//   const [count, setCount] = useState('');
//   const [orderItems, setOrderItems] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const paystackWebViewRef = useRef(null);

//   useEffect(() => {
//     setItemsPrice(getTotalAmount);                    
//     setCount(getItemsCount);                    
//     setOrderItems(getTotalItems);                    
//     setEmail(email);                    
//     setAmount(getTotalAmount().toFixed(2));
//     setAddress(address);
//   }, [cartInformation, userInformation, orderDetails,]);

  
  

//   const handlePaymentSuccess = (response) => {
//     console.log('Payment successful:', response);
//     emptyCart(); // Call function to empty the cart
//     navigation.navigate('CustomerReceiptScreen'); // Navigate to home screen
//     ToastAndroid.show('Payment successful!', ToastAndroid.SHORT);
//   };
  


//   const handlePaymentError = (error) => {
//     console.log('Payment error:', error);
//     navigation.navigate('CustomerReceiptScreen', {
//       cartInformation,
//       userInformation: { name, email, address, phone },
//       orderDetails
//     }); // Navigate to home screen
//     emptyCart(); // Call function to empty the cart
//     ToastAndroid.show('Payment failed. Please try again.', ToastAndroid.SHORT);
//   };
  



//   const handlePaymentCancel = () => {
//     console.log('Payment cancelled');
//     emptyCart(); // Call function to empty the cart
//     navigation.navigate('cart'); // Navigate to home screen
//     ToastAndroid.show('Payment cancelled.', ToastAndroid.SHORT);
//   };


//   function renderChip(name, quantity) {
//     const { width } = Dimensions.get('window');
//     const chipWidth = (width / 2) - 20;
  
//     return (
//       <View style={[styles.chip, { width: chipWidth }]}>
//         <Text style={styles.chipText}>{name} x{quantity}{'\n'}</Text>
//       </View>
//     );
//   }

//   function listItems() {
//     const totalPrice = items.reduce((sum, item) => sum + item.qty * item.product.price, 0).toFixed(2);
  
//     return (
//       <FlatList
//         data={items}
//         renderItem={({ item }) => renderChip(item.product.name, item.qty)}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         ListFooterComponent={<Text style={styles.totalPrice}>Total Price: &#8358;{totalPrice}</Text>}
//       />
//     );
//   }
  


  
//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         keyboardVerticalOffset={100}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.scrollViewContainer}
//       >
//         <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//           <View style={styles.paymentMethodContainer}>
//             {/* <Text style={styles.paymentMethodTitle}>Select Payment Method</Text> */}

            
//             <Text style={styles.detailsTitle}>Enter Your Email</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enmail Address"
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//             />

//             <Text style={styles.detailsTitle}>Enter Your Address</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Delivery Address"
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//             />
//               <Text style={styles.detailsTitle}>Phone Contact</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Phone Number"
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//             />
//           </View>
          
//           <View style={styles.amountContainer}>
//             <View style={styles.container}>
//               <View style={styles.card}>
//                     {listItems()}
           
//              </View>
//             </View>
//           </View>
//           <View style={styles.buttonContainer}>
//             <Button
//               title="Make Payment"
//               onPress={() => paystackWebViewRef.current.startTransaction()}
//               disabled={isLoading}
//             />
//             {isLoading && (
//               <ActivityIndicator
//                 size="small"
//                 color="#0000ff"
//                 style={styles.loadingIndicator}
//               />
//             )}
//           </View>

//   <Paystack
//     paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
//       //  billingEmail={userInformation ? userInformation.email : ''}

//     // billingEmail={email}
//     // billingPhoneNumber={userInformation ? userInformation.phoneNumber : ''}
//     billingPhoneNumber={phone}
//     billingName={userInformation ? userInformation.displayName : ''}
//     // billingName={name}
//     // amount={amount}
//     refNumber={new Date().getTime().toString()}
//     // activityIndicatorColor="#00ff00"
//     onCancel={handlePaymentCancel}
//     onSuccess={handlePaymentSuccess}
//     onError={handlePaymentError}
//     // autoStart={false}
//     // ref={paystackWebViewRef}
//     style={styles.loadingIndicator}
//     // paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
    
//         amount={amount}
//         billingEmail={email}
//         ButtonText="Pay Now"
//         showPayButton={true}
//         showPayOption={true}
//         channels={['card', 'bank', 'ussd']}
//         currency="NGN"
//         ref={paystackWebViewRef}
//         activityIndicatorColor="green"
//         SafeAreaViewContainer={{ marginTop: 25 }}
//         SafeAreaViewContainerModal={{ marginTop: 25 }}
//         // onCancel={(e) => {
//         //   // handle response here
//         // }}
//         // onSuccess={(res) => {
//         //   // handle response here
//         // }}
//         autoStart={false}
//   />

// </ScrollView>
// </KeyboardAvoidingView>
// </SafeAreaView>
// );
// };
// const styles = StyleSheet.create({
// container: {
// flex: 1,
// },
// scrollViewContainer: {
// flexGrow: 1,
// padding: 20,
// },
// paymentMethodContainer: {
// marginBottom: 20,
// },
// paymentMethodTitle: {
// fontSize: 20,
// fontWeight: 'bold',
// marginBottom: 10,
// },
// paymentMethods: {
// flexDirection: 'row',
// justifyContent: 'space-between',
// },
// paymentMethod: {
// borderWidth: 1,
// borderColor: COLORS.primary,
// backgroundColor:COLORS.ligth,

// padding: 10,
// flex: 1,
// marginRight: 10,
// },
// selectedPaymentMethod: {
// backgroundColor:COLORS.primary,
// color: COLORS.white,


// },
// paymentMethodText: {
// textAlign: 'center',
// color: COLORS.white,


// },
// cardPaymentContainer: {
// marginBottom: 20,
// },
// cardPaymentTitle: {
// fontSize: 20,
// fontWeight: 'bold',
// marginBottom: 10,
// },
// expiryContainer: {
// flexDirection: 'row',
// justifyContent: 'space-between',
// marginBottom: 20,
// },
// expiryInput: {
// width: '30%',
// },
// cvcInput: {
// width: '40%',
// },
// detailsContainer: {},
// detailsTitle: {
// fontSize: 20,
// fontWeight: 'bold',
// marginBottom: 10,
// },
// input: {
// borderWidth: 1,
// borderColor: '#ccc',
// padding: 10,
// marginBottom: 20,
// },
// loadingContainer: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// amountValue:{
//   fontSize: 20,
// fontWeight: 'bold',
// marginBottom: 10,
// },
// card: {
//   flex:1,
//   backgroundColor: '#fffc',
//   borderRadius: 10,
//   padding: 20,
//   marginBottom:10,
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
//   elevation: 5,
// },
// item: {
//   backgroundColor: '#fff',
//   padding: 10,
//   marginVertical: 8,
//   marginHorizontal: 16,
//   borderRadius: 8,
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
//   elevation: 5,
// },
// itemName: {
//   fontSize: 18,
//   fontWeight: 'bold',
//   marginBottom: 5,
// },
// itemQty: {
//   fontSize: 16,
//   marginBottom: 5,
// },
// itemPrice: {
//   fontSize: 16,
//   fontWeight: 'bold',
// },
// totalPrice: {
//   fontSize: 20,
//   fontWeight: 'bold',
//   marginHorizontal: 16,
//   marginTop: 16,
//   alignSelf: 'flex-end',
// },
// container: {
//   flex: 1,
//   backgroundColor: '#f0f0f0',
//   padding: 16,
// },
// // Styles for the chip container
// chip: {
//   backgroundColor: '#e3e3e3',
//   borderRadius: 4,
//   padding: 1,
//   margin: 1,
//   marginBottom: 3,
//   flexBasis: chipWidth,
// },
// chipText: {
//   fontSize: 14,
//   color: '#555',
//   textAlign: 'center',
// },
// // rest of the styles

// });

// import React, { useEffect, useState, useContext, useRef } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ActivityIndicator,
//   Platform,
//   ToastAndroid ,
//   FlatList,
//   Dimensions 
// } from 'react-native';
// import { Paystack } from 'react-native-paystack-webview';
// import { CartContext } from '../CartContext';
// import COLORS from './../global/LandingColors';
// import {auth, db, firestore } from './../../firebase';

// import {collection, addDoc, setDoc, doc } from "firebase/firestore";



// const chipWidth = Dimensions.get('window').width / 3 - 16;

// export default function CheckoutScreen({ route, navigation, cartInformation, userInformation, orderDetails }) {
//   const {
//     items,
//     removeItemFromCart,
//     getItemsCount,
//     getTotalItems,
//     getTotalPrice,
//     incrementItemQty,
//     decrementItemQty,
//     emptyCart,
//     getSubTotal,
//     getTotal,
//     getTotalAmount,
//     getCardSubTotal,
//   } = useContext(CartContext);

//   const [selectedMethod, setSelectedMethod] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [amount, setAmount] = useState('');
//   const [itemsPrice, setItemsPrice] = useState('');
//   const [count, setCount] = useState('');
//   const [orderItems, setOrderItems] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const paystackWebViewRef = useRef(null);

//   useEffect(() => {
//     setItemsPrice(getTotalAmount);                    
//     setCount(getItemsCount);                    
//     setOrderItems(getTotalItems);                    
//     setEmail(userInformation ? userInformation.email : '');                    
//     setAmount(getTotalAmount().toFixed(2));
//     setAddress(address);
//     setPhone(userInformation ? userInformation.phoneNumber : '');
//   }, [cartInformation, userInformation, orderDetails]);

//   const handlePaymentSuccess = (response) => {
//     console.log('Payment successful:', response);
//     emptyCart(); // Call function to empty the cart
//     navigation.navigate('CustomerReceiptScreen'); // Navigate to home screen
//     ToastAndroid.show('Payment successful!', ToastAndroid.SHORT);
//   };

//   const handlePaymentError = (error) => {
//     console.log('Payment error:', error);
//     navigation.navigate('CustomerReceiptScreen', {
//       cartInformation,
//       userInformation: { name, email, address, phone },
//       orderDetails
//     }); // Navigate to home screen
//     emptyCart(); // Call function to empty the cart
//     ToastAndroid.show('Payment failed. Please try again.', ToastAndroid.SHORT);
//   };

//   const handlePaymentCancel = () => {
//     console.log('Payment cancelled');
//     emptyCart(); // Call function to empty the cart
//     navigation.navigate('cart'); // Navigate to home screen
//     ToastAndroid.show('Payment cancelled.', ToastAndroid.SHORT);
//   };

//   function renderChip(name, quantity) {
//     const { width } = Dimensions.get('window');
//     const chipWidth = (width / 2) - 20;

//     return (
//       <View style={[styles.chip, { width: chipWidth }]}>
//         <Text style={styles.chipText}>{name} x{quantity}{'\n'}</Text>
//       </View>
//     );
//   }

//   function listItems() {
//     const totalPrice = items.reduce((sum, item) => sum + item.qty * item.product.price, 0).toFixed(2);

//     return (
//       <FlatList
//         data={items}
//         renderItem={({ item }) => renderChip(item.product.name, item.qty)}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         ListFooterComponent={<Text style={styles.totalPrice}>Total Price: &#8358;{totalPrice}</Text>}
//       />
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         keyboardVerticalOffset={100}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.scrollViewContainer}
//       >
//         <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//           <View style={styles.paymentMethodContainer}>
//             <Text style={styles.detailsTitle}>Enter Your Email</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Email Address"
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//             />

//             <Text style={styles.detailsTitle}>Enter Your Address</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Delivery Address"
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//             />

//             <Text style={styles.detailsTitle}>Phone Contact</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Phone Number"
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//             />
//           </View>
          
//           <View style={styles.amountContainer}>
//             <View style={styles.container}>
//               <View style={styles.card}>
//                 {listItems()}
//               </View>
//             </View>
//           </View>
//           <View style={styles.buttonContainer}>
//             <Button
//               title="Make Payment"
//               onPress={() => paystackWebViewRef.current.startTransaction()}
//               disabled={isLoading}
//             />
//             {isLoading && (
//               <ActivityIndicator
//                 size="small"
//                 color="#0000ff"
//                 style={styles.loadingIndicator}
//               />
//             )}
//           </View>

//           <Paystack
//             paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
//             billingPhoneNumber={phone}
//             billingName={userInformation ? userInformation.displayName : ''}
//             amount={amount}
//             billingEmail={email}
//             refNumber={new Date().getTime().toString()}
//             onCancel={handlePaymentCancel}
//             onSuccess={handlePaymentSuccess}
//             onError={handlePaymentError}
//             autoStart={false}
//             ref={paystackWebViewRef}
//             style={styles.loadingIndicator}
//             ButtonText="Pay Now"
//             showPayButton={true}
//             showPayOption={true}
//             channels={['card', 'bank', 'ussd']}
//             currency="NGN"
//             activityIndicatorColor="green"
//             SafeAreaViewContainer={{ marginTop: 25 }}
//             SafeAreaViewContainerModal={{ marginTop: 25 }}
//           />
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollViewContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   paymentMethodContainer: {
//     marginBottom: 20,
//   },
//   detailsTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 3,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  // card: {
  //   flex: 1,
  //   backgroundColor: '#fffc',
  //   borderRadius: 10,
  //   padding: 20,
  //   marginBottom: 10,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // totalPrice: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginHorizontal: 16,
  //   marginTop: 16,
  //   alignSelf: 'flex-end',
  // },
  // buttonContainer: {
  //   marginTop: 20,
  // },
//   loadingIndicator: {
//     marginTop: 10,
//   },
//   chip: {
//     backgroundColor: '#e3e3e3',
//     borderRadius: 4,
//     padding: 1,
//     margin: 1,
//     marginBottom: 3,
//     flexBasis: chipWidth,
//   },
//   chipText: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
//   },
// });



