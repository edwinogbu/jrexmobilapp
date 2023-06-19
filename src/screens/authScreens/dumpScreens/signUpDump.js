import React, {useState, useRef, useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, StatusBar, useWindowDimensions, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ScrollView, TextInput as Textinput } from 'react-native-gesture-handler';

import { colors,parameters,title } from '../../global/styles'
import * as Animatable from 'react-native-animatable'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import * as Yup from 'yup';
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { LoginManager, AccessToken } from "react-native-fbsdk-next";


import { Button, SocialIcon, Alert} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Header from '../../components/Header';
import COLORS from './../../global/LandingColors';
import { Formik } from 'formik';
import { SignInContext } from './../../contexts/authContext';

// import firebase from 'firebase/app';
// import 'firebase/auth';





// const initialValues = { phoneNumber:'', firstName: '', lastName: '', email:'', phone: '', password: '' }

export default function SignUpScreen({navigation}) {

  const { dispatchSignedIn} = useContext(SignInContext);
  // const { dispatchSignUp } = useContext(SignInContext);
    // const [textInput2Focussed, setTextInput2Focussed] = useState(false);
    const textInput1= useRef(1);
    const textInput2= useRef(2);


    const [textInput1Focussed, setTextInput1Focussed] = useState(false);
    const [textInput2Focussed, setTextInput2Focussed] = useState(false);
  
    const validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Required')
    });
  
    



async function SignUp(values) {
  try {
    const { firstName, lastName, phoneNumber, email, password } = values;
    const user = await auth().createUserWithEmailAndPassword(email, password);
    if (user) {
      // Save user info to Realtime Database
      await database().ref(`/users/${user.user.uid}`).set({
        firstName,
        lastName,
        phoneNumber,
        email
      });
      
      console.log(user);
      dispatchSignedIn({ type: "UPDATE_SIGN_UP", payload: { userToken: "signed-up" } });
      console.log("User signed up successfully!");
    }
    return user;
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

      <Formik    initialValues={{ email: '', password: '', confirmPassword: '' }}
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
             style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
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
             style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
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
             style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
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
             style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
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
             style={{width:"80%",  backgroundColor:COLORS.ligth, color:COLORS.dark, }}
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
             style={{width:"80%",  backgroundColor:COLORS.ligth, color:COLORS.dark, }}
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
 
  
    {/* <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
      }}
    >
      {(props) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ ...styles.TextInput1, marginTop: 10, marginBottom: 10 }}>
            <Animatable.View animation={textInput1Focussed ? '' : 'fadeInLeft'} duration={400}>
              <Icon
                name="email"
                iconStyle={{ color: 'gray' }}
                type="material"
                size={28}
              />
            </Animatable.View>

            <TextInput
              style={{ width: '80%' }}
              placeholder="Email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              onFocus={() => setTextInput1Focussed(false)}
              onBlur={() => setTextInput1Focussed(true)}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {props.touched.email && props.errors.email && (
              <Text style={{ color: 'red' }}>{props.errors.email}</Text>
            )}
          </View>

          <View style={{ ...styles.TextInput2, marginBottom: 10 }}>
            <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400}>
              <Icon
                name="lock"
                iconStyle={{ color: 'gray' }}
                type="material"
                size={28}
              />
            </Animatable.View>

            <TextInput
              style={{ width: '80%' }}
              placeholder="Password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              secureTextEntry
              onFocus={() => setTextInput2Focussed(false)}
              onBlur={() => setTextInput2Focussed(true)}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {props.touched.password && props.errors.password && (
              <Text style={{ color: 'red' }}>{props.errors.password}</Text>
            )}
          </View>

          <View style={{ ...styles.TextInput2, marginBottom: 10 }}>
            <Animatable.View animation={textInput2Focussed ? '' : 'fadeInLeft'} duration={400}>
              <Icon
                name="lock"
                iconStyle={{ color: 'gray' }}
                type="material"
                size={28}
              />
            </Animatable.View>

            <TextInput
              style={{ width: '80%' }}
              placeholder="Confirm Password"
              onChangeText={props.handleChange('confirmpassword')}
value={props.values.confirmPassword}
secureTextEntry
onFocus={() => setTextInput2Focussed(false)}
onBlur={() => setTextInput2Focussed(true)}
autoCapitalize="none"
autoCorrect={false}
/>
        {props.touched.confirmPassword && props.errors.confirmPassword && (
          <Text style={{ color: 'red' }}>{props.errors.confirmPassword}</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )}
</Formik> */}





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




// <Formik
// initialValues={{
//   email: '',
//   password: '',
//   confirmPassword: '',
// }}
// validationSchema={schema}
// onSubmit={(values) => {
//   SignUp(values);
//   console.log(values);
// }}
// >
// {(props)=>(
//   <View>
//     <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
//       <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
//         <Icon  
//           name="email"
//           iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
//           type="material"
//           size={28}
//           style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
//         />
//       </Animatable.View>
//       <TextInput 
//         style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
//         placeholder='Email'
//         ref={textInput1}
//         onFocus={()=>setTextInput2Focussed(true)}
//         onBlur={()=>setTextInput2Focussed(false)}
//         onChangeText={props.handleChange('email')}
//         value={props.values.email}
//       />
//        {props.touched.email && props.errors.email && <Text style={{color: 'red', bottom:-30, justifyContent:'center', alignContent:'center', alignItems:'center'}}>{props.errors.email}</Text>}
//     </View>
//     <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
//       <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
//         <Icon  
//           name="lock"
//           iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
//           type="material"
//           size={28}
//           style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
//         />
//       </Animatable.View>
//       <TextInput 
//         style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
//         placeholder='Password'
//         ref={textInput2}
//         secureTextEntry={true}
//         onFocus={()=>setTextInput2Focussed(true)}
//         onBlur={()=>setTextInput2Focussed(false)}
//         onChangeText={props.handleChange('password')}
//         value={props.values.password}
//       />
//       {props.touched.password && props.errors.password && <Text style={{color: 'red', bottom:-30, justifyContent:'center', alignContent:'center'}}>{props.errors.password}</Text>}

//     </View>
//     <View style={{...styles.TextInput2, marginTop:10, marginBottom:10, backgroundColor:COLORS.primary}}>
//       <Animatable.View animation ={textInput2Focussed? "": "fadeInLeft"} duration={400} style={{backgroundColor:COLORS.primary, color:COLORS.white,}}>
//         <Icon  
//           name="lock"
//           iconStyle = {{color:colors.grey3, backgroundColor:COLORS.primary, color:COLORS.white}}
//           type="material"
//           size={28}
//           style={{backgroundColor:COLORS.primary, color:COLORS.white, marginTop:10}}
//         />
//       </Animatable.View>
//       <TextInput 
//         style={{width:"80%", backgroundColor:COLORS.ligth, color:COLORS.dark}}
//         placeholder='Confirm Password'
//         ref={textInput2}
//         secureTextEntry={true}
//         onFocus={()=>setTextInput2Focussed(true)}
//         onBlur={()=>setTextInput2Focussed(false)}
//         onChangeText={props.handleChange('confirmPassword')}
//         value={props.values.confirmPassword}
//       />
//       {props.touched.confirmPassword && props.errors.confirmPassword && <Text style={{color: 'red', top:-30, justifyContent:'center', alignContent:'center'}}>{props.errors.confirmPassword}</Text>}

//     </View>
   
//     <View style={{marginHorizontal:15, marginVertical:20, marginTop:30, marginRight: 40,}}>
//           <Button 
//             title="CREATE MY ACCOUNT"
//             buttonStyle = {parameters.styledButton}
//             titleStyle ={parameters.buttonTitle}
//             onPress={()=>{props.handleSubmit()}}
//           />
//       </View>
//       </View>
         
//       )}
//       </Formik>
    






// import React, {useState, useRef} from 'react';
// import { View, Text, StyleSheet, StatusBar, useWindowDimensions, TextInput, ScrollView } from 'react-native';
// import { colors,parameters,title } from '../../global/styles'
// import * as Animatable from 'react-native-animatable'

// import { Button, SocialIcon} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
// // import Icon from 'react-native-vector-icons/Ionicons';

// import { Formik } from 'formik';
// import Header from './../../components/Header';

// const initialValues = {phone_number:'', name:"", sur_name:"", email:'', password:"", username:''}

// function SignUpScreen(navigation) {
//     const [textInput2Focussed, setTextInput2Focussed] = useState(false);
//     const textInput1= useRef(1);
//     const textInput2= useRef(2);

//     const[passwordFocussed, setPasswordFocussed] = useState(false)
//     const[passwordBlured, setPasswordBlured] = useState(false)
//     return (
//         <View style={styles.container}>
//         <Header  title='MY ACCOUNT' type='arrow-left' navigation={navigation}/>
    
//         <ScrollView keyboardShouldPersistTaps="always" >
//            <View style={styles.container}>
//              <Text style={styles.text1}>Sign-Up</Text>
//            </View>
//            <Formik initialValues={initialValues} onSubmit={(values)=>{SignUpScreen(values)}}>
//               {(props)=>(
//                     <View style={styles.view2}>
//                        <View>
//                             <Text style={styles.text2}>New On J-Rex?</Text>
//                        </View>
                       
//                           <View style={styles.view6}> 
//                                 <TextInput 
//                                     placeholder='Phone Number'
//                                     style={styles.input1}
//                                     keyboardType = "number-pad"
//                                     autoFocus={true}
//                                     onChangeText = {props.handleChange('phone_number')}
//                                     value ={props.values.phone_number}

//                                 />  
//                            </View>

                           
//                           <View style={styles.view6}> 
//                                 <TextInput 
//                                     placeholder='Name'
//                                     style={styles.input1}
//                                     autoFocus={false}
//                                     onChangeText = {props.handleChange('name')}
//                                     value ={props.values.name}

//                                 />  
//                            </View>
//                           <View style={styles.view6}> 
//                                 <TextInput 
//                                     placeholder='Sur Name'
//                                     style={styles.input1}
//                                     autoFocus={false}
//                                     onChangeText = {props.handleChange('sur_name')}
//                                     value ={props.values.sur_name}

//                                 />  
//                            </View>


//                             <View style={styles.view10}>
//                                 <View>
//                                     <Icon  
//                                         name="email"
//                                         style={styles.email}
//                                         color= {colors.grey4}
//                                         type="material"

//                                     />
//                                 </View>
//                                     <View style={styles.view11}>
//                                         <TextInput 
//                                             style={styles.input4}
//                                             placeholder='Email '
//                                             autoFocus={false}
//                                             onChangeText = {props.handleChange('email')}
//                                             value ={props.values.email}
//                                         />
//                                     </View>
//                             </View>



//                             <View style={styles.view14}>
//                                 <Animatable.View animation ={passwordFocussed? "fadeInRight": "fadeInLeft"} duration={400}>
//                                 <Icon  
//                                     name="lock"
//                                     color= {colors.grey3}
//                                     type="material"
//                                     style={{}}

//                                 />
//                                 </Animatable.View>
                                
//                                 <TextInput 
//                                     placeholder='Password'
//                                     style={styles.input4}
//                                     autoFocus={false}
//                                     onChangeText = {props.handleChange('password')}
//                                     value ={props.values.password}
//                                     onFocus={()=>setPasswordFocussed(true)}
//                                     onBlur = {()=>setPasswordBlured(true)}
//                                 />


//                                 <Animatable.View animation ={passwordBlured? "fadeInLeft":"fadeInRight"} duration={400}>
//                                     <Icon  
//                                         name="visibility-off"
//                                         iconStyle = {colors.grey3}
//                                         type="material"
//                                         style={{marginRight:10}}
//                                     />
//                                 </Animatable.View>
//                             </View>
                           
//                             <View style={styles.view15}>
//                                 <Text style={styles.text3}>By ordering or logging into an account you are</Text>
//                                <View style={styles.view16}>
//                                <Text style={styles.text3}>agreeing with our</Text>
//                                <Text style={styles.text4}>Terms & Condition</Text>
//                                <Text style={styles.text3}>and</Text>

//                                </View>
//                                <Text style={styles.text4}>Privacy Statement</Text>
//                             </View>
                            
//                             <View style={styles.view17}>
//                                 <Button 
//                                     title="CREATE MY ACCOUNT"
//                                     buttonStyle = {styles.button1}
//                                     titleStyle ={styles.title1}
//                                     onPress={props.handleSubmit}
//                                 />
//                         </View>
                      
//                     </View>
                    
                    
//               )}
//            </Formik>

//            <View style={styles.view18}>
//             <Text tyle={{...styles.text1, fontWeight:'bold'}}>Already Have Account?</Text>
//         </View>

//         <View style={styles.view19}>
//             <View style={styles.view20}>
//                 <Text tyle={{...styles.text3, fontWeight:'bold'}}>Already Have Account?</Text>
//             </View>
//         </View>
//         <View style={styles.view21}>
//             <Button 
//               title="SIGN IN"
//               buttonStyle = {styles.button2}
//               titleStyle ={styles.title2}
//               onPress={()=>{
//                 navigation.navigate("SignInScreen")
//               }}
//             />
//         </View>
//         </ScrollView>
//         </View>
//     )
// }

// export default SignUpScreen







// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text1: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginTop: 10,
//       color: '#333',
//     },
//     view2: {
//       alignItems: 'center',
//       padding: 20,
//     },
//     text2: {
//       fontSize: 18,
//       marginBottom: 10,
//       color: '#333',
//     },
//     view6: {
//       marginTop: 10,
//       width: '100%',
//       alignItems: 'center',
//     },
//     TextInput1: {
//       width: '80%',
//       height: 50,
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: '#333',
//       paddingLeft: 15,
//       fontSize: 16,
//       color: '#333',
//     },
//     view10: {
//       flexDirection: 'row',
//       marginTop: 10,
//       width: '100%',
//       alignItems: 'center',
//     },
//     email: {
//       marginRight: 10,
//     },
//     view14: {
//       flexDirection: 'row',
//       marginTop: 10,
//       width: '100%',
//       alignItems: 'center',
//     },
//     input4: {
//       width: '70%',
//       height: 50,
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: '#333',
//       paddingLeft: 15,
//       fontSize: 16,
//       color: '#333',
//       marginLeft: 10,
//     },
//   });
  

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//       backgroundColor:'white'
//     },
//     view1:{
//         justifyContent:'center',
//         alignItems:'flex-start',
//         marginTop:10,
//         marginBottom:10,
//         paddingHorizontal:15
//     },
   
//     view2:{
//         justifyContent:'flex-start',
//         backgroundColor:'white',
//         paddingHorizontal:15
//     },
//     view3:{
//         marginTop:5,
//         marginBottom:15
//     },
//     view4:{
//         flexDirection:'row',
//         borderWidth:1,
//         borderColor:colors.grey4,
//         borderRadius:12,
//         paddingLeft:12,
//     },
//     view5:{
//         marginLeft:30,
//         marginTop:20,
//     },
//     view6:{
//         flexDirection:'row',
//         borderWidth:1,
//         borderColor:colors.grey4,
//         borderRadius:12,
//         paddingLeft:5,
//         marginTop:20,
//         height:48
//     },
//     view7:{
//         marginLeft:0,
//         maxWidth:"65%"
//     },
//     view8:{
//         flexDirection:'row',
//         borderWidth:1,
//         borderColor:colors.grey4,
//         borderRadius:12,
//         paddingLeft:5,
//         marginTop:20,
//         height:48
//     },
//     view9:{
//         marginLeft:0,
//         maxWidth:"65%"
//     },
//     view10:{
//         flexDirection:'row',
//         borderWidth:1,
//         borderColor:colors.grey4,
//         borderRadius:12,
//         paddingLeft:5,
//         marginTop:20,
//         height:48
//     },

//     view11:{
//         marginLeft:30,
//         maxWidth:"65%"
//     },
//     view13:{
//         flexDirection:'row',
//         height:40,
//     },
//     view14:{
//         flexDirection:'row',
//         borderWidth:1,
//         borderColor:colors.grey4,
//         borderRadius:12,
//         paddingLeft:5,
//         marginTop:20,
//         height:48
//     },
//     view15:{
//         alignItems:"center",
//         justifyContent:'center',
//         marginTop:10,
//     },
//     view16:{
//        flexDirection:'row'
//     },
//     view17:{
//        marginVertical:10,
//        marginTop:30,
//     },
//     view18:{
//         flex:1,
//        justifyContent:'flex-start',
//        alignItems:'center',
//        paddingTop:15
//     },
//     view19:{
//        backgroundColor:'white',
//        fontWeight:'bold'
//     },
//     view20:{
//        marginTop:5
//     },
//     view21:{
//        marginTop:5,
//        alignItems:'flex-end'
//     },

//     text1:{
//         fontSize:22,
//         color:colors.buttons,
//         fontWeight:15
//      },

//      text2:{
//         fontSize:15,
//         color:colors.grey4,
//         fontWeight:15
//      },
//      text3:{
//         fontSize:13,
       
//      },
//      text4:{
//         textDecorationLine:'underline',
//         color:'green',
//         fontSize:13,
       
//      },
//      text5:{
//        fontSize:15,
//         fontWeight:'bold',
       
//      },
     


//      input1:{
//         fontSize:16,
//         // marginLeft:-20,
//         // marginBottom:-10,
//      },
//      input2:{
//         fontSize:16,
//         marginLeft:0,
//         marginBottom:0,
//      },
//      input3:{
//         fontSize:16,
//         marginLeft:0,
//         marginBottom:0,
//      },
//      input4:{
//         fontSize:16,
//         marginLeft:-20,
//         marginBottom:-10,
//      },

//      email:{
//         fontSize:16,
//         padding:0,
//         marginBottom:0,
//         marginTop:11,
//         marginLeft:12,
       
//     },

//     button1:{
//         backgroundColor:colors.buttons,
//         alignItems:"center",
//         justifyContent:'center',
//         borderRadius:12,
//         borderWidth:1,
//         borderColor:colors.background2,
//         height:50,
//         paddingHorizontal:20,
//         width:'100%',
//     },
    

//     button2:{
//         backgroundColor:'white',
//         justifyContent:'center',
//         alignContent:'center',
//         borderRadius:12,
//         borderWidth:1,
//         borderColor:'#2B60DA',
//         height: 50,
//         paddingHorizontal:15,
//     },
    
//     title1:{
//         color:'white',
//         fontSize:20,
//         fontWeight:'bold',
//         alignItems:'center',
//         justifyContent:"center",
//         marginTop:-3,
//      },
//     title2:{
//         color:colors.background2,
//         fontSize:16,
//         fontWeight:'bold',
//         alignItems:'center',
//         justifyContent:"center",
//         marginTop:-3,
//      },

// })







// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Input } from 'react-native';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// // import Input from './Input';

// const validationSchema = yup.object().shape({
//   phone_number: yup.string().required(),
//   name: yup.string().required(),
//   sur_name: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().min(6).required(),
//   username: yup.string().required(),
// });

// const SignUp = () => {
//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{
//           phone_number: '',
//           name: '',
//           sur_name: '',
//           email: '',
//           password: '',
//           username: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={values => {
//           console.log(values);
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
//           <View>
//             <Input
//               label="Phone Number"
//               onChangeText={handleChange('phone_number')}
//               onBlur={handleBlur('phone_number')}
//               value={values.phone_number}
//               error={errors.phone_number}
//             />
//             <Input
//               label="Name"
//               onChangeText={handleChange('name')}
//               onBlur={handleBlur('name')}
//               value={values.name}
//               error={errors.name}
//             />
//             <Input
//               label="Surname"
//               onChangeText={handleChange('sur_name')}
//               onBlur={handleBlur('sur_name')}
//               value={values.sur_name}
//               error={errors.sur_name}
//             />
//             <Input
//               label="Email"
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//               error={errors.email}
//             />
//             <Input
//               label="Password"
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//               error={errors.password}
//               secureTextEntry
//             />
//             <Input
//               label="Username"
//               onChangeText={handleChange('username')}
//               onBlur={handleBlur('username')}
//               value={values.username}
//               error={errors.username}
//             />
//             <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
//               <Text style={styles.submitButtonText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: 16
//     },
//     submitButton: {
//       backgroundColor: 'blue',
//       padding: 12,
//       width: '100%',
//       alignItems: 'center',
//       marginTop: 16
//     },
//     submitButtonText: {
//       color: '#fff',
//       fontWeight: 'bold'
//     }
//   });

// const createUser = async (email, password, firstName, lastName, phoneNumber, dispatchSignedIn) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     if (userCredential) {
//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           firstName: firstName,
//           lastName: lastName,
//           phoneNumber: phoneNumber,
//           email: email,
//           userId: userCredential.user.uid
//         });
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
//     }

   
//     dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: userCredential.user.uid } });

//     console.log('User signed up successfully!');
//     console.log('Name:', `${userCredential.user.firstName} ${userCredential.user.lastName}`);
//     console.log('Email:', userCredential.email);
//     console.log('Phone:', userCredential.phoneNumber);

//     // Update user state
//     setUser({
//       uid: userCredential.user.uid,
//       email: userCredential.user.email,
//       displayName: `${userCredential.user.firstName} ${userCredential.user.lastName}`,
//       photoURL: userCredential.user.photoURL,
//       firstName: userCredential.user.firstName,
//       lastName: userCredential.user.lastName,
//       phoneNumber: userCredential.user.phoneNumber,
//     });

//     // return userCredential.user.uid;
//     return userCredential;
//   } catch (error) {
//     switch (error.code) {
//       case 'auth/email-already-in-use':
//         Alert.alert('Error', 'The email address is already in use.');
//         break;
//       case 'auth/invalid-email':
//         Alert.alert('Error', 'The email address is not valid.');
//         break;
//       case 'auth/weak-password':
//         Alert.alert('Error', 'The password is too weak.');
//         break;
//       default:
//         console.error(error);
//         Alert.alert('Error', 'An unknown error occurred.');
//     }
//     throw error;
//   }
// };

