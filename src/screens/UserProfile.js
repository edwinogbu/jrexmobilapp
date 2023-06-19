// import React, { useState } from 'react';
// import { ScrollView, SafeAreaView, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Divider, Snackbar } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { firestore } from '../components/config';
// import { setDoc, doc } from 'firebase/firestore';
// import { auth } from '../components/config';

// const UserProfile = () => {
//     const [userData, setUserData] = useState({
//         userName: '',
//         surname: '',
//         email: '',
//         address: '',
//         dob: new Date(),
//       });
//       const [showPicker, setShowPicker] = useState(false);
//       const [showSnackbar, setShowSnackbar] = useState(false);
//       const [snackbarMessage, setSnackbarMessage] = useState('');
    
//       const handleInputChange = (key, value) =>
//         setUserData((prevData) => ({ ...prevData, [key]: value }));
    
//       const handleDobChange = (event, selectedDate) => {
//         setShowPicker(false);
//         setUserData((prevData) => ({ ...prevData, dob: selectedDate || prevData.dob }));
//       };
    
// //   const handleSaveProfile = async () => {
// //     try {
// //       const docRef = doc(firestore, 'users', auth.currentUser.uid);
// //       await setDoc(docRef, userData, { merge: true });
// //       setSnackbarMessage('Profile saved successfully');
// //       setShowSnackbar(true);
// //     } catch (error) {
// //       console.log(error);
// //       setSnackbarMessage('Error saving profile');
// //       setShowSnackbar(true);
// //     }
// //   };

//   const handleSaveProfile = async () => {
//     try {
//       const user = firebase.auth().currentUser;
//       if (!user) {
//         throw new Error('User not authenticated.');
//       }
//       const docRef = doc(firestore, 'users', user.uid);
//       await setDoc(docRef, userData, { merge: true });
//       setSnackbarMessage('Profile saved successfully!');
//       setShowSnackbar(true);
//     } catch (error) {
//       setSnackbarMessage(`Error saving profile: ${error.message}`);
//       setShowSnackbar(true);
//     }
//   };
  

//   return (
//     <ScrollView>
//       <SafeAreaView style={{ flex: 1 }}>
//         <KeyboardAvoidingView
//           style={{ flex: 1 }}
//           behavior="padding"
//           keyboardVerticalOffset={100}
//         >
//           <View style={styles.profileCard}>
//             <View style={styles.container}>
//               <View style={{ ...styles.row, flex: 1, flexDirection: 'column' }}>
//                 <Divider style={styles.divider} />
//                 <View style={styles.row}>
//                   <Text style={styles.label}>First Name:</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={userData.userName}
//                     onChangeText={(value) => handleInputChange('userName', value)}
//                   />
//                 </View>
//                 <Divider style={styles.divider} />
//                 <View style={styles.row}>
//                   <Text style={styles.label}>Last Name:</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={userData.surname}
//                     onChangeText={(value) => handleInputChange('surname', value)}
//                   />
//                 </View>
//                 <Divider style={styles.divider} />
//                 <View style={styles.row}>
//                   <Text style={styles.label}>Email:</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={userData.email}
//                     onChangeText={(value) => handleInputChange('email', value)}
//                   />
//                 </View>
//                 <Divider style={styles.divider} />
//                 <View style={styles.row}>
//                   <Text style={styles.label}>Address:</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={userData.address}
//                     onChangeText={(value) => handleInputChange('address', value)}
//                   />
//                 </View>
//                 <Divider style={styles.divider} />
//                 <View style={styles.row}>
//                   <Text style={styles.label}>Date of Birth:</Text>
//                   <TouchableOpacity style={styles.datePicker} onPress={() => setShowPicker(true)}>
//                     <Text style={styles.dateText}>{userData.dob.toDateString()}</Text>
//                 </TouchableOpacity>
//                 {showPicker && (
//                 <DateTimePicker
//                                   value={userData.dob}
//                                   mode="date"
//                                   display="default"
//                                   onChange={handleDobChange}
//                                 />
// )}
// </View>
// <Divider style={styles.divider} />
// </View>
// <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
// <Text style={styles.saveButtonText}>Save Profile</Text>
// </TouchableOpacity>
// </View>
// </View>
// <Snackbar
// visible={showSnackbar}
// onDismiss={() => setShowSnackbar(false)}
// duration={3000}
// >
// {snackbarMessage}
// </Snackbar>
// </KeyboardAvoidingView>
// </SafeAreaView>
// </ScrollView>
// );
// };

// export default UserProfile;

// const Date = ({ userData, handleDobChange }) => {
// return <DateTimePicker value={userData.dob} mode="date" display="spinner" onChange={handleDobChange} />;
// };

// const styles = {
// profileCard: {
// margin: 20,
// borderWidth: 1,
// borderRadius: 5,
// borderColor: '#ddd',
// },
// container: {
// flex: 1,
// flexDirection: 'row',
// justifyContent: 'center',
// alignItems: 'stretch',
// padding: 10,
// },
// row: {
// flexDirection: 'row',
// justifyContent: 'flex-start',
// alignItems: 'center',
// padding: 10,
// },
// label: {
// flex: 1,
// fontSize: 16,
// fontWeight: 'bold',
// },
// input: {
// flex: 2,
// fontSize: 16,
// padding: 10,
// borderWidth: 1,
// borderRadius: 5,
// borderColor: '#ddd',
// },
// divider: {
// height: 1,
// backgroundColor: '#ddd',
// marginVertical: 10,
// },
// datePicker: {
// flex: 2,
// padding: 10,
// borderWidth: 1,
// borderRadius: 5,
// borderColor: '#ddd',
// alignItems: 'flex-start',
// },
// dateText: {
// fontSize: 16,
// },
// saveButton: {
// backgroundColor: 'green',
// borderRadius: 5,
// padding: 10,
// alignSelf: 'center',
// },
// saveText: {
// color: 'white',
// fontSize: 18,
// fontWeight: 'bold',
// },
// };




import React, { useRef } from 'react';
import { Paystack } from 'react-native-paystack-webview';
import { View, TouchableOpacity, Text } from 'react-native';

const UserProfile = () => {
  const paystackWebViewRef = useRef();

  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
        amount={25000.00}
        billingEmail="paystackwebview@something.com"
        ButtonText="Pay Now"
        showPayButton={true}
        showPayOption={true}
        channels={['card', 'bank', 'ussd']}
        currency="NGN"
        ref={paystackWebViewRef}
        activityIndicatorColor="green"
        SafeAreaViewContainer={{ marginTop: 25 }}
        SafeAreaViewContainerModal={{ marginTop: 25 }}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={false}
      />

      <TouchableOpacity onPress={() => paystackWebViewRef.current.startTransaction()}>
        <Text>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;



// import React, { useRef } from 'react';
// import { Paystack } from 'react-native-paystack-webview';
// import { View, TouchableOpacity, Text } from 'react-native';

// const UserProfile = () => {
//   const paystackWebViewRef = useRef();

//   return (
//     <View style={{ flex: 1 }}>
//       <Paystack
//         paystackKey="pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913"
//         amount={25000.00}
//         billingEmail="paystackwebview@something.com"
//         ButtonText="Pay Now"
//         showPayButton={true}
//         showPayOption={true}
//         channels={['card', 'bank', 'ussd']}
//         currency="NGN"
//         ref={paystackWebViewRef}
//         activityIndicatorColor="green"
//         SafeAreaViewContainer={{ marginTop: 25 }}
//         SafeAreaViewContainerModal={{ marginTop: 25 }}
//         onCancel={(e) => {
//           // handle response here
//         }}
//         onSuccess={(res) => {
//           // handle response here
//         }}
//         autoStart={false}
//       />

//       <TouchableOpacity onPress={() => paystackWebViewRef.current.startTransaction()}>
//         <Text>Pay</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default UserProfile;

