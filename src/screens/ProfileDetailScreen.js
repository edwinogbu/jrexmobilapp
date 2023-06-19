import React, { useState, useEffect } from 'react';
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
// import COLORS from './../global/LandingColors';
import products from './../global/constants/products';
import categories from '../global/constants/categories';
import HomeHeader from './../components/HomeHeader';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Divider, Snackbar } from 'react-native-paper';

import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   SafeAreaView,
// } from 'react-native';
import { ref, onValue, off, set } from "firebase/database";
import { auth, firestore } from './../../firebase';

export default function ProfileDetailScreen({ route, navigation }) {
  const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState(null);

  // Listen for changes in user authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        // Fetch user profile data from Realtime Database
        const profileRef = ref(auth, `users/${user.uid}`);
        const profileListener = onValue(profileRef, snapshot => {
          setUserProfile(snapshot.val());
        });
        // Stop listening for changes when the component unmounts
        return () => {
          off(profileRef, profileListener);
        };
      } else {
        setUser(null);
        setUserProfile(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleDeleteProfile = () => {
    const profileRef = ref(auth, `users/${user.uid}`);
    set(profileRef, null)
      .then(() => {
        console.log("Profile deleted successfully");
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {userProfile ? (
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>First Name:</Text>
            <Text style={styles.value}>{userProfile.userName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userProfile.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{userProfile.address}</Text>
          </View>
          <Button
            title="Delete Profile"
            color={COLORS.primary}
            onPress={handleDeleteProfile}
          />
        </View>
      ) : (
        <Text>Loading user profile...</Text>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
},
row: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 16,
},
label: {
fontWeight: 'bold',
marginRight: 8,
},
value: {
flex: 1,
},
});

const COLORS = {
primary: '#007bff',
};