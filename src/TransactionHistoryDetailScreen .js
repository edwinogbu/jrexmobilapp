import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';

const TransactionHistoryDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Transaction Details\nID: ${transaction.id}\nDate: ${transaction.date}\nItems:\n${getItemsString(transaction.items)}\nAmount: ${transaction.amount}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getItemsString = (items) => {
    return items.map(item => `${item.name} (Quantity: ${item.quantity})`).join('\n');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Transaction Details</Text>
        <Text style={styles.label}>ID:{transaction.id}</Text>

        <Text style={styles.value}>{transaction.id}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
        <Text style={styles.label}>Items:</Text>
        <View style={styles.itemsContainer}>
          {transaction.items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{transaction.totalAmount}</Text>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B60DA',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'900'
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  item: {
    width: '50%',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: '#2B60DA',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  shareText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TransactionHistoryDetailScreen;


// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';

// const TransactionHistoryDetailScreen = ({ route }) => {
//   const { transaction } = route.params;

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Transaction Details\nID: ${transaction.id}\nDate: ${transaction.date}\nItems:\n${getItemsString(transaction.items)}\nAmount: ${transaction.amount}`,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getItemsString = (items) => {
//     return items.map(item => `${item.name} (Quantity: ${item.quantity})`).join('\n');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Transaction Details</Text>
//         <Text style={styles.label}>ID:</Text>
//         <Text style={styles.value}>{transaction.id}</Text>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{transaction.date}</Text>
//         <Text style={styles.label}>Items:</Text>
//         <View>
//           {transaction.items.map((item, index) => (
//             <View key={index}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//             </View>
//           ))}
//         </View>
//         <Text style={styles.label}>Amount:</Text>
//         <Text style={styles.value}>{transaction.totalAmount}</Text>
//         <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
//           <Text style={styles.shareText}>Share</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   itemName: {
//     fontSize: 14,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   itemQuantity: {
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   shareButton: {
//     backgroundColor: '#2B60DA',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20,
//   },
//   shareText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default TransactionHistoryDetailScreen;


// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';

// const TransactionHistoryDetailScreen = ({ route }) => {
//   const { transaction } = route.params;

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Transaction Details\nID: ${transaction.id}\nDate: ${transaction.date}\nDescription: ${transaction.description}\nAmount: ${transaction.amount}`,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Transaction Details</Text>
//         <Text style={styles.label}>ID:</Text>
//         <Text style={styles.value}>{transaction.id}</Text>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{transaction.date}</Text>
//         <Text style={styles.label}>Description:</Text>
//         <Text style={styles.value}>{transaction.description}</Text>
//         <Text style={styles.label}>Amount:</Text>
//         <Text style={styles.value}>{transaction.amount}</Text>
//         <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
//           <Text style={styles.shareText}>Share</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   shareButton: {
//     backgroundColor: '#2B60DA',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20,
//   },
//   shareText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default TransactionHistoryDetailScreen;




// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const TransactionHistoryDetailScreen = ({ route }) => {
//   const { transaction } = route.params;

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Transaction Details</Text>
//         <Text style={styles.label}>ID:</Text>
//         <Text style={styles.value}>{transaction.id}</Text>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{transaction.date}</Text>
//         <Text style={styles.label}>Description:</Text>
//         <Text style={styles.value}>{transaction.description}</Text>
//         <Text style={styles.label}>Amount:</Text>
//         <Text style={styles.value}>{transaction.amount}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2B60DA',
//     padding: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

// export default TransactionHistoryDetailScreen;
