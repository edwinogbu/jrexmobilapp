import React, {useState, useRef, useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, StatusBar, useWindowDimensions, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ScrollView, TextInput as Textinput } from 'react-native-gesture-handler';

import { colors,parameters,title } from '../../global/styles'
import * as Animatable from 'react-native-animatable'

import * as Yup from 'yup';
// import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { LoginManager, AccessToken } from "react-native-fbsdk-next";


import { Button, SocialIcon, Alert} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';


import Header from '../../components/Header';
import COLORS from './../../global/LandingColors';
import { Formik } from 'formik';

import { SignInContext } from './../../contexts/authContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  auth, db,collection ,addDoc,setDoc, doc } from './../../../firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SignUpScreen({ navigation }) {
  const { signedIn, dispatchSignedIn, createUser, signIn, logout, user } = useContext(SignInContext);
  // const { signIn, signedIn } = useContext(SignInContext);
  const textInput1 = useRef(null);
  const textInput2 = useRef(null);

  const [textInput1Focussed, setTextInput1Focussed] = useState(false);
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Required'),
  });



async function SignUp(values) {
  try {
    const { firstName, lastName, phoneNumber, email, password } = values;

    // Create user account with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // User created successfully
    const user = userCredential.user;
    console.log("User signed up successfully!");

    // Save user data to Cloud Firestore
    const usersCollectionRef = collection(db, "users");

    const userData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };

    await addDoc(usersCollectionRef, userData);
    console.log("User data saved successfully");

    // Save user data to device storage
    const userDataString = JSON.stringify(userData);
    await AsyncStorage.setItem('userData', userDataString);
    console.log("User data saved to device storage");

    // Dispatch the signed-in user token
    if (user && user.uid) {
      dispatchSignedIn({ type: 'UPDATE_SIGN_IN', userToken: user.uid });
    } else {
      console.log("Unable to dispatch the signed-in user token.");
    }

    return userCredential;
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        console.log("The email address is already in use.");
        break;
      case "auth/invalid-email":
        console.log("The email address is not valid.");
        break;
      case "auth/weak-password":
        console.log("The password is too weak.");
        break;
      default:
        console.error(error);
    }
    throw error;
  }
}


  return(
    <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={100}>
    <View style={{...styles.container, backgroundColor:COLORS.white}}>
        <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
      
        <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
          <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Create Your Account Details</Text>
        </View> 
            
            {/* <Formik  initialValues={{ firstName: '', lastName: '', phoneNumber: '',  email: '',password: '' }} */}

      <Formik    initialValues={{ firstName: '', lastName: '', phoneNumber: '',  email: '',password: '', confirmPassword: '' }}
       validationSchema={validationSchema}     
       onSubmit={(values)=>{
        SignUp(values)
         console.log(values)
        }}
       
       >
      {(props)=>( 
        <View>
        <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
           <Icon  
             name="person"
             iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
             type="material"
             size={28}
             style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}

           />
        
        </Animatable.View>
         
        <TextInput 
            style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
             placeholder='First Name'
             ref = {textInput1}
               autoFocus={true}
               onChangeText = {props.handleChange('firstName')}
               value = {props.values.firstName}
              //  onChangeText = {props.handleChange(setFirstName)}
              //  value={props.values.firstName} 
          />

        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
            <Icon  
                name="person"
                iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
                type="material"
                size={28}
                style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}

            />
    
        </Animatable.View>
        </View>
        
        <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
           <Icon  
             name="person"
             iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
             type="material"
             size={28}
             style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}

           />
        
        </Animatable.View>
         
        <TextInput 
          style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
             placeholder='Sur Name'
            //  ref = {textInput2}
               autoFocus={false}
               onChangeText = {props.handleChange('lastName')}
               value = {props.values.lastName}
               

          />


        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
                    <Icon  
                        name="person"
                        iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
                        type="material"
                        size={28}
                        style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}

                    />
        
        </Animatable.View>
        </View>

        <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
           <Icon  
             name="phone"
             iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
             type="material"
             size={28}
             style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}

           />
        
        </Animatable.View>
         
        <TextInput 
          style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
             placeholder='Phone'
            //  ref = {textInput2}
               autoFocus={false}
               onChangeText = {props.handleChange('phoneNumber')}
               value = {props.values.phoneNumber}

          />


        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
            <Icon  
                name="phone"
                iconStyle = {{color:COLORS.primary, backgroundColor:COLORS.ligth, color:COLORS.white}}
                type="material"
                size={28}
                style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
            />
        </Animatable.View>
        </View>
         
        <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
           <Icon  
             name="email"
             iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
             type="material"
             size={28}
             style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}

           />
        
        </Animatable.View>
         
        <TextInput 
          style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
             placeholder='Email'
             ref = {textInput2}
               onFocus={()=>setTextInput2Focussed(false)}
               onBlur = {()=>setTextInput2Focussed(true)}
               onChangeText = {props.handleChange('email')}
               value = {props.values.email}
               editable={true}
          />

             {props.touched.email && props.errors.email && (
              <Text style={{ color: 'red' }}>{props.errors.email}</Text>
            )}
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
            <Icon  
                name="email"
                iconStyle = {{color:COLORS.primary, backgroundColor:COLORS.ligth, color:COLORS.white}}
                type="material"
                size={28}
                style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
            />
        </Animatable.View>
        </View>

        <View style={{...styles.TextInput2, backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10 }}>
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
           <Icon  
             name="lock"
             iconStyle = {{color:colors.grey3}}
             type="material"
             size={28}
             style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10, elevation:25}}

           />
        
        </Animatable.View>
         
        <TextInput 
         style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
             placeholder='password'
             ref = {textInput2}
               onFocus={()=>setTextInput2Focussed(false)}
               onBlur = {()=>setTextInput2Focussed(true)}
               onChangeText = {props.handleChange('password')}
               value = {props.values.password}

          />

             {props.touched.password && props.errors.password && (
              <Text style={{ color: 'red' }}>{props.errors.password}</Text>
            )}
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white}}>
            <Icon  
                name="visibility-off"
                iconStyle = {{color:COLORS.white,}}
                type="material"
                size={28}
                style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
            />
        </Animatable.View>
        </View>
       
        <View style={{...styles.TextInput2, backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10 }}>
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
           <Icon  
             name="lock"
             iconStyle = {{color:colors.grey3}}
             type="material"
             size={28}
             style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10, elevation:25}}

           />
        
        </Animatable.View>
         
        <TextInput 
          style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark, borderRadius:25, paddingVertical:18, marginLeft:10, paddingLeft:16,}}
             placeholder='confirmPassword'
             ref = {textInput2}
               onFocus={()=>setTextInput2Focussed(false)}
               onBlur = {()=>setTextInput2Focussed(true)}
               onChangeText = {props.handleChange('confirmPassword')}
               value = {props.values.confirmPassword}

          />
           {props.touched.confirmPassword && props.errors.confirmPassword && (
              <Text style={{ color: 'red' }}>{props.errors.confirmPassword}</Text>
            )}

             {props.touched.password && props.errors.password && (
              <Text style={{ color: 'red' }}>{props.errors.password}</Text>
            )}
        <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white}}>
            <Icon  
                name="visibility-off"
                iconStyle = {{color:COLORS.white,}}
                type="material"
                size={28}
                style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
            />
        </Animatable.View>
        </View>
       

        <View style={{marginHorizontal:15, marginVertical:20, marginTop:30, marginRight: 40,}}>
            <Button 
              title="CREATE MY ACCOUNT"
              buttonStyle = {parameters.styledButton}
              titleStyle ={parameters.buttonTitle}
              onPress={props.handleSubmit}
            />
        </View>
        </View>
           
         )}
        </Formik> 
 

        <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
            <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
        </View>
        

        <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Already Have Account?</Text>
        </View>

        <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
            <Button 
              title="SIGN IN"
              buttonStyle = {styles.createButton}
              titleStyle ={styles.buttonTitle}
              onPress={()=>{
                navigation.navigate("SignInScreen")
              }}
            />
        </View>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
        </ScrollView>
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
    }
})


