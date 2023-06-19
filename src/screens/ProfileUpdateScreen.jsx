
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import { ScrollView, TextInput as Textinput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../global/LandingColors';
import products from '../global/constants/products';
import categories from '../global/constants/categories';
import HomeHeader from '../components/HomeHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ref, set } from "firebase/database";
import { db, auth } from '../components/config';

import { Divider, Snackbar } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

export default function ProfileUpdateScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [dob, setDob] = useState(new Date());


  const handlePressSubmit = () => {
    // const userId = 'my_user_id';
    const userId = auth.currentUser;
    set(ref(db, `profiles/${userId}`), {
      userName: userName,
      surname: surname,
      email: email,
      address: address,
    }).then(() => {
      setSnackbarMessage('Data saved successfully');
      setShowSnackbar(true);
    }).catch((error) => {
      setSnackbarMessage(`Error while saving data: ${error}`);
      setShowSnackbar(true);
    });
    console.log('Data saved successfully');
    setUserName('')
    setSurname('')
    setEmail('')
    setAddress('')
  };

  return (
        <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={100}>
      <View style={styles.profileCard}>
        <View style={styles.container}>
          <View style={styles.container}>
            {/* <View style={styles.row}>
              <Text style={styles.label}>Date of Birth:</Text> */}
              {/* <View>
                <TouchableOpacity onPress={openPicker}>
                  <Text>Select Date of Birth</Text>
                  <TextInput value={dob.toLocaleDateString()} editable={false} />
                </TouchableOpacity>
                {showPicker && (
                  <DateTimePicker
                    value={dob}
                    mode="date"
                    display="spinner"
                    onChange={handleDobChange}
                  />
                )}
              </View> */}
            {/* </View> */}
            <View style={{...styles.row, flex:1, flexDirection:'column'}}>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={userName}
              onChangeText={(userId)=>setUserName(userId)}
            />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={surname}
              // onChangeText={setSurname}
              onChangeText={(userId)=>setSurname(userId)}

            />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.row}>
        <Text style={styles.label}>UserEmail:</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            value={email}
            // onChangeText={setEmail}
            onChangeText={(userId)=>setEmail(userId)}

        />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.row}>
      <Text style={styles.label}>Address:</Text>
      <TextInput
                      style={styles.input}
                      placeholder="Enter your address"
                      value={address}
                      // onChangeText={setAddress}
                      onChangeText={(userId)=>setAddress(userId)}

                    />
      </View>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={handlePressSubmit}>
      <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button}
        // onClick = {create}
        onPress={handlePressSubmit}
        >
        <Icon name="check" size={24} color={COLORS.white} />
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    
      </View>
      </View>
      </View>


<Snackbar
visible={showSnackbar}
onDismiss={() => setShowSnackbar(false)}
duration={Snackbar.DURATION_SHORT}
>
{snackbarMessage}
</Snackbar>

      </KeyboardAvoidingView>
    </SafeAreaView>
        </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileCard: {
    flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        margin:30,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.grey,
      },
      
    input:{
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    width:220,
    marginHorizontal:10
    },
    button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 12,
    },
    buttonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    },
});


