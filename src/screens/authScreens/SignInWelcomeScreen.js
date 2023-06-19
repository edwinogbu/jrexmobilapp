import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView,
  Animated,
  Image,
} from 'react-native';
import { SignInContext } from './../../contexts/authContext';
import { Icon, Header } from 'react-native-elements';
import { Ionicons, Entypo } from '@expo/vector-icons';
import  Swiper  from 'react-native-swiper';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  auth, db,collection ,addDoc,setDoc, doc } from './../../../firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { signInWithPopup } from 'firebase/auth';




const SignInWelcomeScreen = ({ navigation }) => {
  const {signIn, signUp, logIn, dispatchSignedIn, user, setUser} = useContext(SignInContext)

  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0.8,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const backgroundScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const validateName = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };
  
  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailError('Email is required');
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  
  const validatePhone = () => {
    if (phone.trim() === '') {
      setPhoneError('Phone is required');
    } else if (!/^\d{11}$/.test(phone)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };
  
  const validatePassword = () => {
    if (password.trim() === '') {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSignUp = async () => {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();

    if (nameError === '' && emailError === '' && phoneError === '' && passwordError === '') {
      try {
        const user = await signUp(name, email, phone, password);
        console.log(user);
        // User successfully signed up, setUser to update the user state in context
        setUser({
          name,
          email,
          phone,
          password
        });
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setSignUpModalVisible(false);
      } catch (error) {
        console.log('Sign up error:', error);
      }
    }
  };

  const handleSignIn = () => {
    validateName();
    validatePassword();

    if (emailError === '' && passwordError === '') {
      signIn(email, password);
      setEmail('');
      setPassword('');
      setSignInModalVisible(false);
    }
  };

  const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
// console.log(formattedDate);

// async function signUp(values) {
//   try {
//     const { firstName, lastName, phoneNumber, email, password } = values;

//     // Create user account with Firebase Authentication
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // User created successfully
//     const user = userCredential.user;
//     console.log("User signed up successfully!");

//     // Save user data to Cloud Firestore
//     const usersCollectionRef = collection(db, "users");

//     const userData = {
//       firstName: firstName,
//       lastName: lastName,
//       phoneNumber: phoneNumber,
//       email: email,
//     };

//     await addDoc(usersCollectionRef, userData);
//     console.log("User data saved successfully");

//     // Save user data to device storage
//     const userDataString = JSON.stringify(userData);
//     await AsyncStorage.setItem('userData', userDataString);
//     console.log("User data saved to device storage");

//     // Dispatch the signed-in user token
//     if (user && user.uid) {
//       dispatchSignedIn({ type: 'UPDATE_SIGN_IN', userToken: user.uid });
//     } else {
//       console.log("Unable to dispatch the signed-in user token.");
//     }

//     return userCredential;
//   } catch (error) {
//     switch (error.code) {
//       case "auth/email-already-in-use":
//         console.log("The email address is already in use.");
//         break;
//       case "auth/invalid-email":
//         console.log("The email address is not valid.");
//         break;
//       case "auth/weak-password":
//         console.log("The password is too weak.");
//         break;
//       default:
//         console.error(error);
//     }
//     throw error;
//   }
// }


// async function signIn(data) {
//   const { email, password } = data;
//   try {
//     const userCredential = await logIn(email, password);
//     const user = userCredential.user;
//     console.log(user);
//     dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: user.user.uid } });
//     console.log('User signed in successfully!');
//     alert('User signed in successfully!');
//     return user;
//   } catch (error) {
//     const errorMessages = {
//       'auth/wrong-password': 'Incorrect password. Please try again.',
//       'auth/user-not-found': 'No user found with the provided email address.',
//       'auth/invalid-email': 'The email address is not valid.',
//       default: 'An error occurred. Please try again later.',
//     };
//     const message = errorMessages[error.code] || errorMessages.default;
//     console.error(error);
//     alert(message);
//     throw error;
//   }
// }




  return (
    <SafeAreaView style={styles.container}>
<Header
  containerStyle={{ backgroundColor: '#2B60DA' }}
  centerComponent={{ text: ` ${'CALL:08023456776'}`, style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
  leftComponent={
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ fontWeight: 'bold', fontSize: 22 }}>
      <Ionicons name="ios-arrow-back" size={14} color="#fff" />
      <Text style={{ color: '#fff', marginLeft: 21, fontSize: 15, fontWeight: 'bold' }}>Back</Text>
    </TouchableOpacity>
  }
  rightComponent={
    <View style={styles.timerContainer}>
      <Entypo name="mail" size={20} color="#fff" />
      <Text style={{ ...styles.timerText, color: '#FFF', fontWeight: 'bold', fontSize: 14 }}>{` jrex@gmail.com`}</Text>
    </View>
  }
/>

             <Image source={require('./../../../assets/images/logo.png')} style={styles.logo} />

      {/* <ImageBackground
        source={require('./../../assets/images/shop-1.jpg')}
        style={styles.backgroundContainer}
      > */}
      <View style={styles.headerContainer}>
  <Text style={styles.headerText}>West or East…</Text>
  <Text style={styles.headerText}>We are the Purest.</Text>
</View>

<View style={styles.swiperContainer}>
<Swiper autoplay={true}  style={styles.wrapper} showsButtons={true}>

<View style={styles.slide1}>
    <Image
    
    source={require("../../../assets/images/shop-2.jpg")}
    style={{height:'100%', width:'100%'}}
    />
 </View>
<View style={styles.slide2}>
    <Image
     source={require("../../../assets/images/service-1.png")}

    style={{height:'100%', width:'100%'}}
    />
 </View>
<View style={styles.slide3}>
    <Image
     source={require("../../../assets/images/shop-1.jpg")}

    style={{height:'100%', width:'100%'}}
    />
 </View>

</Swiper>
</View>



        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSignUpModalVisible(true)}
            activeOpacity={0.7}
            onPressIn={startAnimation}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setSignInModalVisible(true)}
            activeOpacity={0.7}
            onPressIn={startAnimation}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      {/* </ImageBackground> */}


      {/* Sign Up Modal */}
      <Modal animationType="slide" transparent={true} visible={signUpModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSignUpModalVisible(false)}
              activeOpacity={0.7}
            >
              <Ionicons name="close-circle-outline" size={40} color="#2B60DA" style={{padding:8, fontWeight:20, }} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              onBlur={validateName}
            />
            {nameError !== '' && <Text style={styles.errorText}>{nameError}</Text>}
            <TextInput
              style={styles.input}
              placeholder="email"
              value={email}
              onChangeText={setEmail}
              onBlur={validateEmail}
            />
            {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              onBlur={validatePhone}
            />
            {phoneError !== '' && <Text style={styles.errorText}>{phoneError}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              onBlur={validatePassword}
            />
            {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSignUp}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </Modal>

      {/* Sign In Modal */}
      <Modal animationType="slide" transparent={true} visible={signInModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSignInModalVisible(false)}
              activeOpacity={0.7}
            >
              <Ionicons name="close-circle-outline" size={35} color="#2B60DA" style={{padding:10, fontWeight:20,}} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Sign In</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              onBlur={validateEmail}
            />
            {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              onBlur={validatePassword}
            />
            {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSignIn}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2B60DA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 20,
    borderColor:'red',
    borderWidth:5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 3,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor:'#CCC',
    fontWeight:'900'
  },
  modalButton: {
    backgroundColor: '#2B60DA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,

  },
  closeButton: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  backgroundContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 'auto',
    marginBottom: 95,
  },

  button: {
    backgroundColor: '#2B60DA',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 100,
    marginVertical: 12,
    marginHorizontal: 10,
    borderColor:'#00FCF0',
    borderWidth:5,
    
  },
  logo: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    color:'#2B60DA',
    fontWeight: 'bold',
  },
  swiperContainer: {
    flex: 4,
    justifyContent: 'center',
    marginBottom: 0,
    marginTop: 2,
  },
  swiper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92BBD9',
  },
  slideImage: {
    height: '100%',
    width: '100%',
  },

});

export default SignInWelcomeScreen;
