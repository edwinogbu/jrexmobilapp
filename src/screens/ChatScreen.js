// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Linking } from 'react-native';

// const ChatScreen = () => {
//   const [message, setMessage] = useState('');

//   const handleSendWhatsAppMessage = () => {
//     const phoneNumber = '1234567890'; // Replace with the recipient's phone number
//     const url = `whatsapp://send?text=${message}&phone=${phoneNumber}`;
//     Linking.canOpenURL(url)
//       .then((supported) => {
//         if (!supported) {
//           console.log(`WhatsApp is not installed on your device.`);
//         } else {
//           return Linking.openURL(url);
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <View>
//       <Text>Enter your message:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         onChangeText={(text) => setMessage(text)}
//         value={message}
//       />
//       <Button title="Send message" onPress={handleSendWhatsAppMessage} />
//     </View>
//   );
// };

// export default ChatScreen;


import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { updateProfile, updateEmail } from "firebase/auth";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TextInput, StyleSheet, Button, Alert, ScrollView, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveDetails = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('User not found');
      }
      // update user display name and email
      const updatePromises = [];
      if (firstName || lastName) {
        updatePromises.push(updateProfile(currentUser, { displayName: `${firstName} ${lastName}` }));
      }
      if (email) {
        updatePromises.push(updateEmail(currentUser, email));
      }
      await Promise.all(updatePromises);
      // update user data in Firestore
      const usersCollectionRef = collection(db, 'users');
      const userDocRef = email ? doc(usersCollectionRef, email) : doc(usersCollectionRef, currentUser.uid);
      const userData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        updatedAt: new Date().toISOString()
      };
      await setDoc(userDocRef, userData, { merge: true });
      // show success message
      Alert.alert('Success', 'Your account information has been updated successfully');
    } catch (error) {
      // show error message
      Alert.alert('Error', error.message);
    }
  };
  const ProfileCard = ()=>{
    return(
      <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
   
     <TouchableOpacity onPress={handleSaveDetails} style={styles.createButton}>
          <Text style={styles.buttonTitle}>Update User</Text>
     </TouchableOpacity>

        </View>
      </View>
      </View>
    );

  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {ProfileCard()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B60DA',
    padding: 20,
  },
  cardContainer:{
    flex:1,
    backgroundColor:'4CAF50',
    shadowColor:'#4CAF50',
    padding:20,
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
    width:300,
    height:350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContainer: {
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  createButton:{
    backgroundColor:'white',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:12,
    borderWidth:2,
    borderColor:'#2B60DA',
    height: 50,
    paddingHorizontal:15,
},
buttonTitle:{
    color:"#2B60DA",
    fontSize:20,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:"center" ,
    marginTop:-3 ,
},

text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

});

export default SignUpScreen;




// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
// import SendIntentAndroid from 'react-native-send-intent';


// const ChatScreen = ({ phoneNumber='+2348165688038', message = 'Chat With Our Agent' }) => {
//   const sendWhatsAppMessage = async () => {
//     try {
//       const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//       await SendIntentAndroid.openURL(url);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>

//     <TouchableOpacity onPress={sendWhatsAppMessage} style={styles.createButton}>
//       <Text style={styles.buttonTitle}>Send WhatsApp Message</Text>
//     </TouchableOpacity>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         marginVertical:2,
//     },
  
    // createButton:{
    //     backgroundColor:'white',
    //     justifyContent:'center',
    //     alignContent:'center',
    //     borderRadius:12,
    //     borderWidth:2,
    //     borderColor:'#2B60DA',
    //     height: 50,
    //     paddingHorizontal:15,
    // },
    // buttonTitle:{
    //     color:"#2B60DA",
    //     fontSize:20,
    //     fontWeight: 'bold',
    //     alignItems:'center',
    //     justifyContent:"center" ,
    //     marginTop:-3 ,
    // },

    // text: {
    //     color: '#fff',
    //     fontSize: 30,
    //     fontWeight: 'bold'
    //   },

      
//     });

// export default ChatScreen;




// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     const messagesListener = firestore().collection('messages').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
//       const messages = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setMessages(messages);
//     });

//     return () => messagesListener();
//   }, []);

//   const handleSend = async () => {
//     if (text.trim()) {
//       const message = {
//         text,
//         user: auth().currentUser.uid,
//         createdAt: new Date().toISOString()
//       };
//       await firestore().collection('messages').add(message);
//       setText('');
//     }
//   };

//   const renderMessage = ({ item }) => {
//     return (
//       <View style={item.user === auth().currentUser.uid ? styles.sentMessage : styles.receivedMessage}>
//         <Text style={styles.messageText}>{item.text}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         style={styles.messagesList}
//         data={messages}
//         renderItem={renderMessage}
//         inverted
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Type your message here"
//           value={text}
//           onChangeText={setText}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   messagesList: {
//     flex: 1,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   textInput: {
//     flex: 1,
//     height: 40,
//     backgroundColor: '#f2f2f2',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#2B60DA',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   sentMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#2B60DA',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     maxWidth: '80%',
//   },
//   receivedMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     maxWidth: '80%',
//   },
//   messageText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { onSnapshot, doc, docs } from '@react-native-firebase/firestore';
// import { db ,  collection, addDoc,} from '../../firebase';
// import { renderer } from 'react-test-renderer';

// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

// //   const auth = getAuth();
//   const messagesRef = collection(db, 'messages');

//   useEffect(() => {
//     const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
//       const data = snapshot.docs.map((doc) => doc.data());
//       setMessages(data);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handleSendMessage = async () => {
//     try {
//       const messageData = {
//         message: newMessage,
//         timestamp: Date.now(),
//         user: auth.currentUser.uid,
//       };
//       await addDoc(messagesRef, messageData);
//       setNewMessage('');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <View style={{ flex: 1 }}>
//         {messages.map((message, index) => (
//           <View key={index} style={{ marginBottom: 10 }}>
//             <Text style={{ fontWeight: 'bold' }}>{message.message}</Text>
//             <Text>{new Date(message.timestamp).toLocaleString()}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TextInput
//           style={{ flex: 1, marginRight: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
//           value={newMessage}
//           onChangeText={(text) => setNewMessage(text)}
//         />
//         <TouchableOpacity
//           style={{ backgroundColor: '#1e90ff', padding: 10, borderRadius: 5 }}
//           onPress={handleSendMessage}
//         >
//           <Text style={{ color: '#fff' }}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ChatScreen;
