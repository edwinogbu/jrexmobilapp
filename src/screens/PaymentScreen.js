// import React, { useRef } from 'react';
// import { Paystack } from 'react-native-paystack-webview';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import COLORS from './../global/LandingColors';

// export default function PaymentScreen({ route, navigation }) {
//   const { cartInformation } = route.params;

//   const paystackWebViewRef = useRef(null); 

//   return (
//     <View style={{...styles.container, marginHorizontal:15}}>
//       <Paystack
//         paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
//         billingEmail="edwinogbua@gmail.com"
//         billingMobile="08165688038"
//         billingName="Eddy"
//         currency="NG"
//         amount={cartInformation.totalAmount * 100}
//         onCancel={(e) => {
//           console.log(e)
//         }}
//         onSuccess={(res) => {
//           console.log(res)
//         }}
//         ref={paystackWebViewRef}
//       />
//       <TouchableOpacity
//         onPress={() => paystackWebViewRef.current.startTransaction()}
//         style={styles.paystack}
//       >
//         <Text style={styles.pay}>Pay Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   paystack:{
//     minWidth:"60%",
//     backgroundColor:"#f9A826",
//     padding:10,
//     borderRadius:15,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   pay:{
//     color:COLORS.white,
//   },
// });

// import PaystackWebView from 'react-native-paystack';

// export default function PaymentScreen({ route, navigation }) {
//   const { cartInformation } = route.params;

//   const handlePaymentSuccess = (response) => {
//     // Handle payment success
//     console.log(response);
//   };

//   const handlePaymentError = (error) => {
//     // Handle payment error
//     console.log(error);
//   };

//   const handlePaymentClose = () => {
//     // Handle payment close
//     console.log('Payment closed');
//   };

//   return (
//     <PaystackWebView
//       ref={(ref) => {
//         this.paystackWebView = ref;
//       }}
//       paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
//       amount={cartInformation.totalAmount * 100} // Paystack expects amount in kobo (100 kobo = 1 naira)
//       billingEmail="edwinogbua@gmail.com"
//       billingMobile="08165688038"
//       billingName="Edwin Ogbu"
//       channels={['card', 'bank']}
//       activityIndicatorColor="green"
//       onCancel={handlePaymentClose}
//       onSuccess={handlePaymentSuccess}
//       onError={handlePaymentError}
//       autoStart={false} // Set this to true if you want the payment screen to automatically open
//     />
//   );
// }

// function handleCheckout() {
//   const cartInformation = {
//     items: items,
//     totalAmount: totalAmount,
//   };
//   navigation.navigate('PaymentScreen', { cartInformation });
//   this.paystackWebView.startTransaction();
// }




import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import PaystackButton from 'react-native-paystack';

const App = () => {
  const publicKey = "pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Amount</Text>
        <Text>{amount}</Text>
      </View>
      <View style={styles.checkoutForm}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Phone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(text)}
        />
        <PaystackButton {...componentProps} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkoutForm: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
};

export default App;
