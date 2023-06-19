// import React from 'react';
// import { View, Text, TouchableOpacity, Share, StyleSheet } from 'react-native';


// export default function CustomerReceiptScreen({ route }) {
//   const { email, address, phone, items, totalAmount, paymentStatus } = route.params;
      

//   const handleShare = async () => {
//     try {
//       const receiptText = `Email: ${email}\nAddress: ${address}\nPhone: ${phone}\nTotal Amount: ${totalAmount}\nPayment Status: ${paymentStatus}\n\nItems:\n${items.map(item => `${item.product.name} x ${item.qty}`).join('\n')}`;
//       await Share.share({
//         message: receiptText,
//       });
//     } catch (error) {
//       console.log('Error sharing:', error);
//     }
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Customer Receipt</Text>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailTitle}>User Details:</Text>
//         <Text>Email: {email}</Text>
//         <Text>Address: {address}</Text>
//         <Text>Phone: {phone}</Text>
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailTitle}>Items:</Text>
//         {items.map((item, index) => (
//           <View key={index} style={styles.itemContainer}>
//             <Text>{item.name}</Text>
//             <Text>Quantity: {item.quantity}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailTitle}>Payment Status: {paymentStatus}</Text>
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailTitle}>Total Amount: &#8358;{totalAmount}</Text>
//       </View>

//       {/* Share button */}
//       <View style={styles.shareButtonContainer}>
//         <TouchableOpacity onPress={handleShare}>
//           <Text style={styles.shareButtonText}>Share Receipt</Text>
//         </TouchableOpacity>
//       </View>
   


          
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     marginBottom: 20,
//   },
//   detailTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   shareButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   shareButtonText: {
//     backgroundColor: '#2B60DA',
//     color: '#FFF',
//     fontWeight: 'bold',
//     margin: 10,
//     fontSize: 16,
//     paddingVertical: 10,

//     padding: 10,
//     marginHorizontal: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { View, Text, TouchableOpacity, Share, StyleSheet } from 'react-native';

export default function CustomerReceiptScreen({ route, navigation }) {
  const { email, address, phone, items, totalAmount, paymentStatus } = route.params;

  const handleShare = async () => {
    try {
      const receiptText = `Email: ${email}\nAddress: ${address}\nPhone: ${phone}\nTotal Amount: ${totalAmount}\nPayment Status: ${paymentStatus}\n\nItems:\n${items
        .map((item) => `${item.product.name} x ${item.qty}`)
        .join('\n')}`;
      await Share.share({
        message: receiptText,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Receipt</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>User Details:</Text>
        <Text>Email: {email}</Text>
        <Text>Address: {address}</Text>
        <Text>Phone: {phone}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Items:</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={{fontWeight:'900'}}>{item.product.name}</Text>
            <Text style={{fontWeight:'900'}}>Quantity: {item.qty}</Text>
          </View>
        ))}
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Payment Status: {paymentStatus}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Total Amount: &#8358;{totalAmount}</Text>
      </View>

      {/* Share button */}
      <View style={styles.shareButtonContainer}>
        <TouchableOpacity onPress={handleShare}>
          <Text style={styles.shareButtonText}>Share Receipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  shareButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  shareButtonText: {
    backgroundColor: '#2B60DA',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
});
