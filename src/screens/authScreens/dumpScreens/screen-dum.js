
// // import React, {  useState } from 'react';
// import React, {useState, useRef, useContext, useCallback, useEffect,} from 'react';
// import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// import { colors,parameters,title } from '../../../global/styles'
// import * as Animatable from 'react-native-animatable'
// // import auth from '@react-native-firebase/auth';
// import * as Yup from 'yup';


// import { Button, SocialIcon, } from 'react-native-elements'

// import Icon from 'react-native-vector-icons/MaterialIcons';


// import Header from '../../../components/Header';
// import COLORS from '../../../global/LandingColors';
// import { Formik } from 'formik';
// import { SignInContext } from '../../../contexts/authContext';

// import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// import {provider, auth} from '../../../components/config.jsx'
// import { signInWithPopup } from 'firebase/auth';
// import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
// import { AccessToken, LoginManager } from 'react-native-fbsdk';


// import firebase from 'firebase/app';
// import 'firebase/auth';

// export default function SignInScreen({navigation}) {
  
//   // const {dispatchSignedIn} = useContext(SignInContext)
//   // const {dispatchSignedIn, dispatchedSignUp} = useContext(SignInContext);
//   const { signedIn, dispatchSignedIn } = useContext(SignInContext);

//   const [textInput2Focussed, setTextInput2Focussed] = useState(false);
//   const textInput1 = useRef(null);
//   const textInput2 = useRef(null);

//   // function onGoogleButtonPress() {
//   //   signInWithPopup(auth, provider)
//   //     .then((result) => {
//   //       const user = result.user;
//   //       alert(user.displayName);
//   //     })
//   //     .catch((error) => {
//   //       const errorCode = error.code;
//   //       const errorMessage = error.message;
//   //       const email = error.email;
//   //       const credential = GoogleAuthProvider.credentialFromError(error);
//   //       console.log(errorMessage);
//   //     });
//   // }

//   // async function onGoogleButtonPress() {
//   //   const provider = new firebase.auth.GoogleAuthProvider();
//   //   const auth = firebase.auth();
    
//   //   auth.signInWithPopup(provider)
//   //     .then((result) => {
//   //       const user = result.user;
//   //       alert(user.displayName);
//   //     })
//   //     .catch((error) => {
//   //       const errorCode = error.code;
//   //       const errorMessage = error.message;
//   //       const email = error.email;
//   //       const credential = GoogleAuthProvider.credentialFromError(error);
//   //       console.log(errorMessage);
//   //     });
//   // }



// // Set up Google Sign-In
// // GoogleSignin.configure({
// //   webClientId: '295534415338-mpguqqcmdn8uasvb60v6tsm2pthqj1ii.apps.googleusercontent.com', // Replace with your own web client ID
// // });
// // working
// // async function onGoogleButtonPress() {
// //   try {
    
// //     const { idToken } = await GoogleSignin.signIn();
// //     console.log('Hello');
// //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// //     console.log(googleCredential);
// //     const user = await auth().signInWithCredential(googleCredential);
// //     if (user) {
// //       console.log(user);
// //       dispatchSignedIn({
// //         type: 'UPDATE_SIGN_IN',
// //         payload: {userToken: 'signed-in'},
// //       });
// //       console.log('Google User signed in successfully!');
// //     }
// //     return user;
// //     Alert.alert('Success', 'Google sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Google sign-in failed');
// //   }
// // }



// // async function onGoogleButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     const { idToken } = await GoogleSignin.signIn();
// //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// //     const userCredential = await auth().signInWithCredential(googleCredential);
// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Google sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Google sign-in failed');
// //   }
// // }



// // const handleGoogleSignIn = async () => {
// //   const userToken = await googleSignIn();
// //   if (userToken) {
// //     dispatchSignedIn({ type: 'GOOGLE_SIGN_IN', payload: { userToken } });
// //   }
// // };

// // const handleFacebookSignIn = async () => {
// //   const userToken = await facebookSignIn();
// //   if (userToken) {
// //     dispatchSignedIn({ type: 'FACEBOOK_SIGN_IN', payload: { userToken } });
// //   }
// // };






// // const FacebookSignIn = () => {
// //   const [user, setUser] = useState(null);

// //   const facebookSignIn = useCallback(async () => {
// //     try {
// //       const provider = new firebase.auth.FacebookAuthProvider();
// //       const result = await firebase.auth().signInWithPopup(provider);

// //       setUser(result.user);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }, []);

// // }



// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Facebook sign-in failed');
// //   }
// // }

  

//   async function signIn(data) {
//     const {email, password} = data;
//     try {
//       const user = await signInWithEmailAndPassword(auth, email, password);
//       if (user) {
//         console.log(user);
//         dispatchSignedIn({
//           type: 'UPDATE_SIGN_IN',
//           payload: {userToken: 'signed-in'},
//         });
//         console.log('User signed in successfully!');
//       }
//       return user;
//     } catch (error) {
//       switch (error.code) {
//         case 'auth/wrong-password':
//           console.log('Incorrect password. Please try again.');
//           break;
//         case 'auth/user-not-found':
//           console.log('No user found with the provided email address.');
//           break;
//         case 'auth/invalid-email':
//           console.log('The email address is not valid.');
//           break;
//         default:
//           console.error(error);
//       }
//       throw error;
//     }
//   }

    
//   return(
//     <View style={{...styles.container, backgroundColor:COLORS.white}}>
//         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
//         {/* <View style={{marginLeft:20, marginTop:5,fontSize:20,fontWeight: 'bold'}}>
//           <Text style={title}>Welcome pls Sign In</Text>
//         </View> */}

//         <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
//            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>please enter the mail and password</Text>
//            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Login with your account Details</Text>          
//         </View>

//         <Formik
//   initialValues={{email: '', password: ''}}
//   validationSchema={Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required')
//   })}
//   onSubmit={(values) => {
//     signIn(values);
//   }}
// >
//   {(props) => (
//     <View>
//       <View style={{...styles.TextInput2, marginTop: 10, marginBottom: 10, backgroundColor: COLORS.primary}}>
//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//             <Icon
//               name="email"
//               iconStyle={{color: colors.grey3, backgroundColor: COLORS.primary, color: COLORS.white}}
//               type="material"
//               size={28}
//               style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
//             />

//         </Animatable.View>

//         <TextInput
//           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
//           placeholder="Email"
//           ref={textInput2}
//           onFocus={() => setTextInput2Focussed(false)}
//           onBlur={() => setTextInput2Focussed(true)}
//           onChangeText={props.handleChange('email')}
//           value={props.values.email}
//           editable={true}
//         />
//         {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

//         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//           <Icon
//             name="email"
//             iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
//             type="material"
//             size={28}
//             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
//           />
//         </Animatable.View>
//       </View>

//       <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
//         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//           <Icon
//             name="lock"
//             iconStyle={{color: colors.grey3}}
//             type="material"
//             size={28}
//             style={{backgroundColor: COLORS.primary, color: COLORS.white}}
//           />
//         </Animatable.View>

//         <TextInput
//           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
//           placeholder="Password"
//           ref={textInput2}
//           secureTextEntry
//           onFocus={() => setTextInput2Focussed(false)}
//           onBlur={() => setTextInput2Focussed(true)}
//           onChangeText={props.handleChange('password')}
//           value={props.values.password}
//           editable={true}
//         />
//         {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

//         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//           <Icon
//             name="visibility-off"
//             iconStyle={{color: COLORS.white}}
//             type="material"
//             size={28}
//             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
//           />
//         </Animatable.View>
//       </View>


//         <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
//         <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
//             <Button 
//               title="Sign In"
//               buttonStyle = {parameters.styledButton}
//               titleStyle ={parameters.buttonTitle}
//               onPress={ props.handleSubmit }
//             />
//         </TouchableOpacity>
//         </View>

//         </View>
//   )
//         }
//       </Formik>
   
//         <View style={{alignItems:"center", marginTop:2,}}>
//             <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
//         </View>
//         <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
//             <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
//         </View>
//         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//             <SocialIcon 
//             button
//             title="Sign In with Facebook"
//             type="facebook"
//              style={styles.socialIcon}
//              onPress={onFacebookButtonPress}
             
//             />
//         </View>
        
//         {/* <View style={{ marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//         <TouchableOpacity style={styles.googleBtn} onPress={onGoogleButtonPress}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <GoogleSigninButton
//             size={GoogleSigninButton.Size.Wide}
//             color={GoogleSigninButton.Color.Light}
//           />
//           <Text style={styles.googleBtnText}>Sign in with Google</Text>
//         </View>
//       </TouchableOpacity> */}

//           {/* </View> */}
//         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//             <SocialIcon 
//             button
//             title="Sign In with Google"
//             type="google"
//              style={styles.socialIcon}
//             //  onPress={onGoogleButtonPress}
//             //  onClick={onGoogleButtonPress}
             
//             />
//         </View>
//         {/* <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//         {signedIn.userToken ? (
//           <Button title="Sign Out" onPress={() => dispatchSignedIn({ type: 'SIGN_OUT' })} />
//         ) : (
//           <>
//             <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
//             <Button title="Sign In with Facebook" onPress={handleFacebookSignIn} />
//           </>
//         )} */}
//       {/* </View> */}

//         <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
//            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
//         </View>

//         <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
//             <Button 
//               title="Create an Account"
//               buttonStyle = {styles.createButton}
//               titleStyle ={styles.buttonTitle}
//               onPress={()=>{
//                 navigation.navigate("SignUpScreen")
//               }}
//             />
//         </View>
//     </View>
//   )
// }



// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },
//     text1:{
//         color:colors.grey1,
//         fontSize:16,

//     },
//     TextInput1: {
//         borderWidth:1,
//         borderColor:'#86939e',
//         marginHorizontal:20,
//         borderRadius:12,
//         marginBottom: 20,
//         paddingLeft:15,
//         height: 50,
//     },

//     TextInput2: {
//         borderWidth:1,
//         borderRadius:12,
//         marginHorizontal:20,
//         borderColor:'#86939e',
//         flexDirection:'row',
//         justifyContent:'center',
//         alignContent:'center',
//         alignItems:'center',
//         paddingLeft:15,
//         height: 50,

//     },
//     socialIcon:{
       
//         justifyContent:"center" ,
//         borderRadius:12,
//         borderWidth:2,
//         borderColor:'#ff8ccc',
//         height: 55,
//         marginHorizontal:20,
//         width: "100%",
//         marginRight: 30,
//     },
//     createButton:{
//         backgroundColor:'white',
//         justifyContent:'center',
//         alignContent:'center',
//         borderRadius:12,
//         borderWidth:1,
//         borderColor:'#2B60DA',
//         height: 50,
//         paddingHorizontal:15,
//     },
//     buttonTitle:{
//         color:"#2B60DA",
//         fontSize:20,
//         fontWeight: 'bold',
//         alignItems:'center',
//         justifyContent:"center" ,
//         marginTop:-3 ,
//     },
//     submitButton: {
//       // backgroundColor: 'blue',
//       padding: 12,
//       // width: '100%',
//       alignItems: 'center',
//       marginTop: 16,
//       justifyContent:'center'
//     },
//     googleBtn: {
//       backgroundColor: 'white',
//       height: 50,
//       width: 200,
//       alignSelf: 'center',
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: 'grey',
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginVertical: 10,
//     },
//     googleBtnText: {
//       color: 'black',
//       fontWeight: 'bold',
//       fontSize: 16,
//       marginLeft: 10,
//     },
// })






// // import React, {useState, useRef, useContext} from 'react';
// // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // import { colors,parameters,title } from '../../global/styles'
// // import * as Animatable from 'react-native-animatable'
// // // import auth from '@react-native-firebase/auth';
// // import * as Yup from 'yup';


// // import { Button, SocialIcon, } from 'react-native-elements'
// // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // import Icon from 'react-native-vector-icons/MaterialIcons';


// // import Header from '../../components/Header';
// // import COLORS from './../../global/LandingColors';
// // import { Formik } from 'formik';
// // import { SignInContext } from './../../contexts/authContext';

// // // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // // import {provider} from '../../components/config.jsx'
// // // import {provider, auth} from '../../components/config.jsx'

// // // import { signInWithPopup } from 'firebase/auth';
// // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // import {provider, auth} from '../../components/config.jsx'
// // import { signInWithPopup } from 'firebase/auth';
// // import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';


// // export default function SignInScreen({navigation}) {
  
  
// // // Set up Google Sign-In
// // GoogleSignin.configure({
// //   webClientId: '295534415338-mpguqqcmdn8uasvb60v6tsm2pthqj1ii.apps.googleusercontent.com', // Replace with your own web client ID
// // });
// //   // const {dispatchSignedIn} = useContext(SignInContext)
// //   const { dispatchSignedIn, dispatchedSignUp } = useContext(SignInContext);

// //     const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// //     const textInput1= useRef(1);
// //     const textInput2= useRef(2);
    
// //     function onGoogleButtonPress() {
// //       signInWithPopup(auth, provider)
// //       .then((result)=>{
// //         const { idToken } = GoogleSignin.signIn();
// //         const credential = GoogleAuthProvider.credentialFromResult(result);
// //         const token = credential.accessToken;
// //         user = result.user; 
// //         alert(user, displayName)
// //       }).catch((error)=>{
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         const email = error.email;
// //         const credential = GoogleAuthProvider.credentialFromError(error);
// //         console.log(errorMessage);
// //       });
// //     }
// //     // async function signIn(data) {
// //     //   const { email, password } = data;
// //     //   try {
// //     //     const user = await auth().signInWithEmailAndPassword(email, password);
// //     //     if (user) {
// //     //       console.log(user);
// //     //       dispatchSignedIn({type: "UPDATE_SIGN_IN", payload: {userToken: 'signed-in'}});
// //     //       console.log('User signed in successfully!');
// //     //     }
// //     //     return user;
// //     //   } catch (error) {
// //     //     switch (error.code) {
// //     //       case 'auth/wrong-password':
// //     //         console.log('Incorrect password. Please try again.');
// //     //         break;
// //     //       case 'auth/user-not-found':
// //     //         console.log('No user found with the provided email address.');
// //     //         break;
// //     //       case 'auth/invalid-email':
// //     //         console.log('The email address is not valid.');
// //     //         break;
// //     //       default:
// //     //         console.error(error);
// //     //     }
// //     //     throw error;
// //     //   }
// //     // }
    

// //     async function signIn(data) {
// //       const { email, password } = data;
// //       try {
// //         const user = await auth().signInWithEmailAndPassword(email, password);
// //         if (user) {
// //           console.log(user);
// //           dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } });
// //           console.log("User signed in successfully!");
// //         }
// //         return user;
// //       } catch (error) {
// //         switch (error.code) {
// //           case "auth/wrong-password":
// //             console.log("Incorrect password. Please try again.");
// //             break;
// //           case "auth/user-not-found":
// //             console.log("No user found with the provided email address.");
// //             break;
// //           case "auth/invalid-email":
// //             console.log("The email address is not valid.");
// //             break;
// //           default:
// //             console.error(error);
// //         }
// //         throw error;
// //       }
// //     }
  

    
// //   return(
// //     <View style={{...styles.container, backgroundColor:COLORS.white}}>
// //         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
// //         {/* <View style={{marginLeft:20, marginTop:5,fontSize:20,fontWeight: 'bold'}}>
// //           <Text style={title}>Welcome pls Sign In</Text>
// //         </View> */}

// //         <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>please enter the mail and password</Text>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Login with your account Details</Text>          
// //         </View>

// //         <Formik
// //   initialValues={{email: '', password: ''}}
// //   validationSchema={Yup.object().shape({
// //     email: Yup.string().email('Invalid email').required('Required'),
// //     password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required')
// //   })}
// //   onSubmit={(values) => {
// //     signIn(values);
// //   }}
// // >
// //   {(props) => (
// //     <View>
// //       <View style={{...styles.TextInput2, marginTop: 10, marginBottom: 10, backgroundColor: COLORS.primary}}>
// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="email"
// //             iconStyle={{color: colors.grey3, backgroundColor: COLORS.primary, color: COLORS.white}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// //           />
// //         </Animatable.View>

// //         <TextInput
// //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// //           placeholder="Email"
// //           ref={textInput2}
// //           onFocus={() => setTextInput2Focussed(false)}
// //           onBlur={() => setTextInput2Focussed(true)}
// //           onChangeText={props.handleChange('email')}
// //           value={props.values.email}
// //           editable={true}
// //         />
// //         {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="email"
// //             iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //           />
// //         </Animatable.View>
// //       </View>

// //       <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="lock"
// //             iconStyle={{color: colors.grey3}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// //           />
// //         </Animatable.View>

// //         <TextInput
// //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// //           placeholder="Password"
// //           ref={textInput2}
// //           secureTextEntry
// //           onFocus={() => setTextInput2Focussed(false)}
// //           onBlur={() => setTextInput2Focussed(true)}
// //           onChangeText={props.handleChange('password')}
// //           value={props.values.password}
// //           editable={true}
// //         />
// //         {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="visibility-off"
// //             iconStyle={{color: COLORS.white}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //           />
// //         </Animatable.View>
// //       </View>


// //         <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// //         <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// //             <Button 
// //               title="Sign In"
// //               buttonStyle = {parameters.styledButton}
// //               titleStyle ={parameters.buttonTitle}
// //               onPress={ props.handleSubmit }
// //             />
// //         </TouchableOpacity>
// //         </View>

// //         </View>
// //   )
// //         }
// //       </Formik>
   
// //         <View style={{alignItems:"center", marginTop:2,}}>
// //             <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// //         </View>
// //         <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// //             <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// //         </View>
// //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //             <SocialIcon 
// //             button
// //             title="Sign In with Facebook"
// //             type="facebook"
// //              style={styles.socialIcon}
// //              onPress={()=>{}}
             
// //             />
// //         </View>
// //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //             <SocialIcon 
// //             button
// //             title="Sign In with Google"
// //             type="google"
// //              style={styles.socialIcon}
// //              onPress={onGoogleButtonPress}
// //             //  onClick={onGoogleButtonPress}
             
// //             />
// //         </View>
// //         <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// //         </View>

// //         <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// //             <Button 
// //               title="Create an Account"
// //               buttonStyle = {styles.createButton}
// //               titleStyle ={styles.buttonTitle}
// //               onPress={()=>{
// //                 navigation.navigate("SignUpScreen")
// //               }}
// //             />
// //         </View>
// //     </View>
// //   )
// // }



// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1
// //     },
// //     text1:{
// //         color:colors.grey1,
// //         fontSize:16,

// //     },
// //     TextInput1: {
// //         borderWidth:1,
// //         borderColor:'#86939e',
// //         marginHorizontal:20,
// //         borderRadius:12,
// //         marginBottom: 20,
// //         paddingLeft:15,
// //         height: 50,
// //     },

// //     TextInput2: {
// //         borderWidth:1,
// //         borderRadius:12,
// //         marginHorizontal:20,
// //         borderColor:'#86939e',
// //         flexDirection:'row',
// //         justifyContent:'center',
// //         alignContent:'center',
// //         alignItems:'center',
// //         paddingLeft:15,
// //         height: 50,

// //     },
// //     socialIcon:{
       
// //         justifyContent:"center" ,
// //         borderRadius:12,
// //         borderWidth:2,
// //         borderColor:'#ff8ccc',
// //         height: 55,
// //         marginHorizontal:20,
// //         width: "100%",
// //         marginRight: 30,
// //     },
// //     createButton:{
// //         backgroundColor:'white',
// //         justifyContent:'center',
// //         alignContent:'center',
// //         borderRadius:12,
// //         borderWidth:1,
// //         borderColor:'#2B60DA',
// //         height: 50,
// //         paddingHorizontal:15,
// //     },
// //     buttonTitle:{
// //         color:"#2B60DA",
// //         fontSize:20,
// //         fontWeight: 'bold',
// //         alignItems:'center',
// //         justifyContent:"center" ,
// //         marginTop:-3 ,
// //     },
// //     submitButton: {
// //       // backgroundColor: 'blue',
// //       padding: 12,
// //       // width: '100%',
// //       alignItems: 'center',
// //       marginTop: 16,
// //       justifyContent:'center'
// //     },
// // })



// // // import React, {useState, useRef, useContext} from 'react';
// // // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // // import { colors,parameters,title } from '../../global/styles'
// // // import * as Animatable from 'react-native-animatable'
// // // import auth from '@react-native-firebase/auth';
// // // import * as Yup from 'yup';


// // // import { Button, SocialIcon, } from 'react-native-elements'
// // // import Icon from 'react-native-vector-icons/MaterialIcons';


// // // import Header from '../../components/Header';
// // // import COLORS from './../../global/LandingColors';
// // // import { Formik } from 'formik';
// // // import { SignInContext } from './../../contexts/authContext';

// // // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';





// // // export default function SignInScreen({navigation}) {
  
// // //   const {dispatchSignedIn} = useContext(SignInContext)

// // //     const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// // //     const textInput1= useRef(1);
// // //     const textInput2= useRef(2);
// // // async function signIn(data) {
// // //   const { email, password } = data;
// // //   try {
// // //     const user = await auth().signInWithEmailAndPassword(email, password);
// // //     if (user) {
// // //       console.log(user);
// // //       dispatch({ type: 'UPDATE_SIGN_IN', payload: { userToken: 'signed-in' } });
// // //       console.log('User signed in successfully!');
// // //     }
// // //     return user;
// // //   } catch (error) {
// // //     switch (error.code) {
// // //       case 'auth/wrong-password':
// // //         console.log('Incorrect password. Please try again.');
// // //         break;
// // //       case 'auth/user-not-found':
// // //         console.log('No user found with the provided email address.');
// // //         break;
// // //       case 'auth/invalid-email':
// // //         console.log('The email address is not valid.');
// // //         break;
// // //       default:
// // //         console.error(error);
// // //     }
// // //     throw error;
// // //   }
// // // }

// // // return (
// // //   <View style={{...styles.container, backgroundColor: COLORS.white}}>
// // //     <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

// // //     <View
// // //       style={{
// // //         alignItems: 'center',
// // //         marginTop: 10,
// // //         fontSize: 20,
// // //         fontWeight: 'bold',
// // //       }}>
// // //       <Text
// // //         style={{
// // //           ...styles.primary,
// // //           color: COLORS.primary,
// // //           fontWeight: 'bold',
// // //         }}>
// // //         Please enter your email and password
// // //       </Text>
// // //       <Text
// // //         style={{
// // //           ...styles.primary,
// // //           color: COLORS.primary,
// // //           fontWeight: 'bold',
// // //         }}>
// // //         Login with your account details
// // //       </Text>
// // //     </View>

// // //     <Formik
// // //       initialValues={{email: '', password: ''}}
// // //       validationSchema={Yup.object().shape({
// // //         email: Yup.string().email('Invalid email').required('Required'),
// // //         password: Yup.string()
// // //           .min(6, 'Password should be at least 6 characters')
// // //           .required('Required'),
// // //       })}
// // //       onSubmit={(values) => {
// // //       return signIn(values);
// // //     }}
// // //       >
// // //       {(props) => (
// // //         <View>
// // //           <View
// // //             style={{
// // //               ...styles.TextInput2,
// // //               marginTop: 10,
// // //               marginBottom: 10,
// // //               backgroundColor: COLORS.primary,
// // //             }}>
// // //             <Animatable.View
// // //               animation={textInput2Focussed ? '' : 'fadeInLeft'}
// // //               duration={400}
// // //               style={{
// // //                 backgroundColor: COLORS.primary,
// // //                 color: COLORS.white,
// // //               }}>
// // //               <Icon
// // //                 name="email"
// // //                 iconStyle={{
// // //                   color: colors.grey3,
// // //                   backgroundColor: COLORS.primary,
// // //                   color: COLORS.white,
// // //                 }}
// // //           type="material"
// // //           size={28}
// // //           style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// // //         />
// // //       </Animatable.View>

// // //       <TextInput
// // //         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// // //         placeholder="Email"
// // //         ref={textInput2}
// // //         onFocus={() => setTextInput2Focussed(false)}
// // //         onBlur={() => setTextInput2Focussed(true)}
// // //         onChangeText={props.handleChange('email')}
// // //         value={props.values.email}
// // //       />
// // //       {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// // //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //         <Icon
// // //           name="email"
// // //           iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// // //           type="material"
// // //           size={28}
// // //           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// // //         />
// // //       </Animatable.View>
// // //     </View>

// // //     <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// // //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //         <Icon
// // //           name="lock"
// // //           iconStyle={{color: colors.grey3}}
// // //           type="material"
// // //           size={28}
// // //           style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// // //         />
// // //       </Animatable.View>

// // //       <TextInput
// // //         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// // //         placeholder="Password"
// // //         ref={textInput2}
// // //         secureTextEntry
// // //         onFocus={() => setTextInput2Focussed(false)}
// // //         onBlur={() => setTextInput2Focussed(true)}
// // //         onChangeText={props.handleChange('password')}
// // //         value={props.values.password}
// // //       />
// // //       {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// // //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //         <Icon
// // //           name="visibility-off"
// // //           iconStyle={{color: COLORS.white}}
// // //           type="material"
// // //           size={28}
// // //           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// // //         />
// // //       </Animatable.View>
// // //     </View>


// // //       <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// // //       <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// // //           <Button 
// // //             title="Sign In"
// // //             buttonStyle = {parameters.styledButton}
// // //             titleStyle ={parameters.buttonTitle}
// // //             onPress={ props.handleSubmit }
// // //           />
// // //       </TouchableOpacity>
// // //       </View>

// // //       </View>
// // // )
// // //       }
// // //     </Formik>
 
// // //       <View style={{alignItems:"center", marginTop:2,}}>
// // //           <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// // //       </View>
// // //       <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// // //           <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// // //       </View>
// // //       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //           <SocialIcon 
// // //           button
// // //           title="Sign In with Facebook"
// // //           type="facebook"
// // //            style={styles.socialIcon}
// // //            onPress={()=>{}}
           
// // //           />
// // //       </View>
// // //       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //           <SocialIcon 
// // //           button
// // //           title="Sign In with Google"
// // //           type="google"
// // //            style={styles.socialIcon}
// // //            onPress={()=>{}}
           
// // //           />
// // //       </View>
// // //       <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// // //          <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// // //       </View>

// // //       <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// // //           <Button 
// // //             title="Create an Account"
// // //             buttonStyle = {styles.createButton}
// // //             titleStyle ={styles.buttonTitle}
// // //             onPress={()=>{
// // //               navigation.navigate("SignUpScreen")
// // //             }}
// // //           />
// // //       </View>
// // //   </View>
// // // )
// // // }



// // // const styles = StyleSheet.create({
// // //   container:{
// // //       flex:1
// // //   },
// // //   text1:{
// // //       color:colors.grey1,
// // //       fontSize:16,

// // //   },
// // //   TextInput1: {
// // //       borderWidth:1,
// // //       borderColor:'#86939e',
// // //       marginHorizontal:20,
// // //       borderRadius:12,
// // //       marginBottom: 20,
// // //       paddingLeft:15,
// // //       height: 50,
// // //   },

// // //   TextInput2: {
// // //       borderWidth:1,
// // //       borderRadius:12,
// // //       marginHorizontal:20,
// // //       borderColor:'#86939e',
// // //       flexDirection:'row',
// // //       justifyContent:'center',
// // //       alignContent:'center',
// // //       alignItems:'center',
// // //       paddingLeft:15,
// // //       height: 50,

// // //   },
// // //   socialIcon:{
     
// // //       justifyContent:"center" ,
// // //       borderRadius:12,
// // //       borderWidth:2,
// // //       borderColor:'#ff8ccc',
// // //       height: 55,
// // //       marginHorizontal:20,
// // //       width: "100%",
// // //       marginRight: 30,
// // //   },
// // //   createButton:{
// // //       backgroundColor:'white',
// // //       justifyContent:'center',
// // //       alignContent:'center',
// // //       borderRadius:12,
// // //       borderWidth:1,
// // //       borderColor:'#2B60DA',
// // //       height: 50,
// // //       paddingHorizontal:15,
// // //   },
// // //   buttonTitle:{
// // //       color:"#2B60DA",
// // //       fontSize:20,
// // //       fontWeight: 'bold',
// // //       alignItems:'center',
// // //       justifyContent:"center" ,
// // //       marginTop:-3 ,
// // //   },
// // //   submitButton: {
// // //     // backgroundColor: 'blue',
// // //     padding: 12,
// // //     // width: '100%',
// // //     alignItems: 'center',
// // //     marginTop: 16,
// // //     justifyContent:'center'
// // //   },
// // // })







// // // import React, {useState, useRef, useContext} from 'react';
// // // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // // import { colors,parameters,title } from '../../global/styles'
// // // import * as Animatable from 'react-native-animatable'
// // // // import auth from '@react-native-firebase/auth';
// // // import * as Yup from 'yup';


// // // import { Button, SocialIcon, } from 'react-native-elements'
// // // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';


// // // import Header from '../../components/Header';
// // // import COLORS from './../../global/LandingColors';
// // // import { Formik } from 'formik';
// // // import { SignInContext } from './../../contexts/authContext';

// // // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // // import {provider, auth} from '../../components/config.jsx'
// // // import { signInWithPopup } from 'firebase/auth';
// // // import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
// // // // import { AccessToken, LoginManager } from 'react-native-fbsdk';

// // // export default function SignInScreen({navigation}) {
  
// // //   // const {dispatchSignedIn} = useContext(SignInContext)
// // //   const {dispatchSignedIn, dispatchedSignUp} = useContext(SignInContext);
// // //   const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// // //   const textInput1 = useRef(null);
// // //   const textInput2 = useRef(null);

// //   // function onGoogleButtonPress() {
// //   //   signInWithPopup(auth, provider)
// //   //     .then((result) => {
// //   //       const user = result.user;
// //   //       alert(user.displayName);
// //   //     })
// //   //     .catch((error) => {
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       const email = error.email;
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       console.log(errorMessage);
// //   //     });
// //   // }

// //   // async function onGoogleButtonPress() {
// //   //   const provider = new firebase.auth.GoogleAuthProvider();
// //   //   const auth = firebase.auth();
    
// //   //   auth.signInWithPopup(provider)
// //   //     .then((result) => {
// //   //       const user = result.user;
// //   //       alert(user.displayName);
// //   //     })
// //   //     .catch((error) => {
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       const email = error.email;
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       console.log(errorMessage);
// //   //     });
// //   // }




// // // GoogleSignin.configure({
// // //   webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your own web client ID
// // // });


// // // async function onGoogleButtonPress() {
// // //   try {
// // //     const { idToken } = await GoogleSignin.signIn();
// // //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// // //     await auth().signInWithCredential(googleCredential);
// // //     Alert.alert('Success', 'Google sign-in succeeded');
// // //   } catch (error) {
// // //     console.log(error);
// // //     Alert.alert('Error', 'Google sign-in failed');
// // //   }
// // // }



// // // async function onGoogleButtonPress() {
// // //   const { dispatchSignedIn } = useContext(SignInContext);

// // //   try {
// // //     const { idToken } = await GoogleSignin.signIn();
// // //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// // //     const userCredential = await auth().signInWithCredential(googleCredential);
// // //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// // //     Alert.alert('Success', 'Google sign-in succeeded');
// // //   } catch (error) {
// // //     console.log(error);
// // //     Alert.alert('Error', 'Google sign-in failed');
// // //   }
// // // }


// // // async function onFacebookButtonPress() {
// // //   const { dispatchSignedIn } = useContext(SignInContext);

// // //   try {
// // //     // Attempt login with permissions
// // //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// // //     if (result.isCancelled) {
// // //       throw 'User cancelled the login process';
// // //     }

// // //     // Once signed in, get the user's access token
// // //     const data = await AccessToken.getCurrentAccessToken();

// // //     if (!data) {
// // //       throw 'Something went wrong obtaining access token';
// // //     }

// // //     // Create a Firebase credential with the AccessToken
// // //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// // //     // Sign-in the user with the credential
// // //     const userCredential = await auth().signInWithCredential(facebookCredential);

// // //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// // //     Alert.alert('Success', 'Facebook sign-in succeeded');
// // //   } catch (error) {
// // //     console.log(error);
// // //     Alert.alert('Error', 'Facebook sign-in failed');
// // //   }
// // // }

  

// // //   async function signIn(data) {
// // //     const {email, password} = data;
// // //     try {
// // //       const user = await signInWithEmailAndPassword(auth, email, password);
// // //       if (user) {
// // //         console.log(user);
// // //         dispatchSignedIn({
// // //           type: 'UPDATE_SIGN_IN',
// // //           payload: {userToken: 'signed-in'},
// // //         });
// // //         console.log('User signed in successfully!');
// // //       }
// // //       return user;
// // //     } catch (error) {
// // //       switch (error.code) {
// // //         case 'auth/wrong-password':
// // //           console.log('Incorrect password. Please try again.');
// // //           break;
// // //         case 'auth/user-not-found':
// // //           console.log('No user found with the provided email address.');
// // //           break;
// // //         case 'auth/invalid-email':
// // //           console.log('The email address is not valid.');
// // //           break;
// // //         default:
// // //           console.error(error);
// // //       }
// // //       throw error;
// // //     }
// // //   }

    
// // //   return(
// // //     <View style={{...styles.container, backgroundColor:COLORS.white}}>
// // //         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
// // //         {/* <View style={{marginLeft:20, marginTop:5,fontSize:20,fontWeight: 'bold'}}>
// // //           <Text style={title}>Welcome pls Sign In</Text>
// // //         </View> */}

// // //         <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
// // //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>please enter the mail and password</Text>
// // //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Login with your account Details</Text>          
// // //         </View>

// // //         <Formik
// // //   initialValues={{email: '', password: ''}}
// // //   validationSchema={Yup.object().shape({
// // //     email: Yup.string().email('Invalid email').required('Required'),
// // //     password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required')
// // //   })}
// // //   onSubmit={(values) => {
// // //     signIn(values);
// // //   }}
// // // >
// // //   {(props) => (
// // //     <View>
// // //       <View style={{...styles.TextInput2, marginTop: 10, marginBottom: 10, backgroundColor: COLORS.primary}}>
// // //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //             <Icon
// // //               name="email"
// // //               iconStyle={{color: colors.grey3, backgroundColor: COLORS.primary, color: COLORS.white}}
// // //               type="material"
// // //               size={28}
// // //               style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// // //             />

// // //         </Animatable.View>

// // //         <TextInput
// // //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// // //           placeholder="Email"
// // //           ref={textInput2}
// // //           onFocus={() => setTextInput2Focussed(false)}
// // //           onBlur={() => setTextInput2Focussed(true)}
// // //           onChangeText={props.handleChange('email')}
// // //           value={props.values.email}
// // //           editable={true}
// // //         />
// // //         {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// // //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //           <Icon
// // //             name="email"
// // //             iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// // //             type="material"
// // //             size={28}
// // //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// // //           />
// // //         </Animatable.View>
// // //       </View>

// // //       <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// // //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //           <Icon
// // //             name="lock"
// // //             iconStyle={{color: colors.grey3}}
// // //             type="material"
// // //             size={28}
// // //             style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// // //           />
// // //         </Animatable.View>

// // //         <TextInput
// // //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// // //           placeholder="Password"
// // //           ref={textInput2}
// // //           secureTextEntry
// // //           onFocus={() => setTextInput2Focussed(false)}
// // //           onBlur={() => setTextInput2Focussed(true)}
// // //           onChangeText={props.handleChange('password')}
// // //           value={props.values.password}
// // //           editable={true}
// // //         />
// // //         {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// // //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //           <Icon
// // //             name="visibility-off"
// // //             iconStyle={{color: COLORS.white}}
// // //             type="material"
// // //             size={28}
// // //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// // //           />
// // //         </Animatable.View>
// // //       </View>


// // //         <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// // //         <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// // //             <Button 
// // //               title="Sign In"
// // //               buttonStyle = {parameters.styledButton}
// // //               titleStyle ={parameters.buttonTitle}
// // //               onPress={ props.handleSubmit }
// // //             />
// // //         </TouchableOpacity>
// // //         </View>

// // //         </View>
// // //   )
// // //         }
// // //       </Formik>
   
// // //         <View style={{alignItems:"center", marginTop:2,}}>
// // //             <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// // //         </View>
// // //         <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// // //             <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// // //         </View>
// // //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //             <SocialIcon 
// // //             button
// // //             title="Sign In with Facebook"
// // //             type="facebook"
// // //              style={styles.socialIcon}
// // //              onPress={()=>{}}
             
// // //             />
// // //         </View>
        
// // //         <View style={{ marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //         <TouchableOpacity style={styles.googleBtn} onPress={onGoogleButtonPress}>
// // //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// // //           <GoogleSigninButton
// // //             size={GoogleSigninButton.Size.Wide}
// // //             color={GoogleSigninButton.Color.Light}
// // //           />
// // //           <Text style={styles.googleText}>Sign in with Google</Text>
// // //         </View>
// // //       </TouchableOpacity>

// // //           </View>
// // //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //             <SocialIcon 
// // //             button
// // //             title="Sign In with Google"
// // //             type="google"
// // //              style={styles.socialIcon}
// // //              onPress={onGoogleButtonPress}
// // //             //  onClick={onGoogleButtonPress}
             
// // //             />
// // //         </View>
// // //         <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// // //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// // //         </View>

// // //         <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// // //             <Button 
// // //               title="Create an Account"
// // //               buttonStyle = {styles.createButton}
// // //               titleStyle ={styles.buttonTitle}
// // //               onPress={()=>{
// // //                 navigation.navigate("SignUpScreen")
// // //               }}
// // //             />
// // //         </View>
// // //     </View>
// // //   )
// // // }



// // // const styles = StyleSheet.create({
// // //     container:{
// // //         flex:1
// // //     },
// // //     text1:{
// // //         color:colors.grey1,
// // //         fontSize:16,

// // //     },
// // //     TextInput1: {
// // //         borderWidth:1,
// // //         borderColor:'#86939e',
// // //         marginHorizontal:20,
// // //         borderRadius:12,
// // //         marginBottom: 20,
// // //         paddingLeft:15,
// // //         height: 50,
// // //     },

// // //     TextInput2: {
// // //         borderWidth:1,
// // //         borderRadius:12,
// // //         marginHorizontal:20,
// // //         borderColor:'#86939e',
// // //         flexDirection:'row',
// // //         justifyContent:'center',
// // //         alignContent:'center',
// // //         alignItems:'center',
// // //         paddingLeft:15,
// // //         height: 50,

// // //     },
// // //     socialIcon:{
       
// // //         justifyContent:"center" ,
// // //         borderRadius:12,
// // //         borderWidth:2,
// // //         borderColor:'#ff8ccc',
// // //         height: 55,
// // //         marginHorizontal:20,
// // //         width: "100%",
// // //         marginRight: 30,
// // //     },
// // //     createButton:{
// // //         backgroundColor:'white',
// // //         justifyContent:'center',
// // //         alignContent:'center',
// // //         borderRadius:12,
// // //         borderWidth:1,
// // //         borderColor:'#2B60DA',
// // //         height: 50,
// // //         paddingHorizontal:15,
// // //     },
// // //     buttonTitle:{
// // //         color:"#2B60DA",
// // //         fontSize:20,
// // //         fontWeight: 'bold',
// // //         alignItems:'center',
// // //         justifyContent:"center" ,
// // //         marginTop:-3 ,
// // //     },
// // //     submitButton: {
// // //       // backgroundColor: 'blue',
// // //       padding: 12,
// // //       // width: '100%',
// // //       alignItems: 'center',
// // //       marginTop: 16,
// // //       justifyContent:'center'
// // //     },
// // //     googleBtn: {
// // //       backgroundColor: 'white',
// // //       height: 50,
// // //       width: 200,
// // //       alignSelf: 'center',
// // //       borderRadius: 5,
// // //       borderWidth: 1,
// // //       borderColor: 'grey',
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       justifyContent: 'center',
// // //       marginVertical: 10,
// // //     },
// // //     googleBtnText: {
// // //       color: 'black',
// // //       fontWeight: 'bold',
// // //       fontSize: 16,
// // //       marginLeft: 10,
// // //     },
// // // })







// // // import React, {  useState } from 'react';
// // import React, {useState, useRef, useContext, useCallback, useEffect,} from 'react';
// // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // import { colors,parameters,title } from '../../global/styles'
// // import * as Animatable from 'react-native-animatable'
// // import auth from '@react-native-firebase/auth';
// // import * as Yup from 'yup';


// // import { Button, SocialIcon, } from 'react-native-elements'

// // import Icon from 'react-native-vector-icons/MaterialIcons';


// // import Header from '../../components/Header';
// // import COLORS from './../../global/LandingColors';
// // import { Formik } from 'formik';
// // import { SignInContext } from './../../contexts/authContext';

// // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // import {provider } from '../../components/config.jsx'
// // import { signInWithPopup } from 'firebase/auth';
// // import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
// // import { AccessToken, LoginManager } from 'react-native-fbsdk';


// // // import firebase from 'firebase/app';
// // // import 'firebase/auth';

// // export default function SignInScreen({navigation}) {
  
// //   // const {dispatchSignedIn} = useContext(SignInContext)
// //   // const {dispatchSignedIn, dispatchedSignUp} = useContext(SignInContext);
// //   const { signedIn, dispatchSignedIn } = useContext(SignInContext);

// //   const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// //   const textInput1 = useRef(null);
// //   const textInput2 = useRef(null);

// //   // function onGoogleButtonPress() {
// //   //   signInWithPopup(auth, provider)
// //   //     .then((result) => {
// //   //       const user = result.user;
// //   //       alert(user.displayName);
// //   //     })
// //   //     .catch((error) => {
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       const email = error.email;
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       console.log(errorMessage);
// //   //     });
// //   // }

// //   // async function onGoogleButtonPress() {
// //   //   const provider = new firebase.auth.GoogleAuthProvider();
// //   //   const auth = firebase.auth();
    
// //   //   auth.signInWithPopup(provider)
// //   //     .then((result) => {
// //   //       const user = result.user;
// //   //       alert(user.displayName);
// //   //     })
// //   //     .catch((error) => {
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       const email = error.email;
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       console.log(errorMessage);
// //   //     });
// //   // }



// // // Set up Google Sign-In
// // GoogleSignin.configure({
// //   webClientId: '295534415338-mpguqqcmdn8uasvb60v6tsm2pthqj1ii.apps.googleusercontent.com', // Replace with your own web client ID
// // });
// // // working
// // async function onGoogleButtonPress() {
// //   try {
    
// //     const { idToken } = await GoogleSignin.signIn();
// //     console.log('Hello');
// //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// //     console.log(googleCredential);
// //     const user = await auth().signInWithCredential(googleCredential);
// //     if (user) {
// //       console.log(user);
// //       dispatchSignedIn({
// //         type: 'UPDATE_SIGN_IN',
// //         payload: {userToken: 'signed-in'},
// //       });
// //       console.log('Google User signed in successfully!');
// //     }
// //     return user;
// //     Alert.alert('Success', 'Google sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Google sign-in failed');
// //   }
// // }



// // // async function onGoogleButtonPress() {
// // //   const { dispatchSignedIn } = useContext(SignInContext);

// // //   try {
// // //     const { idToken } = await GoogleSignin.signIn();
// // //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// // //     const userCredential = await auth().signInWithCredential(googleCredential);
// // //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// // //     Alert.alert('Success', 'Google sign-in succeeded');
// // //   } catch (error) {
// // //     console.log(error);
// // //     Alert.alert('Error', 'Google sign-in failed');
// // //   }
// // // }



// // const handleGoogleSignIn = async () => {
// //   const userToken = await googleSignIn();
// //   if (userToken) {
// //     dispatchSignedIn({ type: 'GOOGLE_SIGN_IN', payload: { userToken } });
// //   }
// // };

// // const handleFacebookSignIn = async () => {
// //   const userToken = await facebookSignIn();
// //   if (userToken) {
// //     dispatchSignedIn({ type: 'FACEBOOK_SIGN_IN', payload: { userToken } });
// //   }
// // };






// // const FacebookSignIn = () => {
// //   const [user, setUser] = useState(null);

// //   const facebookSignIn = useCallback(async () => {
// //     try {
// //       const provider = new firebase.auth.FacebookAuthProvider();
// //       const result = await firebase.auth().signInWithPopup(provider);

// //       setUser(result.user);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }, []);

// // }



// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Facebook sign-in failed');
// //   }
// // }

  

// //   async function signIn(data) {
// //     const {email, password} = data;
// //     try {
// //       const user = await signInWithEmailAndPassword(auth, email, password);
// //       if (user) {
// //         console.log(user);
// //         dispatchSignedIn({
// //           type: 'UPDATE_SIGN_IN',
// //           payload: {userToken: 'signed-in'},
// //         });
// //         console.log('User signed in successfully!');
// //       }
// //       return user;
// //     } catch (error) {
// //       switch (error.code) {
// //         case 'auth/wrong-password':
// //           console.log('Incorrect password. Please try again.');
// //           break;
// //         case 'auth/user-not-found':
// //           console.log('No user found with the provided email address.');
// //           break;
// //         case 'auth/invalid-email':
// //           console.log('The email address is not valid.');
// //           break;
// //         default:
// //           console.error(error);
// //       }
// //       throw error;
// //     }
// //   }

    
// //   return(
// //     <View style={{...styles.container, backgroundColor:COLORS.white}}>
// //         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
// //         {/* <View style={{marginLeft:20, marginTop:5,fontSize:20,fontWeight: 'bold'}}>
// //           <Text style={title}>Welcome pls Sign In</Text>
// //         </View> */}

// //         <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>please enter the mail and password</Text>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Login with your account Details</Text>          
// //         </View>

// //         <Formik
// //   initialValues={{email: '', password: ''}}
// //   validationSchema={Yup.object().shape({
// //     email: Yup.string().email('Invalid email').required('Required'),
// //     password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required')
// //   })}
// //   onSubmit={(values) => {
// //     signIn(values);
// //   }}
// // >
// //   {(props) => (
// //     <View>
// //       <View style={{...styles.TextInput2, marginTop: 10, marginBottom: 10, backgroundColor: COLORS.primary}}>
// //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //             <Icon
// //               name="email"
// //               iconStyle={{color: colors.grey3, backgroundColor: COLORS.primary, color: COLORS.white}}
// //               type="material"
// //               size={28}
// //               style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// //             />

// //         </Animatable.View>

// //         <TextInput
// //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// //           placeholder="Email"
// //           ref={textInput2}
// //           onFocus={() => setTextInput2Focussed(false)}
// //           onBlur={() => setTextInput2Focussed(true)}
// //           onChangeText={props.handleChange('email')}
// //           value={props.values.email}
// //           editable={true}
// //         />
// //         {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="email"
// //             iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //           />
// //         </Animatable.View>
// //       </View>

// //       <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="lock"
// //             iconStyle={{color: colors.grey3}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// //           />
// //         </Animatable.View>

// //         <TextInput
// //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// //           placeholder="Password"
// //           ref={textInput2}
// //           secureTextEntry
// //           onFocus={() => setTextInput2Focussed(false)}
// //           onBlur={() => setTextInput2Focussed(true)}
// //           onChangeText={props.handleChange('password')}
// //           value={props.values.password}
// //           editable={true}
// //         />
// //         {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="visibility-off"
// //             iconStyle={{color: COLORS.white}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //           />
// //         </Animatable.View>
// //       </View>


// //         <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// //         <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// //             <Button 
// //               title="Sign In"
// //               buttonStyle = {parameters.styledButton}
// //               titleStyle ={parameters.buttonTitle}
// //               onPress={ props.handleSubmit }
// //             />
// //         </TouchableOpacity>
// //         </View>

// //         </View>
// //   )
// //         }
// //       </Formik>
   
// //         <View style={{alignItems:"center", marginTop:2,}}>
// //             <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// //         </View>
// //         <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// //             <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// //         </View>
// //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //             <SocialIcon 
// //             button
// //             title="Sign In with Facebook"
// //             type="facebook"
// //              style={styles.socialIcon}
// //              onPress={onFacebookButtonPress}
             
// //             />
// //         </View>
        
// //         {/* <View style={{ marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //         <TouchableOpacity style={styles.googleBtn} onPress={onGoogleButtonPress}>
// //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// //           <GoogleSigninButton
// //             size={GoogleSigninButton.Size.Wide}
// //             color={GoogleSigninButton.Color.Light}
// //           />
// //           <Text style={styles.googleBtnText}>Sign in with Google</Text>
// //         </View>
// //       </TouchableOpacity> */}

// //           {/* </View> */}
// //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //             <SocialIcon 
// //             button
// //             title="Sign In with Google"
// //             type="google"
// //              style={styles.socialIcon}
// //              onPress={onGoogleButtonPress}
// //             //  onClick={onGoogleButtonPress}
             
// //             />
// //         </View>
// //         {/* <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //         {signedIn.userToken ? (
// //           <Button title="Sign Out" onPress={() => dispatchSignedIn({ type: 'SIGN_OUT' })} />
// //         ) : (
// //           <>
// //             <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
// //             <Button title="Sign In with Facebook" onPress={handleFacebookSignIn} />
// //           </>
// //         )} */}
// //       {/* </View> */}

// //         <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// //         </View>

// //         <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// //             <Button 
// //               title="Create an Account"
// //               buttonStyle = {styles.createButton}
// //               titleStyle ={styles.buttonTitle}
// //               onPress={()=>{
// //                 navigation.navigate("SignUpScreen")
// //               }}
// //             />
// //         </View>
// //     </View>
// //   )
// // }



// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1
// //     },
// //     text1:{
// //         color:colors.grey1,
// //         fontSize:16,

// //     },
// //     TextInput1: {
// //         borderWidth:1,
// //         borderColor:'#86939e',
// //         marginHorizontal:20,
// //         borderRadius:12,
// //         marginBottom: 20,
// //         paddingLeft:15,
// //         height: 50,
// //     },

// //     TextInput2: {
// //         borderWidth:1,
// //         borderRadius:12,
// //         marginHorizontal:20,
// //         borderColor:'#86939e',
// //         flexDirection:'row',
// //         justifyContent:'center',
// //         alignContent:'center',
// //         alignItems:'center',
// //         paddingLeft:15,
// //         height: 50,

// //     },
// //     socialIcon:{
       
// //         justifyContent:"center" ,
// //         borderRadius:12,
// //         borderWidth:2,
// //         borderColor:'#ff8ccc',
// //         height: 55,
// //         marginHorizontal:20,
// //         width: "100%",
// //         marginRight: 30,
// //     },
// //     createButton:{
// //         backgroundColor:'white',
// //         justifyContent:'center',
// //         alignContent:'center',
// //         borderRadius:12,
// //         borderWidth:1,
// //         borderColor:'#2B60DA',
// //         height: 50,
// //         paddingHorizontal:15,
// //     },
// //     buttonTitle:{
// //         color:"#2B60DA",
// //         fontSize:20,
// //         fontWeight: 'bold',
// //         alignItems:'center',
// //         justifyContent:"center" ,
// //         marginTop:-3 ,
// //     },
// //     submitButton: {
// //       // backgroundColor: 'blue',
// //       padding: 12,
// //       // width: '100%',
// //       alignItems: 'center',
// //       marginTop: 16,
// //       justifyContent:'center'
// //     },
// //     googleBtn: {
// //       backgroundColor: 'white',
// //       height: 50,
// //       width: 200,
// //       alignSelf: 'center',
// //       borderRadius: 5,
// //       borderWidth: 1,
// //       borderColor: 'grey',
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       marginVertical: 10,
// //     },
// //     googleBtnText: {
// //       color: 'black',
// //       fontWeight: 'bold',
// //       fontSize: 16,
// //       marginLeft: 10,
// //     },
// // })






// // import React, {useState, useRef, useContext} from 'react';
// // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // import { colors,parameters,title } from '../../global/styles'
// // import * as Animatable from 'react-native-animatable'
// // // import auth from '@react-native-firebase/auth';
// // import * as Yup from 'yup';


// // import { Button, SocialIcon, } from 'react-native-elements'
// // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // import Icon from 'react-native-vector-icons/MaterialIcons';


// // import Header from '../../components/Header';
// // import COLORS from './../../global/LandingColors';
// // import { Formik } from 'formik';
// // import { SignInContext } from './../../contexts/authContext';

// // // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // // import {provider} from '../../components/config.jsx'
// // // import {provider, auth} from '../../components/config.jsx'

// // // import { signInWithPopup } from 'firebase/auth';
// // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // import {provider, auth} from '../../components/config.jsx'
// // import { signInWithPopup } from 'firebase/auth';
// // import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';


// // export default function SignInScreen({navigation}) {
  
  
// // // Set up Google Sign-In
// // GoogleSignin.configure({
// //   webClientId: '295534415338-mpguqqcmdn8uasvb60v6tsm2pthqj1ii.apps.googleusercontent.com', // Replace with your own web client ID
// // });
// //   // const {dispatchSignedIn} = useContext(SignInContext)
// //   const { dispatchSignedIn, dispatchedSignUp } = useContext(SignInContext);

// //     const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// //     const textInput1= useRef(1);
// //     const textInput2= useRef(2);
    
// //     function onGoogleButtonPress() {
// //       signInWithPopup(auth, provider)
// //       .then((result)=>{
// //         const { idToken } = GoogleSignin.signIn();
// //         const credential = GoogleAuthProvider.credentialFromResult(result);
// //         const token = credential.accessToken;
// //         user = result.user; 
// //         alert(user, displayName)
// //       }).catch((error)=>{
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         const email = error.email;
// //         const credential = GoogleAuthProvider.credentialFromError(error);
// //         console.log(errorMessage);
// //       });
// //     }
// //     // async function signIn(data) {
// //     //   const { email, password } = data;
// //     //   try {
// //     //     const user = await auth().signInWithEmailAndPassword(email, password);
// //     //     if (user) {
// //     //       console.log(user);
// //     //       dispatchSignedIn({type: "UPDATE_SIGN_IN", payload: {userToken: 'signed-in'}});
// //     //       console.log('User signed in successfully!');
// //     //     }
// //     //     return user;
// //     //   } catch (error) {
// //     //     switch (error.code) {
// //     //       case 'auth/wrong-password':
// //     //         console.log('Incorrect password. Please try again.');
// //     //         break;
// //     //       case 'auth/user-not-found':
// //     //         console.log('No user found with the provided email address.');
// //     //         break;
// //     //       case 'auth/invalid-email':
// //     //         console.log('The email address is not valid.');
// //     //         break;
// //     //       default:
// //     //         console.error(error);
// //     //     }
// //     //     throw error;
// //     //   }
// //     // }
    

// //     async function signIn(data) {
// //       const { email, password } = data;
// //       try {
// //         const user = await auth().signInWithEmailAndPassword(email, password);
// //         if (user) {
// //           console.log(user);
// //           dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } });
// //           console.log("User signed in successfully!");
// //         }
// //         return user;
// //       } catch (error) {
// //         switch (error.code) {
// //           case "auth/wrong-password":
// //             console.log("Incorrect password. Please try again.");
// //             break;
// //           case "auth/user-not-found":
// //             console.log("No user found with the provided email address.");
// //             break;
// //           case "auth/invalid-email":
// //             console.log("The email address is not valid.");
// //             break;
// //           default:
// //             console.error(error);
// //         }
// //         throw error;
// //       }
// //     }
  

    
// //   return(
// //     <View style={{...styles.container, backgroundColor:COLORS.white}}>
// //         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
// //         {/* <View style={{marginLeft:20, marginTop:5,fontSize:20,fontWeight: 'bold'}}>
// //           <Text style={title}>Welcome pls Sign In</Text>
// //         </View> */}

// //         <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>please enter the mail and password</Text>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Login with your account Details</Text>          
// //         </View>

// //         <Formik
// //   initialValues={{email: '', password: ''}}
// //   validationSchema={Yup.object().shape({
// //     email: Yup.string().email('Invalid email').required('Required'),
// //     password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required')
// //   })}
// //   onSubmit={(values) => {
// //     signIn(values);
// //   }}
// // >
// //   {(props) => (
// //     <View>
// //       <View style={{...styles.TextInput2, marginTop: 10, marginBottom: 10, backgroundColor: COLORS.primary}}>
// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="email"
// //             iconStyle={{color: colors.grey3, backgroundColor: COLORS.primary, color: COLORS.white}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// //           />
// //         </Animatable.View>

// //         <TextInput
// //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// //           placeholder="Email"
// //           ref={textInput2}
// //           onFocus={() => setTextInput2Focussed(false)}
// //           onBlur={() => setTextInput2Focussed(true)}
// //           onChangeText={props.handleChange('email')}
// //           value={props.values.email}
// //           editable={true}
// //         />
// //         {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="email"
// //             iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //           />
// //         </Animatable.View>
// //       </View>

// //       <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="lock"
// //             iconStyle={{color: colors.grey3}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// //           />
// //         </Animatable.View>

// //         <TextInput
// //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// //           placeholder="Password"
// //           ref={textInput2}
// //           secureTextEntry
// //           onFocus={() => setTextInput2Focussed(false)}
// //           onBlur={() => setTextInput2Focussed(true)}
// //           onChangeText={props.handleChange('password')}
// //           value={props.values.password}
// //           editable={true}
// //         />
// //         {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //           <Icon
// //             name="visibility-off"
// //             iconStyle={{color: COLORS.white}}
// //             type="material"
// //             size={28}
// //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //           />
// //         </Animatable.View>
// //       </View>


// //         <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// //         <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// //             <Button 
// //               title="Sign In"
// //               buttonStyle = {parameters.styledButton}
// //               titleStyle ={parameters.buttonTitle}
// //               onPress={ props.handleSubmit }
// //             />
// //         </TouchableOpacity>
// //         </View>

// //         </View>
// //   )
// //         }
// //       </Formik>
   
// //         <View style={{alignItems:"center", marginTop:2,}}>
// //             <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// //         </View>
// //         <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// //             <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// //         </View>
// //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //             <SocialIcon 
// //             button
// //             title="Sign In with Facebook"
// //             type="facebook"
// //              style={styles.socialIcon}
// //              onPress={()=>{}}
             
// //             />
// //         </View>
// //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //             <SocialIcon 
// //             button
// //             title="Sign In with Google"
// //             type="google"
// //              style={styles.socialIcon}
// //              onPress={onGoogleButtonPress}
// //             //  onClick={onGoogleButtonPress}
             
// //             />
// //         </View>
// //         <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// //         </View>

// //         <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// //             <Button 
// //               title="Create an Account"
// //               buttonStyle = {styles.createButton}
// //               titleStyle ={styles.buttonTitle}
// //               onPress={()=>{
// //                 navigation.navigate("SignUpScreen")
// //               }}
// //             />
// //         </View>
// //     </View>
// //   )
// // }



// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1
// //     },
// //     text1:{
// //         color:colors.grey1,
// //         fontSize:16,

// //     },
// //     TextInput1: {
// //         borderWidth:1,
// //         borderColor:'#86939e',
// //         marginHorizontal:20,
// //         borderRadius:12,
// //         marginBottom: 20,
// //         paddingLeft:15,
// //         height: 50,
// //     },

// //     TextInput2: {
// //         borderWidth:1,
// //         borderRadius:12,
// //         marginHorizontal:20,
// //         borderColor:'#86939e',
// //         flexDirection:'row',
// //         justifyContent:'center',
// //         alignContent:'center',
// //         alignItems:'center',
// //         paddingLeft:15,
// //         height: 50,

// //     },
// //     socialIcon:{
       
// //         justifyContent:"center" ,
// //         borderRadius:12,
// //         borderWidth:2,
// //         borderColor:'#ff8ccc',
// //         height: 55,
// //         marginHorizontal:20,
// //         width: "100%",
// //         marginRight: 30,
// //     },
// //     createButton:{
// //         backgroundColor:'white',
// //         justifyContent:'center',
// //         alignContent:'center',
// //         borderRadius:12,
// //         borderWidth:1,
// //         borderColor:'#2B60DA',
// //         height: 50,
// //         paddingHorizontal:15,
// //     },
// //     buttonTitle:{
// //         color:"#2B60DA",
// //         fontSize:20,
// //         fontWeight: 'bold',
// //         alignItems:'center',
// //         justifyContent:"center" ,
// //         marginTop:-3 ,
// //     },
// //     submitButton: {
// //       // backgroundColor: 'blue',
// //       padding: 12,
// //       // width: '100%',
// //       alignItems: 'center',
// //       marginTop: 16,
// //       justifyContent:'center'
// //     },
// // })



// import React, {useState, useRef, useContext} from 'react';
// import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// import { colors,parameters,title } from '../../../global/styles'
// import * as Animatable from 'react-native-animatable'
// // import auth from '@react-native-firebase/auth';
// import * as Yup from 'yup';


// import { Button, SocialIcon, } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/MaterialIcons';


// import Header from '../../../components/Header';
// import COLORS from '../../../global/LandingColors';
// import { Formik } from 'formik';
// import { SignInContext } from '../../../contexts/authContext';

// import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// import { firebase, googleProvider, facebookProvider, auth } from "../../../components/config.jsx";
// // import {provider } from '../../components/config.jsx'
// import { signInWithPopup } from 'firebase/auth';
// import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
// import { AccessToken, LoginManager } from 'react-native-fbsdk';




// export default function SignInScreen({navigation}) {
  
//   // const {dispatchSignedIn} = useContext(SignInContext)
//   const { signedIn, dispatchSignedIn } = useContext(SignInContext);


//     const [textInput2Focussed, setTextInput2Focussed] = useState(false);
//     const textInput1= useRef(1);
//     const textInput2= useRef(2);
//     const [error, setError] = useState(null);

// async function signIn(data) {
//   const { email, password } = data;
//   try {
//     const user = await auth().signInWithEmailAndPassword(email, password);
//     if (user) {
//       console.log(user);
//       dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: 'signed-in' } });
//       console.log('User signed in successfully!');
//     }
//     return user;
//   } catch (error) {
//     switch (error.code) {
//       case 'auth/wrong-password':
//         console.log('Incorrect password. Please try again.');
//         break;
//       case 'auth/user-not-found':
//         console.log('No user found with the provided email address.');
//         break;
//       case 'auth/invalid-email':
//         console.log('The email address is not valid.');
//         break;
//       default:
//         console.error(error);
//     }
//     throw error;
//   }
// }



// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your own web client ID
// });


// // async function onGoogleButtonPress() {
// //   try {
// //     const { idToken } = await GoogleSignin.signIn();
// //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// //     await auth().signInWithCredential(googleCredential);
// //     Alert.alert('Success', 'Google sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Google sign-in failed');
// //   }
// // }


// // Set up Google Sign-In
// GoogleSignin.configure({
//   webClientId: '295534415338-mpguqqcmdn8uasvb60v6tsm2pthqj1ii.apps.googleusercontent.com', // Replace with your own web client ID
// });
// // working
// async function onGoogleButtonPress() {
//   try {
    
//     const { idToken } = await GoogleSignin.signIn();
//     console.log('Hello');
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//     console.log(googleCredential);
//     const user = await auth().signInWithCredential(googleCredential);
//     if (user) {
//       console.log(user);
//       dispatchSignedIn({
//         type: 'UPDATE_SIGN_IN',
//         payload: {userToken: 'signed-in'},
//       });
//       console.log('Google User signed in successfully!');
//     }
//     return user;
//     Alert.alert('Success', 'Google sign-in succeeded');
//   } catch (error) {
//     console.log(error);
//     Alert.alert('Error', 'Google sign-in failed');
//   }
// }


// // const signInWithFacebook = async () => {
// //   try {
// //     // Attempt to log in with Facebook
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       // Handle the case when the user cancels the login process
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Retrieve the access token from Facebook
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw new Error('Something went wrong obtaining the access token');
// //     }

// //     // Create a Firebase credential with the Facebook access token
// //     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign in to Firebase with the Facebook credential
// //     const userCredential = await firebase.auth().signInWithCredential(credential);

// //     // Set the user's Firebase credentials in state
// //     setCredentials(userCredential);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };


// // const signInWithFacebook = async () => {
// //   try {
// //     const { user } = await firebase.auth().signInWithPopup(facebookProvider);
// //     await saveUserData(user);
// //     console.log("Signed in with Facebook: ", user);
// //   } catch (error) {
// //     setError(error.message);
// //     console.error("Error signing in with Facebook: ", error);
// //   }
// // };




// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Facebook sign-in failed');
// //   }
// // }



// // const signInWithFacebook = async () => {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Facebook sign-in failed');
// //   }
// // };


// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw new Error('Something went wrong obtaining access token');
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', error.message);
// //   }
// // }


// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Once signed in, get the user's access token
// //     const accessToken = (await AccessToken.getCurrentAccessToken())?.accessToken ?? null;

// //     if (!accessToken) {
// //       throw new Error('Something went wrong obtaining access token');
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', error.message);
// //   } finally {
// //     // Handle any unhandled promise rejections
// //     process.on('unhandledRejection', error => {
// //       console.log(error);
// //       Alert.alert('Error', error.message);
// //     });
// //   }
// // }


// const signInWithFacebook = async () => {
//   try {
//     // Attempt to log in with Facebook
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//     if (result.isCancelled) {
//       // Handle the case when the user cancels the login process
//       throw new Error('User cancelled the login process');
//     }

//     // Retrieve the access token from Facebook
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       throw new Error('Something went wrong obtaining the access token');
//     }

//     // Create a Firebase credential with the Facebook access token
//     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

//     // Sign in to Firebase with the Facebook credential
//     const userCredential = await firebase.auth().signInWithCredential(credential);

//     // Set the user's Firebase credentials in state
//     setCredentials(userCredential);
//   } catch (error) {
//     console.error(error);
//   }
// };



// return (
//   <View style={{...styles.container, backgroundColor: COLORS.white}}>
//     <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

//     <View
//       style={{
//         alignItems: 'center',
//         marginTop: 10,
//         fontSize: 20,
//         fontWeight: 'bold',
//       }}>
//       <Text
//         style={{
//           ...styles.primary,
//           color: COLORS.primary,
//           fontWeight: 'bold',
//         }}>
//         Please enter your email and password
//       </Text>
//       <Text
//         style={{
//           ...styles.primary,
//           color: COLORS.primary,
//           fontWeight: 'bold',
//         }}>
//         Login with your account details
//       </Text>
//     </View>

//     <Formik
//       initialValues={{email: '', password: ''}}
//       validationSchema={Yup.object().shape({
//         email: Yup.string().email('Invalid email').required('Required'),
//         password: Yup.string()
//           .min(6, 'Password should be at least 6 characters')
//           .required('Required'),
//       })}
//       onSubmit={(values) => {
//       return signIn(values);
//     }}
//       >
//       {(props) => (
//         <View>
//           <View
//             style={{
//               ...styles.TextInput2,
//               marginTop: 10,
//               marginBottom: 10,
//               backgroundColor: COLORS.primary,
//             }}>
//             <Animatable.View
//               animation={textInput2Focussed ? '' : 'fadeInLeft'}
//               duration={400}
//               style={{
//                 backgroundColor: COLORS.primary,
//                 color: COLORS.white,
//               }}>
//               <Icon
//                 name="email"
//                 iconStyle={{
//                   color: colors.grey3,
//                   backgroundColor: COLORS.primary,
//                   color: COLORS.white,
//                 }}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
//         />
//       </Animatable.View>

//       <TextInput
//         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
//         placeholder="Email"
//         ref={textInput2}
//         onFocus={() => setTextInput2Focussed(false)}
//         onBlur={() => setTextInput2Focussed(true)}
//         onChangeText={props.handleChange('email')}
//         value={props.values.email}
//       />
//       {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//         <Icon
//           name="email"
//           iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
//         />
//       </Animatable.View>
//     </View>

//     <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//         <Icon
//           name="lock"
//           iconStyle={{color: colors.grey3}}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white}}
//         />
//       </Animatable.View>

//       <TextInput
//         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
//         placeholder="Password"
//         ref={textInput2}
//         secureTextEntry
//         onFocus={() => setTextInput2Focussed(false)}
//         onBlur={() => setTextInput2Focussed(true)}
//         onChangeText={props.handleChange('password')}
//         value={props.values.password}
//       />
//       {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//         <Icon
//           name="visibility-off"
//           iconStyle={{color: COLORS.white}}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
//         />
//       </Animatable.View>
//     </View>


//       <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
//       <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
//           <Button 
//             title="Sign In"
//             buttonStyle = {parameters.styledButton}
//             titleStyle ={parameters.buttonTitle}
//             onPress={ props.handleSubmit }
//           />
//       </TouchableOpacity>
//       </View>

//       </View>
// )
//       }
//     </Formik>
 
//       <View style={{alignItems:"center", marginTop:2,}}>
//           <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
//       </View>
//       <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
//           <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
//       </View>
//       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//       {/* <TouchableOpacity onPress={onFacebookButtonPress}  > */}
//           <SocialIcon 
//           button
//           title="Sign In with Facebook"
//           type="facebook"
//            style={styles.socialIcon}
//            onPress={signInWithFacebook}
           
//           />
//           {/* </TouchableOpacity> */}
//       </View>
//       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//       {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
//       <TouchableOpacity onPress={onGoogleButtonPress}  >
//             <SocialIcon 
//             button
//             title="Sign In with Google"
//             type="google"
//              style={styles.socialIcon}
//              onPress={onGoogleButtonPress}
//             //  onClick={onGoogleButtonPress}
             
//             />
          
//       </TouchableOpacity>
//       </View>
//       <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
//          <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
//       </View>

//       <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
//           <Button 
//             title="Create an Account"
//             buttonStyle = {styles.createButton}
//             titleStyle ={styles.buttonTitle}
//             onPress={()=>{
//               navigation.navigate("SignUpScreen")
//             }}
//           />
//       </View>
//   </View>
// )
// }



// const styles = StyleSheet.create({
//   container:{
//       flex:1
//   },
//   text1:{
//       color:colors.grey1,
//       fontSize:16,

//   },
//   TextInput1: {
//       borderWidth:1,
//       borderColor:'#86939e',
//       marginHorizontal:20,
//       borderRadius:12,
//       marginBottom: 20,
//       paddingLeft:15,
//       height: 50,
//   },

//   TextInput2: {
//       borderWidth:1,
//       borderRadius:12,
//       marginHorizontal:20,
//       borderColor:'#86939e',
//       flexDirection:'row',
//       justifyContent:'center',
//       alignContent:'center',
//       alignItems:'center',
//       paddingLeft:15,
//       height: 50,

//   },
//   socialIcon:{
     
//       justifyContent:"center" ,
//       borderRadius:12,
//       borderWidth:2,
//       borderColor:'#ff8ccc',
//       height: 55,
//       marginHorizontal:20,
//       width: "100%",
//       marginRight: 30,
//   },
//   createButton:{
//       backgroundColor:'white',
//       justifyContent:'center',
//       alignContent:'center',
//       borderRadius:12,
//       borderWidth:1,
//       borderColor:'#2B60DA',
//       height: 50,
//       paddingHorizontal:15,
//   },
//   buttonTitle:{
//       color:"#2B60DA",
//       fontSize:20,
//       fontWeight: 'bold',
//       alignItems:'center',
//       justifyContent:"center" ,
//       marginTop:-3 ,
//   },
//   submitButton: {
//     // backgroundColor: 'blue',
//     padding: 12,
//     // width: '100%',
//     alignItems: 'center',
//     marginTop: 16,
//     justifyContent:'center'
//   },
// })







// // // import React, {useState, useRef, useContext} from 'react';
// // // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // // import { colors,parameters,title } from '../../global/styles'
// // // import * as Animatable from 'react-native-animatable'
// // // // import auth from '@react-native-firebase/auth';
// // // import * as Yup from 'yup';


// // // import { Button, SocialIcon, } from 'react-native-elements'
// // // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';


// // // import Header from '../../components/Header';
// // // import COLORS from './../../global/LandingColors';
// // // import { Formik } from 'formik';
// // // import { SignInContext } from './../../contexts/authContext';

// // // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
// // // import {provider, auth} from '../../components/config.jsx'
// // // import { signInWithPopup } from 'firebase/auth';
// // // import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
// // // // import { AccessToken, LoginManager } from 'react-native-fbsdk';

// // // export default function SignInScreen({navigation}) {
  
// // //   // const {dispatchSignedIn} = useContext(SignInContext)
// // //   const {dispatchSignedIn, dispatchedSignUp} = useContext(SignInContext);
// // //   const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// // //   const textInput1 = useRef(null);
// // //   const textInput2 = useRef(null);

// //   // function onGoogleButtonPress() {
// //   //   signInWithPopup(auth, provider)
// //   //     .then((result) => {
// //   //       const user = result.user;
// //   //       alert(user.displayName);
// //   //     })
// //   //     .catch((error) => {
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       const email = error.email;
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       console.log(errorMessage);
// //   //     });
// //   // }

// //   // async function onGoogleButtonPress() {
// //   //   const provider = new firebase.auth.GoogleAuthProvider();
// //   //   const auth = firebase.auth();
    
// //   //   auth.signInWithPopup(provider)
// //   //     .then((result) => {
// //   //       const user = result.user;
// //   //       alert(user.displayName);
// //   //     })
// //   //     .catch((error) => {
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       const email = error.email;
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       console.log(errorMessage);
// //   //     });
// //   // }




// // GoogleSignin.configure({
// //   webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your own web client ID
// // });


// // async function onGoogleButtonPress() {
// //   try {
// //     const { idToken } = await GoogleSignin.signIn();
// //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// //     await auth().signInWithCredential(googleCredential);
// //     Alert.alert('Success', 'Google sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Google sign-in failed');
// //   }
// // }



// // // async function onGoogleButtonPress() {
// // //   const { dispatchSignedIn } = useContext(SignInContext);

// // //   try {
// // //     const { idToken } = await GoogleSignin.signIn();
// // //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// // //     const userCredential = await auth().signInWithCredential(googleCredential);
// // //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// // //     Alert.alert('Success', 'Google sign-in succeeded');
// // //   } catch (error) {
// // //     console.log(error);
// // //     Alert.alert('Error', 'Google sign-in failed');
// // //   }
// // // }


// // // async function onFacebookButtonPress() {
// // //   const { dispatchSignedIn } = useContext(SignInContext);

// // //   try {
// // //     // Attempt login with permissions
// // //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// // //     if (result.isCancelled) {
// // //       throw 'User cancelled the login process';
// // //     }

// // //     // Once signed in, get the user's access token
// // //     const data = await AccessToken.getCurrentAccessToken();

// // //     if (!data) {
// // //       throw 'Something went wrong obtaining access token';
// // //     }

// // //     // Create a Firebase credential with the AccessToken
// // //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// // //     // Sign-in the user with the credential
// // //     const userCredential = await auth().signInWithCredential(facebookCredential);

// // //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// // //     Alert.alert('Success', 'Facebook sign-in succeeded');
// // //   } catch (error) {
// // //     console.log(error);
// // //     Alert.alert('Error', 'Facebook sign-in failed');
// // //   }
// // // }

  

// // //   async function signIn(data) {
// // //     const {email, password} = data;
// // //     try {
// // //       const user = await signInWithEmailAndPassword(auth, email, password);
// // //       if (user) {
// // //         console.log(user);
// // //         dispatchSignedIn({
// // //           type: 'UPDATE_SIGN_IN',
// // //           payload: {userToken: 'signed-in'},
// // //         });
// // //         console.log('User signed in successfully!');
// // //       }
// // //       return user;
// // //     } catch (error) {
// // //       switch (error.code) {
// // //         case 'auth/wrong-password':
// // //           console.log('Incorrect password. Please try again.');
// // //           break;
// // //         case 'auth/user-not-found':
// // //           console.log('No user found with the provided email address.');
// // //           break;
// // //         case 'auth/invalid-email':
// // //           console.log('The email address is not valid.');
// // //           break;
// // //         default:
// // //           console.error(error);
// // //       }
// // //       throw error;
// // //     }
// // //   }

    
// // //   return(
// // //     <View style={{...styles.container, backgroundColor:COLORS.white}}>
// // //         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
// // //         {/* <View style={{marginLeft:20, marginTop:5,fontSize:20,fontWeight: 'bold'}}>
// // //           <Text style={title}>Welcome pls Sign In</Text>
// // //         </View> */}

// // //         <View style={{alignItems:'center', marginTop:10, fontSize:20,fontWeight: 'bold' }}>
// // //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>please enter the mail and password</Text>
// // //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>Login with your account Details</Text>          
// // //         </View>

// // //         <Formik
// // //   initialValues={{email: '', password: ''}}
// // //   validationSchema={Yup.object().shape({
// // //     email: Yup.string().email('Invalid email').required('Required'),
// // //     password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required')
// // //   })}
// // //   onSubmit={(values) => {
// // //     signIn(values);
// // //   }}
// // // >
// // //   {(props) => (
// // //     <View>
// // //       <View style={{...styles.TextInput2, marginTop: 10, marginBottom: 10, backgroundColor: COLORS.primary}}>
// // //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //             <Icon
// // //               name="email"
// // //               iconStyle={{color: colors.grey3, backgroundColor: COLORS.primary, color: COLORS.white}}
// // //               type="material"
// // //               size={28}
// // //               style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// // //             />

// // //         </Animatable.View>

// // //         <TextInput
// // //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// // //           placeholder="Email"
// // //           ref={textInput2}
// // //           onFocus={() => setTextInput2Focussed(false)}
// // //           onBlur={() => setTextInput2Focussed(true)}
// // //           onChangeText={props.handleChange('email')}
// // //           value={props.values.email}
// // //           editable={true}
// // //         />
// // //         {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// // //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //           <Icon
// // //             name="email"
// // //             iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// // //             type="material"
// // //             size={28}
// // //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// // //           />
// // //         </Animatable.View>
// // //       </View>

// // //       <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// // //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //           <Icon
// // //             name="lock"
// // //             iconStyle={{color: colors.grey3}}
// // //             type="material"
// // //             size={28}
// // //             style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// // //           />
// // //         </Animatable.View>

// // //         <TextInput
// // //           style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// // //           placeholder="Password"
// // //           ref={textInput2}
// // //           secureTextEntry
// // //           onFocus={() => setTextInput2Focussed(false)}
// // //           onBlur={() => setTextInput2Focussed(true)}
// // //           onChangeText={props.handleChange('password')}
// // //           value={props.values.password}
// // //           editable={true}
// // //         />
// // //         {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// // //         <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// // //           <Icon
// // //             name="visibility-off"
// // //             iconStyle={{color: COLORS.white}}
// // //             type="material"
// // //             size={28}
// // //             style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// // //           />
// // //         </Animatable.View>
// // //       </View>


// // //         <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// // //         <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// // //             <Button 
// // //               title="Sign In"
// // //               buttonStyle = {parameters.styledButton}
// // //               titleStyle ={parameters.buttonTitle}
// // //               onPress={ props.handleSubmit }
// // //             />
// // //         </TouchableOpacity>
// // //         </View>

// // //         </View>
// // //   )
// // //         }
// // //       </Formik>
   
// // //         <View style={{alignItems:"center", marginTop:2,}}>
// // //             <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// // //         </View>
// // //         <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// // //             <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// // //         </View>
// // //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //             <SocialIcon 
// // //             button
// // //             title="Sign In with Facebook"
// // //             type="facebook"
// // //              style={styles.socialIcon}
// // //              onPress={()=>{}}
             
// // //             />
// // //         </View>
        
// // //         <View style={{ marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //         <TouchableOpacity style={styles.googleBtn} onPress={onGoogleButtonPress}>
// // //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// // //           <GoogleSigninButton
// // //             size={GoogleSigninButton.Size.Wide}
// // //             color={GoogleSigninButton.Color.Light}
// // //           />
// // //           <Text style={styles.googleText}>Sign in with Google</Text>
// // //         </View>
// // //       </TouchableOpacity>

// // //           </View>
// // //         <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// // //             <SocialIcon 
// // //             button
// // //             title="Sign In with Google"
// // //             type="google"
// // //              style={styles.socialIcon}
// // //              onPress={onGoogleButtonPress}
// // //             //  onClick={onGoogleButtonPress}
             
// // //             />
// // //         </View>
// // //         <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// // //            <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// // //         </View>

// // //         <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// // //             <Button 
// // //               title="Create an Account"
// // //               buttonStyle = {styles.createButton}
// // //               titleStyle ={styles.buttonTitle}
// // //               onPress={()=>{
// // //                 navigation.navigate("SignUpScreen")
// // //               }}
// // //             />
// // //         </View>
// // //     </View>
// // //   )
// // // }



// // // const styles = StyleSheet.create({
// // //     container:{
// // //         flex:1
// // //     },
// // //     text1:{
// // //         color:colors.grey1,
// // //         fontSize:16,

// // //     },
// // //     TextInput1: {
// // //         borderWidth:1,
// // //         borderColor:'#86939e',
// // //         marginHorizontal:20,
// // //         borderRadius:12,
// // //         marginBottom: 20,
// // //         paddingLeft:15,
// // //         height: 50,
// // //     },

// // //     TextInput2: {
// // //         borderWidth:1,
// // //         borderRadius:12,
// // //         marginHorizontal:20,
// // //         borderColor:'#86939e',
// // //         flexDirection:'row',
// // //         justifyContent:'center',
// // //         alignContent:'center',
// // //         alignItems:'center',
// // //         paddingLeft:15,
// // //         height: 50,

// // //     },
// // //     socialIcon:{
       
// // //         justifyContent:"center" ,
// // //         borderRadius:12,
// // //         borderWidth:2,
// // //         borderColor:'#ff8ccc',
// // //         height: 55,
// // //         marginHorizontal:20,
// // //         width: "100%",
// // //         marginRight: 30,
// // //     },
// // //     createButton:{
// // //         backgroundColor:'white',
// // //         justifyContent:'center',
// // //         alignContent:'center',
// // //         borderRadius:12,
// // //         borderWidth:1,
// // //         borderColor:'#2B60DA',
// // //         height: 50,
// // //         paddingHorizontal:15,
// // //     },
// // //     buttonTitle:{
// // //         color:"#2B60DA",
// // //         fontSize:20,
// // //         fontWeight: 'bold',
// // //         alignItems:'center',
// // //         justifyContent:"center" ,
// // //         marginTop:-3 ,
// // //     },
// // //     submitButton: {
// // //       // backgroundColor: 'blue',
// // //       padding: 12,
// // //       // width: '100%',
// // //       alignItems: 'center',
// // //       marginTop: 16,
// // //       justifyContent:'center'
// // //     },
// // //     googleBtn: {
// // //       backgroundColor: 'white',
// // //       height: 50,
// // //       width: 200,
// // //       alignSelf: 'center',
// // //       borderRadius: 5,
// // //       borderWidth: 1,
// // //       borderColor: 'grey',
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       justifyContent: 'center',
// // //       marginVertical: 10,
// // //     },
// // //     googleBtnText: {
// // //       color: 'black',
// // //       fontWeight: 'bold',
// // //       fontSize: 16,
// // //       marginLeft: 10,
// // //     },
// // // })



// // import React, {useState, useRef, useContext} from 'react';
// // import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity  } from 'react-native';
// // import { colors,parameters,title } from '../../global/styles'
// // import * as Animatable from 'react-native-animatable'
// // import auth from '@react-native-firebase/auth';
// // import * as Yup from 'yup';


// // import { Button, SocialIcon, } from 'react-native-elements'
// // import Icon from 'react-native-vector-icons/MaterialIcons';


// // import Header from '../../components/Header';
// // import COLORS from './../../global/LandingColors';
// // import { Formik } from 'formik';
// // import { SignInContext } from './../../contexts/authContext';

// // import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';





// // export default function SignInScreen({navigation}) {
  
// //   const { signedIn, dispatchSignedIn } = useContext(SignInContext);

// //   const [textInput2Focussed, setTextInput2Focussed] = useState(false);
// //   const textInput1 = useRef(null);
// //   const textInput2 = useRef(null);



// //     async function signIn(data) {
// //       const {email, password} = data;
// //       try {
// //         const user = await signInWithEmailAndPassword(auth, email, password);
// //         if (user) {
// //           console.log(user);
// //           dispatchSignedIn({
// //             type: 'UPDATE_SIGN_IN',
// //             payload: {userToken: 'signed-in'},
// //           });
// //           console.log('User signed in successfully!');
// //         }
// //         return user;
// //       } catch (error) {
// //         switch (error.code) {
// //           case 'auth/wrong-password':
// //             console.log('Incorrect password. Please try again.');
// //             break;
// //           case 'auth/user-not-found':
// //             console.log('No user found with the provided email address.');
// //             break;
// //           case 'auth/invalid-email':
// //             console.log('The email address is not valid.');
// //             break;
// //           default:
// //             console.error(error);
// //         }
// //         throw error;
// //       }
// //     }

// // return (
// //   <View style={{...styles.container, backgroundColor: COLORS.white}}>
// //     <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

// //     <View
// //       style={{
// //         alignItems: 'center',
// //         marginTop: 10,
// //         fontSize: 20,
// //         fontWeight: 'bold',
// //       }}>
// //       <Text
// //         style={{
// //           ...styles.primary,
// //           color: COLORS.primary,
// //           fontWeight: 'bold',
// //         }}>
// //         Please enter your email and password
// //       </Text>
// //       <Text
// //         style={{
// //           ...styles.primary,
// //           color: COLORS.primary,
// //           fontWeight: 'bold',
// //         }}>
// //         Login with your account details
// //       </Text>
// //     </View>

// //     <Formik
// //       initialValues={{email: '', password: ''}}
// //       validationSchema={Yup.object().shape({
// //         email: Yup.string().email('Invalid email').required('Required'),
// //         password: Yup.string()
// //           .min(6, 'Password should be at least 6 characters')
// //           .required('Required'),
// //       })}
// //       onSubmit={(values) => {
// //       return signIn(values);
// //     }}
// //       >
// //       {(props) => (
// //         <View>
// //           <View
// //             style={{
// //               ...styles.TextInput2,
// //               marginTop: 10,
// //               marginBottom: 10,
// //               backgroundColor: COLORS.primary,
// //             }}>
// //             <Animatable.View
// //               animation={textInput2Focussed ? '' : 'fadeInLeft'}
// //               duration={400}
// //               style={{
// //                 backgroundColor: COLORS.primary,
// //                 color: COLORS.white,
// //               }}>
// //               <Icon
// //                 name="email"
// //                 iconStyle={{
// //                   color: colors.grey3,
// //                   backgroundColor: COLORS.primary,
// //                   color: COLORS.white,
// //                 }}
// //           type="material"
// //           size={28}
// //           style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
// //         />
// //       </Animatable.View>

// //       <TextInput
// //         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
// //         placeholder="Email"
// //         ref={textInput2}
// //         onFocus={() => setTextInput2Focussed(false)}
// //         onBlur={() => setTextInput2Focussed(true)}
// //         onChangeText={props.handleChange('email')}
// //         value={props.values.email}
// //       />
// //       {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

// //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //         <Icon
// //           name="email"
// //           iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
// //           type="material"
// //           size={28}
// //           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //         />
// //       </Animatable.View>
// //     </View>

// //     <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
// //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //         <Icon
// //           name="lock"
// //           iconStyle={{color: colors.grey3}}
// //           type="material"
// //           size={28}
// //           style={{backgroundColor: COLORS.primary, color: COLORS.white}}
// //         />
// //       </Animatable.View>

// //       <TextInput
// //         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
// //         placeholder="Password"
// //         ref={textInput2}
// //         secureTextEntry
// //         onFocus={() => setTextInput2Focussed(false)}
// //         onBlur={() => setTextInput2Focussed(true)}
// //         onChangeText={props.handleChange('password')}
// //         value={props.values.password}
// //       />
// //       {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

// //       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
// //         <Icon
// //           name="visibility-off"
// //           iconStyle={{color: COLORS.white}}
// //           type="material"
// //           size={28}
// //           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
// //         />
// //       </Animatable.View>
// //     </View>


// //       <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
// //       <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
// //           <Button 
// //             title="Sign In"
// //             buttonStyle = {parameters.styledButton}
// //             titleStyle ={parameters.buttonTitle}
// //             onPress={ props.handleSubmit }
// //           />
// //       </TouchableOpacity>
// //       </View>

// //       </View>
// // )
// //       }
// //     </Formik>
 
// //       <View style={{alignItems:"center", marginTop:2,}}>
// //           <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
// //       </View>
// //       <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
// //           <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
// //       </View>
// //       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //           <SocialIcon 
// //           button
// //           title="Sign In with Facebook"
// //           type="facebook"
// //            style={styles.socialIcon}
// //            onPress={()=>{}}
           
// //           />
// //       </View>
// //       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
// //           <SocialIcon 
// //           button
// //           title="Sign In with Google"
// //           type="google"
// //            style={styles.socialIcon}
// //            onPress={()=>{}}
           
// //           />
// //       </View>
// //       <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
// //          <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
// //       </View>

// //       <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
// //           <Button 
// //             title="Create an Account"
// //             buttonStyle = {styles.createButton}
// //             titleStyle ={styles.buttonTitle}
// //             onPress={()=>{
// //               navigation.navigate("SignUpScreen")
// //             }}
// //           />
// //       </View>
// //   </View>
// // )
// // }



// // const styles = StyleSheet.create({
// //   container:{
// //       flex:1
// //   },
// //   text1:{
// //       color:colors.grey1,
// //       fontSize:16,

// //   },
// //   TextInput1: {
// //       borderWidth:1,
// //       borderColor:'#86939e',
// //       marginHorizontal:20,
// //       borderRadius:12,
// //       marginBottom: 20,
// //       paddingLeft:15,
// //       height: 50,
// //   },

// //   TextInput2: {
// //       borderWidth:1,
// //       borderRadius:12,
// //       marginHorizontal:20,
// //       borderColor:'#86939e',
// //       flexDirection:'row',
// //       justifyContent:'center',
// //       alignContent:'center',
// //       alignItems:'center',
// //       paddingLeft:15,
// //       height: 50,

// //   },
// //   socialIcon:{
     
// //       justifyContent:"center" ,
// //       borderRadius:12,
// //       borderWidth:2,
// //       borderColor:'#ff8ccc',
// //       height: 55,
// //       marginHorizontal:20,
// //       width: "100%",
// //       marginRight: 30,
// //   },
// //   createButton:{
// //       backgroundColor:'white',
// //       justifyContent:'center',
// //       alignContent:'center',
// //       borderRadius:12,
// //       borderWidth:1,
// //       borderColor:'#2B60DA',
// //       height: 50,
// //       paddingHorizontal:15,
// //   },
// //   buttonTitle:{
// //       color:"#2B60DA",
// //       fontSize:20,
// //       fontWeight: 'bold',
// //       alignItems:'center',
// //       justifyContent:"center" ,
// //       marginTop:-3 ,
// //   },
// //   submitButton: {
// //     // backgroundColor: 'blue',
// //     padding: 12,
// //     // width: '100%',
// //     alignItems: 'center',
// //     marginTop: 16,
// //     justifyContent:'center'
// //   },
// // })






// import React, {useState, useRef, useContext} from 'react';
// import { View, Text,StyleSheet, StatusBar, useWindowDimensions, TextInput, TouchableOpacity, Alert  } from 'react-native';
// import { colors,parameters,title } from '../../../global/styles'
// import * as Animatable from 'react-native-animatable'
// import auth from '@react-native-firebase/auth';
// import * as Yup from 'yup';


// import { Button, SocialIcon, } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/MaterialIcons';


// import Header from '../../../components/Header';
// import COLORS from '../../../global/LandingColors';
// import { Formik } from 'formik';
// import { SignInContext } from '../../../contexts/authContext';

// import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// import { firebase, googleProvider, facebookProvider } from "../../../components/config.jsx";
// // import {provider } from '../../components/config.jsx'
// import { signInWithPopup } from 'firebase/auth';
// import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';
// import { AccessToken, LoginManager } from 'react-native-fbsdk';




// export default function SignInScreen({navigation}) {
  
//   // const {dispatchSignedIn} = useContext(SignInContext)
//   const { signedIn, dispatchSignedIn } = useContext(SignInContext);


//     const [textInput2Focussed, setTextInput2Focussed] = useState(false);
//     const textInput1= useRef(1);
//     const textInput2= useRef(2);
//     const [error, setError] = useState(null);

// async function signIn(data) {
//   const { email, password } = data;
//   try {
//     const user = await auth().signInWithEmailAndPassword(email, password);
//     if (user) {
//       console.log(user);
//       dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: 'signed-in' } });
//       console.log('User signed in successfully!');
//     }
//     return user;
//   } catch (error) {
//     switch (error.code) {
//       case 'auth/wrong-password':
//         console.log('Incorrect password. Please try again.');
//         break;
//       case 'auth/user-not-found':
//         console.log('No user found with the provided email address.');
//         break;
//       case 'auth/invalid-email':
//         console.log('The email address is not valid.');
//         break;
//       default:
//         console.error(error);
//     }
//     throw error;
//   }
// }





// // Set up Google Sign-In
// GoogleSignin.configure({
//   webClientId: '295534415338-mpguqqcmdn8uasvb60v6tsm2pthqj1ii.apps.googleusercontent.com', // Replace with your own web client ID
// });
// // working
// // async function onGoogleButtonPress() {
// //   try {
    
// //     const { idToken } = await GoogleSignin.signIn();
// //     console.log('Hello');
// //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// //     console.log(googleCredential);
// //     const user = await auth().signInWithCredential(googleCredential);
// //     if (user) {
// //       console.log(user);
// //       dispatchSignedIn({
// //         type: 'UPDATE_SIGN_IN',
// //         payload: {userToken: 'signed-in'},
// //       });
// //       console.log('Google User signed in successfully!');
// //     }
// //     return user;
// //     Alert.alert('Success', 'Google sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Google sign-in failed');
// //   }
// // }


// async function onGoogleButtonPress() {
//   try {
//     const { idToken } = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//     const user = await auth().signInWithCredential(googleCredential);
//     // const userToken = 'google_signed_in'; // Replace with your actual user token
//      // Listen for authentication state changes
//     auth().onAuthStateChanged((user) => {
//       if (user) {
//         // Get the userToken from the user object
//         user.getIdToken().then((userToken) => {
//           console.log(userToken);
//           dispatchSignedIn({ type: 'SIGN_IN_GOOGLE', payload: { userToken } });
//         });
//       }
//     });
//     // Update the user token in the SignInContext using dispatch
//     // const { dispatchSignedIn } = useSignInContext();

//     Alert.alert('Success', 'Google sign-in succeeded');
//   } catch (error) {
//     console.log(error);
//     Alert.alert('Error', 'Google sign-in failed');
//   }
// }




// // const signInWithFacebook = async () => {
// //   try {
// //     // Attempt to log in with Facebook
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       // Handle the case when the user cancels the login process
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Retrieve the access token from Facebook
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw new Error('Something went wrong obtaining the access token');
// //     }

// //     // Create a Firebase credential with the Facebook access token
// //     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign in to Firebase with the Facebook credential
// //     const userCredential = await firebase.auth().signInWithCredential(credential);

// //     // Set the user's Firebase credentials in state
// //     setCredentials(userCredential);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };


// // const signInWithFacebook = async () => {
// //   try {
// //     const { user } = await firebase.auth().signInWithPopup(facebookProvider);
// //     await saveUserData(user);
// //     console.log("Signed in with Facebook: ", user);
// //   } catch (error) {
// //     setError(error.message);
// //     console.error("Error signing in with Facebook: ", error);
// //   }
// // };




// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Facebook sign-in failed');
// //   }
// // }



// // const signInWithFacebook = async () => {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw 'User cancelled the login process';
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw 'Something went wrong obtaining access token';
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', 'Facebook sign-in failed');
// //   }
// // };


// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Once signed in, get the user's access token
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw new Error('Something went wrong obtaining access token');
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //     Alert.alert('Success', 'Facebook sign-in succeeded');
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', error.message);
// //   }
// // }


// // async function onFacebookButtonPress() {
// //   const { dispatchSignedIn } = useContext(SignInContext);

// //   try {
// //     // Attempt login with permissions
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Once signed in, get the user's access token
// //     const accessToken = (await AccessToken.getCurrentAccessToken())?.accessToken ?? null;

// //     if (!accessToken) {
// //       throw new Error('Something went wrong obtaining access token');
// //     }

// //     // Create a Firebase credential with the AccessToken
// //     const facebookCredential = auth.FacebookAuthProvider.credential(accessToken);

// //     // Sign-in the user with the credential
// //     const userCredential = await auth().signInWithCredential(facebookCredential);

// //     dispatchSignedIn({ type: 'SIGN_IN', userToken: userCredential.user.uid });
// //   } catch (error) {
// //     console.log(error);
// //     Alert.alert('Error', error.message);
// //   } finally {
// //     // Handle any unhandled promise rejections
// //     process.on('unhandledRejection', error => {
// //       console.log(error);
// //       Alert.alert('Error', error.message);
// //     });
// //   }
// // }


// // Working but withot token
// // const signInWithFacebook = async () => {
// //   try {
// //     // Attempt to log in with Facebook
// //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// //     if (result.isCancelled) {
// //       // Handle the case when the user cancels the login process
// //       throw new Error('User cancelled the login process');
// //     }

// //     // Retrieve the access token from Facebook
// //     const data = await AccessToken.getCurrentAccessToken();

// //     if (!data) {
// //       throw new Error('Something went wrong obtaining the access token');
// //     }

// //     // Create a Firebase credential with the Facebook access token
// //     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

// //     // Sign in to Firebase with the Facebook credential
// //     const userCredential = await firebase.auth().signInWithCredential(credential);

// //     // Set the user's Firebase credentials in state
// //     setCredentials(userCredential);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };


// const signInWithFacebook = async () => {
//   try {
//     // Attempt to log in with Facebook
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//     if (result.isCancelled) {
//       // Handle the case when the user cancels the login process
//       throw new Error('User cancelled the login process');
//     }

//     // Retrieve the access token from Facebook
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       throw new Error('Something went wrong obtaining the access token');
//     }

//     // Create a Firebase credential with the Facebook access token
//     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

//     // Sign in to Firebase with the Facebook credential
//     const userCredential = await firebase.auth().signInWithCredential(credential);

//     // Update the user token in the SignInContext
//     dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: userCredential.user.uid } });

//   } catch (error) {
//     console.error(error);
//   }
// };



// return (
//   <View style={{...styles.container, backgroundColor: COLORS.white}}>
//     <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

//     <View
//       style={{
//         alignItems: 'center',
//         marginTop: 10,
//         fontSize: 20,
//         fontWeight: 'bold',
//       }}>
//       <Text
//         style={{
//           ...styles.primary,
//           color: COLORS.primary,
//           fontWeight: 'bold',
//         }}>
//         Please enter your email and password
//       </Text>
//       <Text
//         style={{
//           ...styles.primary,
//           color: COLORS.primary,
//           fontWeight: 'bold',
//         }}>
//         Login with your account details
//       </Text>
//     </View>

//     <Formik
//       initialValues={{email: '', password: ''}}
//       validationSchema={Yup.object().shape({
//         email: Yup.string().email('Invalid email').required('Required'),
//         password: Yup.string()
//           .min(6, 'Password should be at least 6 characters')
//           .required('Required'),
//       })}
//       onSubmit={(values) => {
//       return signIn(values);
//     }}
//       >
//       {(props) => (
//         <View>
//           <View
//             style={{
//               ...styles.TextInput2,
//               marginTop: 10,
//               marginBottom: 10,
//               backgroundColor: COLORS.primary,
//             }}>
//             <Animatable.View
//               animation={textInput2Focussed ? '' : 'fadeInLeft'}
//               duration={400}
//               style={{
//                 backgroundColor: COLORS.primary,
//                 color: COLORS.white,
//               }}>
//               <Icon
//                 name="email"
//                 iconStyle={{
//                   color: colors.grey3,
//                   backgroundColor: COLORS.primary,
//                   color: COLORS.white,
//                 }}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white, alignContent: 'center'}}
//         />
//       </Animatable.View>

//       <TextInput
//         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.dark}}
//         placeholder="Email"
//         ref={textInput2}
//         onFocus={() => setTextInput2Focussed(false)}
//         onBlur={() => setTextInput2Focussed(true)}
//         onChangeText={props.handleChange('email')}
//         value={props.values.email}
//       />
//       {props.touched.email && props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text>}

//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//         <Icon
//           name="email"
//           iconStyle={{color: COLORS.primary, backgroundColor: COLORS.light, color: COLORS.grey}}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
//         />
//       </Animatable.View>
//     </View>

//     <View style={{...styles.TextInput2, backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}>
//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//         <Icon
//           name="lock"
//           iconStyle={{color: colors.grey3}}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white}}
//         />
//       </Animatable.View>

//       <TextInput
//         style={{width: '80%', backgroundColor: COLORS.ligth, color: COLORS.primary}}
//         placeholder="Password"
//         ref={textInput2}
//         secureTextEntry
//         onFocus={() => setTextInput2Focussed(false)}
//         onBlur={() => setTextInput2Focussed(true)}
//         onChangeText={props.handleChange('password')}
//         value={props.values.password}
//       />
//       {props.touched.password && props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text>}

//       <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400} style={{backgroundColor: COLORS.primary, color: COLORS.white}}>
//         <Icon
//           name="visibility-off"
//           iconStyle={{color: COLORS.white}}
//           type="material"
//           size={28}
//           style={{backgroundColor: COLORS.primary, color: COLORS.white, marginTop: 10}}
//         />
//       </Animatable.View>
//     </View>


//       <View style={{marginHorizontal:15, marginVertical:20, marginTop:20, marginRight: 40,}}>
//       <TouchableOpacity  onPress={ props.handleSubmit } style={styles.submitButton} >
//           <Button 
//             title="Sign In"
//             buttonStyle = {parameters.styledButton}
//             titleStyle ={parameters.buttonTitle}
//             onPress={ props.handleSubmit }
//           />
//       </TouchableOpacity>
//       </View>

//       </View>
// )
//       }
//     </Formik>
 
//       <View style={{alignItems:"center", marginTop:2,}}>
//           <Text style={{...styles.text1, textDecorationLine:"underline"}}>forgot password ?</Text>
//       </View>
//       <View style={{alignItems:"center", marginTop:10, marginBottom:3}}>
//           <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
//       </View>
//       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//       {/* <TouchableOpacity onPress={onFacebookButtonPress}  > */}
//           <SocialIcon 
//           button
//           title="Sign In with Facebook"
//           type="facebook"
//            style={styles.socialIcon}
//            onPress={signInWithFacebook}
           
//           />
//           {/* </TouchableOpacity> */}
//       </View>
//       <View style={{marginHorizontal:10, marginVertical:10, marginTop:5, marginRight: 40,}}>
//       {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
//       <TouchableOpacity onPress={onGoogleButtonPress}  >
//             <SocialIcon 
//             button
//             title="Sign In with Google"
//             type="google"
//              style={styles.socialIcon}
//              onPress={onGoogleButtonPress}
//             //  onClick={onGoogleButtonPress}
             
//             />
          
//       </TouchableOpacity>
//       </View>
//       <View style={{marginTop:15, marginLeft:20, marginBottom:5,}}>
//          <Text style={{...styles.primary, color:COLORS.primary, fontWeight:'bold'}}>New On J-Rex Mobile?</Text>
//       </View>

//       <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
//           <Button 
//             title="Create an Account"
//             buttonStyle = {styles.createButton}
//             titleStyle ={styles.buttonTitle}
//             onPress={()=>{
//               navigation.navigate("SignUpScreen")
//             }}
//           />
//       </View>
//   </View>
// )
// }



// const styles = StyleSheet.create({
//   container:{
//       flex:1
//   },
//   text1:{
//       color:colors.grey1,
//       fontSize:16,

//   },
//   TextInput1: {
//       borderWidth:1,
//       borderColor:'#86939e',
//       marginHorizontal:20,
//       borderRadius:12,
//       marginBottom: 20,
//       paddingLeft:15,
//       height: 50,
//   },

//   TextInput2: {
//       borderWidth:1,
//       borderRadius:12,
//       marginHorizontal:20,
//       borderColor:'#86939e',
//       flexDirection:'row',
//       justifyContent:'center',
//       alignContent:'center',
//       alignItems:'center',
//       paddingLeft:15,
//       height: 50,

//   },
//   socialIcon:{
     
//       justifyContent:"center" ,
//       borderRadius:12,
//       borderWidth:2,
//       borderColor:'#ff8ccc',
//       height: 55,
//       marginHorizontal:20,
//       width: "100%",
//       marginRight: 30,
//   },
//   createButton:{
//       backgroundColor:'white',
//       justifyContent:'center',
//       alignContent:'center',
//       borderRadius:12,
//       borderWidth:1,
//       borderColor:'#2B60DA',
//       height: 50,
//       paddingHorizontal:15,
//   },
//   buttonTitle:{
//       color:"#2B60DA",
//       fontSize:20,
//       fontWeight: 'bold',
//       alignItems:'center',
//       justifyContent:"center" ,
//       marginTop:-3 ,
//   },
//   submitButton: {
//     // backgroundColor: 'blue',
//     padding: 12,
//     // width: '100%',
//     alignItems: 'center',
//     marginTop: 16,
//     justifyContent:'center'
//   },
// })




