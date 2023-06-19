// import React from 'react';
// import { View, Text } from 'react-native';
// import { PayWithFlutterwave } from 'flutterwave-react-native';

// interface RedirectParams {
//   status: 'successful' | 'cancelled';
//   transaction_id?: string;
//   tx_ref: string;
// }

// /* An example function called when transaction is completed successfully or canceled */
// const handleOnRedirect = (data: RedirectParams) => {
//   console.log(data);
// };

// /* An example function to generate a random transaction reference */
// const generateTransactionRef = (length: number) => {
//   var result = '';
//   var characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return `flw_tx_ref_${result}`;
// };

// export default function FlutterPaymentScreen() {
//   return (
//     <View>
//       <Text>FlutterPaymentScreen</Text>
//       <PayWithFlutterwave
//         onRedirect={handleOnRedirect}
//         options={{
//           tx_ref: generateTransactionRef(10),
//           authorization: '[merchant public key]',
//           customer: {
//             email: 'customer-email@example.com',
//           },
//           amount: 2000,
//           currency: 'NGN',
//           payment_options: 'card',
//         }}
//       />
//     </View>
//   );
// }
