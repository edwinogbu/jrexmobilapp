import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from './../../firebase';

const TransactionHistoryScreen = ({ navigation }) => {
  const currentDate = new Date();
  const oneDayAgo = new Date(currentDate);
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const twoDaysAgo = new Date(currentDate);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const oneDayAgoString = oneDayAgo.toISOString().split('T')[0];
  const twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

  const [selectedDay, setSelectedDay] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsRef = collection(firestore, 'checkouts');
        let transactionsQuery = transactionsRef;

        if (selectedDay === oneDayAgoString || selectedDay === twoDaysAgoString) {
          transactionsQuery = query(transactionsRef, where('date', '==', selectedDay));
        }

        const transactionsSnapshot = await getDocs(transactionsQuery);
        const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
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

  const renderTransactionItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item, })}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardDate}>{item.date}</Text>
          <Text style={styles.cardAmount}>{item.totalAmount}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardDescription}>{item.paymentStatus}</Text>
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
      </TouchableOpacity>
    );
  };

  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, selectedDay === '' && styles.filterButtonSelected]}
          onPress={() => handleDaySelection('')}
        >
          <Text style={styles.filterButtonText}>All Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedDay === oneDayAgoString && styles.filterButtonSelected]}
          onPress={() => handleDaySelection(oneDayAgoString)}
        >
          <Text style={styles.filterButtonText}>One Day Ago</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedDay === twoDaysAgoString && styles.filterButtonSelected]}
          onPress={() => handleDaySelection(twoDaysAgoString)}
        >
          <Text style={styles.filterButtonText}>Two Days Ago</Text>
        </TouchableOpacity>
        {/* Add more filter buttons for each day with transactions */}
      </View>
      <FlatList
        data={filteredTransactions}
        keyExtractor={item => item.id}
        renderItem={renderTransactionItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B60DA',
    padding: 20,
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
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
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
});

export default TransactionHistoryScreen;


// import React, { useState, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestore } from './../../firebase';

// const TransactionHistoryScreen = ({ navigation }) => {
//   const currentDate = new Date();
//   const oneDayAgo = new Date(currentDate);
//   oneDayAgo.setDate(oneDayAgo.getDate() - 1);
//   const twoDaysAgo = new Date(currentDate);
//   twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

//   const oneDayAgoString = oneDayAgo.toISOString().split('T')[0];
//   const twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

//   const [selectedDay, setSelectedDay] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const transactionsRef = collection(firestore, 'checkouts');
//         let transactionsQuery = transactionsRef;

//         if (selectedDay === oneDayAgoString || selectedDay === twoDaysAgoString) {
//           transactionsQuery = query(transactionsRef, where('date', '==', selectedDay));
//         }

//         const transactionsSnapshot = await getDocs(transactionsQuery);
//         const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
//         setTransactions(transactionData);
//       } catch (error) {
//         console.error('Error fetching transactions:', error);
//       }
//     };

//     fetchTransactions();
//   }, [selectedDay]);

//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardDate}>{item.date}</Text>
//           <Text style={styles.cardAmount}>{item.totalAmount}</Text>
//         </View>

//         <View style={styles.cardBody}>
//           <Text style={styles.cardDescription}>{item.paymentStatus}</Text>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//           <View style={styles.itemRow}>
//             {item.items.map((item, index) => (
//               <View key={index} style={styles.itemContainer}>
//                 <Text style={styles.itemName}>{item.name}</Text>
//                 <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const handleDaySelection = (day) => {
//     setSelectedDay(day);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedDay === '' && styles.filterButtonSelected]}
//           onPress={() => handleDaySelection('')}
//         >
//           <Text style={styles.filterButtonText}>All Transactions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedDay === oneDayAgoString && styles.filterButtonSelected]}
//           onPress={() => handleDaySelection(oneDayAgoString)}
//         >
//           <Text style={styles.filterButtonText}>One Day Ago</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedDay === twoDaysAgoString && styles.filterButtonSelected]}
//           onPress={() => handleDaySelection(twoDaysAgoString)}
//         >
//           <Text style={styles.filterButtonText}>Two Days Ago</Text>
//         </TouchableOpacity>
//         {/* Add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   itemContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   itemQuantity: {
//     fontSize: 14,
//   },
// });

// export default TransactionHistoryScreen;

// import React, { useState, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestore } from './../../firebase';

// const TransactionHistoryScreen = ({ navigation }) => {
//   const currentDate = new Date();
//   const oneDayAgo = new Date(currentDate);
//   oneDayAgo.setDate(oneDayAgo.getDate() - 1);
//   const twoDaysAgo = new Date(currentDate);
//   twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

//   const oneDayAgoString = oneDayAgo.toISOString().split('T')[0];
//   const twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

//   const [selectedDay, setSelectedDay] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const transactionsRef = collection(firestore, 'checkouts');
//         let transactionsQuery = transactionsRef;

//         if (selectedDay === oneDayAgoString || selectedDay === twoDaysAgoString) {
//           transactionsQuery = query(transactionsRef, where('date', '==', selectedDay));
//         }

//         const transactionsSnapshot = await getDocs(transactionsQuery);
//         const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
//         setTransactions(transactionData);
//       } catch (error) {
//         console.error('Error fetching transactions:', error);
//       }
//     };

//     fetchTransactions();
//   }, [selectedDay]);

//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardDate}>{item.date}</Text>
//           <Text style={styles.cardAmount}>{item.totalAmount}</Text>
//         </View>

//         <View style={styles.cardBody}>
//           <Text style={styles.cardDescription}>{item.paymentStatus}</Text>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//           <View style={styles.itemRow}>
//             {item.items.map((item, index) => (
//               <View key={index} style={styles.itemContainer}>
//                 <Text style={styles.itemName}>{item.name}</Text>
//                 <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const handleDaySelection = (day) => {
//     setSelectedDay(day);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedDay === '' && styles.filterButtonSelected]}
//           onPress={() => handleDaySelection('')}
//         >
//           <Text style={styles.filterButtonText}>All Transactions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedDay === oneDayAgoString && styles.filterButtonSelected]}
//           onPress={() => handleDaySelection(oneDayAgoString)}
//         >
//           <Text style={styles.filterButtonText}>One Day Ago</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedDay === twoDaysAgoString && styles.filterButtonSelected]}
//           onPress={() => handleDaySelection(twoDaysAgoString)}
//         >
//           <Text style={styles.filterButtonText}>Two Days Ago</Text>
//         </TouchableOpacity>
//         {/* Add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   itemContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   itemQuantity: {
//     fontSize: 14,
//   },
// });

// export default TransactionHistoryScreen;


// import React, { useState, useCallback, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestore } from './../../firebase';

// const TransactionHistoryScreen = ({ navigation }) => {

//   const [selectedDay, setSelectedDay] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   const { container, filterContainer, filterButton, filterButtonText, filterButtonSelected, card, cardHeader, cardDate, cardAmount, cardBody, cardDescription, itemRow, itemName, itemQuantity } = styles;

//   const currentDate = new Date();
//   const oneDayAgo = new Date(currentDate);
//   oneDayAgo.setDate(oneDayAgo.getDate() - 1);
//   const twoDaysAgo = new Date(currentDate);
//   twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

//   const oneDayAgoString = oneDayAgo.toISOString().split('T')[0];
//   const twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

//   const fetchTransactions = useCallback(async () => {
//     try {
//       const transactionsRef = collection(firestore, 'checkouts');

//       let transactionsQuery = transactionsRef;

//       if (selectedDay === oneDayAgoString || selectedDay === twoDaysAgoString) {
//         transactionsQuery = query(
//           transactionsRef,
//           where('date', '==', selectedDay)
//         );
//       }

//       const transactionsSnapshot = await getDocs(transactionsQuery);
//       const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
//       setTransactions(transactionData);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   }, [selectedDay]);

//   useEffect(() => {
//     fetchTransactions();
//   }, [fetchTransactions]);


//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={cardHeader}>
//           <Text style={cardDate}>{item.date}</Text>
//           <Text style={cardAmount}>{item.totalAmount}</Text>
//         </View>

//         <View style={cardBody}>
//           <Text style={cardDescription}>{item.paymentStatus}</Text>
//           <Text style={cardDescription}>{item.description}</Text>
//           <View style={itemRow}>
//             {item.items.map((item, index) => (
//               <View key={index} style={styles.itemContainer}>
//                 <Text style={itemName}>{item.name}</Text>
//                 <Text style={itemQuantity}>Quantity: {item.quantity}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (

//     <View style={container}>
//       <View style={filterContainer}>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('')}>
//           <Text style={[filterButtonText, selectedDay === '' && filterButtonSelected]}>All Transactions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay(oneDayAgoString)}>
//           <Text style={[filterButtonText, selectedDay === oneDayAgoString && filterButtonSelected]}>One Day Ago</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay(twoDaysAgoString)}>
//           <Text style={[filterButtonText, selectedDay === twoDaysAgoString && filterButtonSelected]}>Two Days Ago</Text>
//         </TouchableOpacity>
//         {/* add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   itemContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   itemQuantity: {
//     fontSize: 14,
//   },
// });

// export default TransactionHistoryScreen;


// import React, { useState, useCallback, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestore } from './../../firebase';

// const TransactionHistoryScreen = ({ navigation }) => {
//   const [selectedDay, setSelectedDay] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   const { container, filterContainer, filterButton, filterButtonText, filterButtonSelected, card, cardHeader, cardDate, cardAmount, cardBody, cardDescription, itemRow, itemName, itemQuantity } = styles;

//   const fetchTransactions = async () => {
//     try {
//       // Fetch transactions from Firestore checkouts collection
//       const transactionsRef = collection(firestore, 'checkouts');
//       const transactionsQuery = selectedDay === ''
//         ? transactionsRef
//         : query(transactionsRef, where('date', '==', selectedDay));
//       const transactionsSnapshot = await getDocs(transactionsQuery);
//       const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
//       setTransactions(transactionData);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [selectedDay]);

//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={cardHeader}>
//           <Text style={cardDate}>{item.date}</Text>
//           <Text style={cardAmount}>{item.totalAmount}</Text>
//         </View>

//         <View style={cardBody}>
//           <Text style={cardDescription}>{item.paymentStatus}</Text>
//           <Text style={cardDescription}>{item.description}</Text>
//           <View style={itemRow}>
//             {item.items.map((item, index) => (
//               <View key={index} style={styles.itemContainer}>
//                 <Text style={itemName}>{item.name}</Text>
//                 <Text style={itemQuantity}>Quantity: {item.quantity}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={container}>
//       <View style={filterContainer}>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('')}>
//           <Text style={[filterButtonText, selectedDay === '' && filterButtonSelected]}>All Transactions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-08')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-08' && filterButtonSelected]}>May 8th</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-07')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-07' && filterButtonSelected]}>May 7th</Text>
//         </TouchableOpacity>
//         {/* add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   itemContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   itemQuantity: {
//     fontSize: 14,
//   },
// });

// export default TransactionHistoryScreen;


// import React, { useState, useCallback, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestore } from './../../firebase';

// const TransactionHistoryScreen = ({ navigation }) => {
//   const [selectedDay, setSelectedDay] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   const { container, filterContainer, filterButton, filterButtonText, filterButtonSelected, card, cardHeader, cardDate, cardAmount, cardBody, cardDescription } = styles;

//   const fetchTransactions = async () => {
//     try {
//       // Fetch transactions from Firestore checkouts collection
//       const transactionsRef = collection(firestore, 'checkouts');
//       const transactionsQuery = selectedDay === ''
//         ? transactionsRef
//         : query(transactionsRef, where('date', '==', selectedDay));
//       const transactionsSnapshot = await getDocs(transactionsQuery);
//       const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
//       setTransactions(transactionData);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [selectedDay]);

//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={cardHeader}>
//           <Text style={cardDate}>{item.date}</Text>
//           <Text style={cardAmount}>{item.totalAmount}</Text>
//         </View>
//         <View style={cardBody}>
//           <Text style={cardDescription}>{item.paymentStatus}</Text>
//           <Text style={cardDescription}>{item.description}</Text>
//           {item.items.map((item, index) => (
//             <View key={index} style={styles.itemRow}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//             </View>
//           ))}
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={container}>
//       <View style={filterContainer}>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('')}>
//           <Text style={[filterButtonText, selectedDay === '' && filterButtonSelected]}>All Transactions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-08')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-08' && filterButtonSelected]}>May 8th</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-07')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-07' && filterButtonSelected]}>May 7th</Text>
//         </TouchableOpacity>
//         {/* add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   itemQuantity: {
//     fontSize: 14,
//   },
// });

// export default TransactionHistoryScreen;


// import React, { useState, useCallback, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { firestore } from './../../firebase';

// const TransactionHistoryScreen = ({ navigation }) => {
//   const [selectedDay, setSelectedDay] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   const { container, filterContainer, filterButton, filterButtonText, filterButtonSelected, card, cardHeader, cardDate, cardAmount, cardBody, cardDescription } = styles;

//   const fetchTransactions = async () => {
//     try {
//       // Fetch transactions from Firestore checkouts collection
//       const transactionsRef = collection(firestore, 'checkouts');
//       const transactionsQuery = selectedDay === ''
//         ? transactionsRef
//         : query(transactionsRef, where('date', '==', selectedDay));
//       const transactionsSnapshot = await getDocs(transactionsQuery);
//       const transactionData = transactionsSnapshot.docs.map(doc => doc.data());
//       setTransactions(transactionData);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [selectedDay]);

//   const renderTransactionItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={cardHeader}>
//           <Text style={cardDate}>{item.date}</Text>
//           <Text style={cardAmount}>{item.totalAmount}</Text>
//         </View>
//         <View style={cardBody}>
//           <Text style={cardDescription}>{item.paymentStatus}</Text>
//           <Text style={cardDescription}>{item.description}</Text>          
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={container}>
//       <View style={filterContainer}>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('')}>
//           <Text style={[filterButtonText, selectedDay === '' && filterButtonSelected]}>All Transactions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-08')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-08' && filterButtonSelected]}>May 8th</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-07')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-07' && filterButtonSelected]}>May 7th</Text>
//         </TouchableOpacity>
//         {/* add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={transactions}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
// });

// export default TransactionHistoryScreen;


// import React, { useState, useCallback } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const transactionData = [
//   {
//     id: '1',
//     date: '2022-05-08',
//     description: 'Order #12345',
//     amount: '$25.00'
//   },
//   {
//     id: '2',
//     date: '2022-05-07',
//     description: 'Order #12344',
//     amount: '$15.00'
//   },
//   {
//     id: '3',
//     date: '2022-05-06',
//     description: 'Order #12343',
//     amount: '$10.00'
//   },
//   // add more transactions here
// ];

// const TransactionHistoryScreen = ({ navigation }) => {
//   const [selectedDay, setSelectedDay] = useState('');

//   const { container, filterContainer, filterButton, filterButtonText, filterButtonSelected, transactionItem, transactionDate, transactionDescription, transactionAmount } = styles;

//   const renderTransactionItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionHistoryDetailScreen', { transaction: item })}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardDate}>{item.date}</Text>
//           <Text style={styles.cardAmount}>{item.amount}</Text>
//         </View>
//         <View style={styles.cardBody}>
//           <Text style={styles.cardDescription}>{item.description}</Text>
//         </View>
//       </TouchableOpacity>

//     );
//   };

//   const filterTransactionsByDay = useCallback(() => {
//     if (selectedDay === '') {
//       return transactionData;
//     } else {
//       return transactionData.filter(transaction => transaction.date === selectedDay);
//     }
//   }, [selectedDay]);

//   return (
//     <View style={container}>
//       <View style={filterContainer}>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('')}>
//           <Text style={[filterButtonText, selectedDay === '' && filterButtonSelected]}>All Transc..</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-08')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-08' && filterButtonSelected]}>May 8th</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={filterButton} onPress={() => setSelectedDay('2022-05-07')}>
//           <Text style={[filterButtonText, selectedDay === '2022-05-07' && filterButtonSelected]}>May 7th</Text>
//         </TouchableOpacity>
//         {/* add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={filterTransactionsByDay()}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#cfcccc',
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#cfcccc',
//   },
//   filterButtonSelected: {
//     color: '#2B60DA',
//     paddingHorizontal: 18,
//     paddingVertical: 11,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#fff',
    
// },
// transactionItem: {
// flexDirection: 'row',
// alignItems: 'center',
// borderBottomWidth: 1,
// borderBottomColor: '#ccc',
// paddingVertical: 10
// },
// transactionDate: {
// flex: 1,
// fontSize: 16
// },
// transactionDescription: {
// flex: 2,
// fontSize: 16
// },
// transactionAmount: {
// flex: 1,
// fontSize: 16,
// textAlign: 'right'
// },
// card: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardAmount: {
//     fontSize: 16,
//   },
//   cardBody: {},
//   cardDescription: {
//     fontSize: 14,
//     color: '#999ccc',
//   },
// });

// export default TransactionHistoryScreen;

// import React, { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const transactionData = [
//   {
//     id: '1',
//     date: '2022-05-08',
//     description: 'Order #12345',
//     amount: '$25.00'
//   },
//   {
//     id: '2',
//     date: '2022-05-07',
//     description: 'Order #12344',
//     amount: '$15.00'
//   },
//   {
//     id: '3',
//     date: '2022-05-06',
//     description: 'Order #12343',
//     amount: '$10.00'
//   },
//   // add more transactions here
// ];

// const TransactionHistoryScreen = () => {
//   const [selectedDay, setSelectedDay] = useState('');

//   const renderTransactionItem = ({ item }) => {
//     return (
//       <View style={styles.transactionItem}>
//         <Text style={styles.transactionDate}>{item.date}</Text>
//         <Text style={styles.transactionDescription}>{item.description}</Text>
//         <Text style={styles.transactionAmount}>{item.amount}</Text>
//       </View>
//     );
//   };

//   const filterTransactionsByDay = () => {
//     if (selectedDay === '') {
//       return transactionData;
//     } else {
//       return transactionData.filter(transaction => transaction.date === selectedDay);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <TouchableOpacity style={styles.filterButton} onPress={() => setSelectedDay('')}>
//           <Text style={[styles.filterButtonText, selectedDay === '' && styles.filterButtonSelected]}>All</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton} onPress={() => setSelectedDay('2022-05-08')}>
//           <Text style={[styles.filterButtonText, selectedDay === '2022-05-08' && styles.filterButtonSelected]}>May 8th</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton} onPress={() => setSelectedDay('2022-05-07')}>
//           <Text style={[styles.filterButtonText, selectedDay === '2022-05-07' && styles.filterButtonSelected]}>May 7th</Text>
//         </TouchableOpacity>
//         {/* add more filter buttons for each day with transactions */}
//       </View>
//       <FlatList
//         data={filterTransactionsByDay()}
//         keyExtractor={item => item.id}
//         renderItem={renderTransactionItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 20
//   },
//   filterButton: {
//     marginRight: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ccc'
//   },
//   filterButtonText: {
//     fontSize: 16,
//     color: '#333'
//   },
//   filterButtonSelected: {
//     color: '#fff',
//     backgroundColor: '#333',
//     borderColor: '#333'
//   },
//   transactionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc'
//   },
//   transactionDate: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   transactionDescription: {
//     flex: 3,
//     fontSize: 16,
// marginLeft: 10 ,
// },
// transactionAmount: {
// flex: 1,
// fontSize: 16,
// textAlign: 'right',
// fontWeight: 'bold'
// }
// });