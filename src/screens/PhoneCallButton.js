import React, { useState } from 'react';
import { Linking, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { PermissionsAndroid } from 'react-native';

async function requestCallPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title: 'Phone Call Permission',
        message: 'This app needs access to make phone calls',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can make phone calls');
    } else {
      console.log('Phone call permission denied');
    }
    return granted;
  } catch (err) {
    console.warn(err);
  }
}

export default function PhoneCallButton() {
  const [disabled, setDisabled] = useState(false);
  const phoneNumber = '+2348165688038';

  async function makePhoneCall() {
    const granted = await requestCallPermission();
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      setDisabled(true);
    }
  }

  return (

    <View style={styles.MainContainer}>


    <TouchableOpacity onPress={makePhoneCall} disabled={disabled} activeOpacity={0.7} style={styles.button}>
      <Text>Call {phoneNumber}</Text>
    </TouchableOpacity>

    <Text style={{marginTop: 400}}>For Quick Delivery Call J-Rex Water Now!!!</Text>

  </View>
   
  );
}





const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
  
      width: '80%',
      padding: 6,
      backgroundColor: '#4130E6',
      borderRadius: 7,
    },
  
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    }
  
  });
  