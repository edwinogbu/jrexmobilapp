import React, {useState, useRef, useEffect, useContext} from 'react';
import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity, Alert  } from 'react-native';
import { colors,parameters,title } from '../../global/styles'
import * as Animatable from 'react-native-animatable'

import * as Yup from 'yup';



import { Button, SocialIcon, } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';


import Header from '../../components/Header';
import COLORS from './../../global/LandingColors';
import { Formik } from 'formik';
import { SignInContext } from './../../contexts/authContext';

import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import {  auth, db , firestore, } from './../../../firebase/index';


import { signInWithPopup } from 'firebase/auth';


export default function SignInScreen({navigation}) {
  const { signedIn, dispatchSignedIn, createUser, logIn, logout, } = useContext(SignInContext);

const [textInput2Focussed, setTextInput2Focussed] = useState(false);
const textInput1 = useRef(1);
const textInput2 = useRef(2);
const [error, setError] = useState(null);
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


async function signIn(data) {
  const { email, password } = data;
  try {
    const userCredential = await logIn(email, password);
    const user = userCredential.user;
    console.log(user);
    dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: user.user.uid } });
    console.log('User signed in successfully!');
    alert('User signed in successfully!');
    return user;
  } catch (error) {
    const errorMessages = {
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/user-not-found': 'No user found with the provided email address.',
      'auth/invalid-email': 'The email address is not valid.',
      default: 'An error occurred. Please try again later.',
    };
    const message = errorMessages[error.code] || errorMessages.default;
    console.error(error);
    alert(message);
    throw error;
  }
}



return (
  <View style={{...styles.container, backgroundColor: COLORS.white}}>
    <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

    <View
      style={{
        alignItems: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
      }}>
      <Text
        style={{
          ...styles.primary,
          color: COLORS.primary,
          fontWeight: 'bold',
        }}>
        Please enter your email and password
      </Text>
      <Text
        style={{
          ...styles.primary,
          color: COLORS.primary,
          fontWeight: 'bold',
        }}>
        Login with your account details
      </Text>
    </View>

    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
          .min(6, 'Password should be at least 6 characters')
          .required('Required'),
      })}
      // onSubmit={(values) => {return signIn(values); }}
      onSubmit={(values) => signIn(values)}
      >
      {(props) => (
        <View>
          <View
            style={{
              ...styles.TextInput2,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: COLORS.primary,
            }}>
            <Animatable.View
              animation={textInput2Focussed ? '' : 'fadeInLeft'}
              duration={400}
              style={{
                backgroundColor: COLORS.primary,
                color: COLORS.white,
              }}>
              <Icon
                name="email"
                iconStyle={{
                  color: colors.grey3,
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                }}
          type="material"
          size={28}
          style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
        />
      </Animatable.View>

      <TextInput
        style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}        
        placeholder="Email"
        ref={textInput2}
        onFocus={() => setTextInput2Focussed(false)}
        onBlur={() => setTextInput2Focussed(true)}
        onChangeText={props.handleChange('email')}
        value={props.values.email}
      />
      {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

      <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
        <Icon
          name="email"
          iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
          type="material"
          size={28}
          style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
        />
      </Animatable.View>
    </View>

    <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
      <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
        <Icon
          name="lock"
          iconStyle={{color: colors.grey3}}
          type="material"
          size={28}
          style={{backgroundColor: COLORS.primary, color: COLORS.white}}
        />
      </Animatable.View>

      <TextInput
style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
        placeholder="Password"
        ref={textInput2}
        secureTextEntry
        onFocus={() => setTextInput2Focussed(false)}
        onBlur={() => setTextInput2Focussed(true)}
        onChangeText={props.handleChange('password')}
        value={props.values.password}
      />
      {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

      <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
        <Icon
          name="visibility-off"
          iconStyle={{color: COLORS.white}}
          type="material"
          size={28}
          style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
        />
      </Animatable.View>
    </View>


      <View style={{marginHorizontal:15, marginVertical:20, marginTop:10, marginRight: 40,}}>
      <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
          <Button 
            title="Sign In"
            buttonStyle = {parameters.styledButton}
            titleStyle ={parameters.buttonTitle}
            onPress={ props.handleSubmit }
          />
      </TouchableOpacity>
      </View>

      </View>
)
      }
    </Formik>
 
      <View style={{alignItems:"center", marginTop:2,}}>
          <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
      </View>
      <View style={{alignItems:"center", marginTop:1, marginBottom:3}}>
          <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
      </View>
      <View style={{marginHorizontal:10, marginVertical:5, marginTop:5, marginRight: 40,}}>
      {/* <TouchableOpacity onPress={onFacebookButtonPress}  > */}
          <SocialIcon 
          button
          title="Sign In with Facebook"
          type="facebook"
           style={styles.socialIcon}
          //  onPress={facebookSignIn}
           

          />
          {/* </TouchableOpacity> */}
      </View>
      <View style={{marginHorizontal:10, marginVertical:5, marginTop:2, marginRight: 40,}}>
      {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
      <TouchableOpacity
      //  onPress={googleSignIn}
         >
            <SocialIcon 
            button
            title="Sign In with Google"
            type="google"
             style={styles.socialIcon}
            //  onPress={googleSignIn}
            //  onClick={onGoogleButtonPress}
             
            />
          
      </TouchableOpacity>
      </View>
      <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
         <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
      </View>

      <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
          <Button 
            title="Create an Account"
            buttonStyle = {styles.createButton}
            titleStyle ={styles.buttonTitle}
            onPress={()=>{
              navigation.navigate("SignUpScreen")
            }}
          />
      </View>
  </View>
)
}



const styles = StyleSheet.create({
  container:{
      flex:1
  },
  text1:{
      color:colors.grey1,
      fontSize:16,

  },
  TextInput1: {
      borderWidth:1,
      borderColor:'#86939e',
      marginHorizontal:20,
      borderRadius:12,
      marginBottom: 20,
      paddingLeft:15,
      height: 50,
  },

  TextInput2: {
      borderWidth:1,
      borderRadius:12,
      marginHorizontal:20,
      borderColor:'#86939e',
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      paddingLeft:15,
      height: 50,

  },
  socialIcon:{
     
      justifyContent:"center" ,
      borderRadius:12,
      borderWidth:2,
      borderColor:'#ff8ccc',
      height: 55,
      marginHorizontal:20,
      width: "100%",
      marginRight: 30,
  },
  createButton:{
      backgroundColor:'white',
      justifyContent:'center',
      alignContent:'center',
      borderRadius:12,
      borderWidth:1,
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
  submitButton: {
    // backgroundColor: 'blue',
    // padding: 12,
    // width: '100%',
    // alignItems: 'center',
    // marginTop: 16,
    // justifyContent:'center',
    
  },
})




