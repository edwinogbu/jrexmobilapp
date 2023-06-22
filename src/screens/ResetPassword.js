// import React, { useState, useContext } from "react";
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

// import { SignInContext } from './../contexts/authContext';

// const ResetPassword = () => {
//   const [resetEmail, setResetEmail] = useState("");
//   const { resetPassword } = useContext(SignInContext);

//   const handleResetPassword = () => {
//     resetPassword(resetEmail);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={resetEmail}
//         onChangeText={setResetEmail}
//       />
//       <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
//         <Text style={styles.resetButtonText}>Reset Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 16,
//   },
//   input: {
//     height: 40,
//     width: "100%",
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: "gray",
//     marginBottom: 16,
//     padding: 8,
//   },
//   resetButton: {
//     backgroundColor: "#007AFF",
//     borderRadius: 4,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//   },
//   resetButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default ResetPassword;

import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SignInContext } from './../contexts/authContext';

import Toast from 'react-native-toast-message';

const CustomToast = ({ text1, text2, onClose }) => {
    useEffect(() => {
      const timeout = setTimeout(onClose, 2000); // Automatically close the toast after 2 seconds
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <TouchableOpacity style={styles.toastContainer} activeOpacity={0.8} onPress={onClose}>
        <View style={styles.toastContent}>
          <Text style={styles.toastText1}>{text1}</Text>
          {text2 && <Text style={styles.toastText2}>{text2}</Text>}
        </View>
        <Text style={styles.closeIcon} onPress={onClose}>X</Text>
      </TouchableOpacity>
    );
  };

const ResetPassword = () => {
  const [resetEmail, setResetEmail] = useState("");
  const { resetPassword } = useContext(SignInContext);

  const handleResetPassword = () => {
    if (resetEmail) {
      resetPassword(resetEmail);
      Toast.show({
        type: 'success',
        position: 'bottom',
        autoHide: true,
        bottomOffset: 60,
        renderToast: ({ onHide }) => (
          <CustomToast text1="Reset Password" text2="Password reset link sent successfully!" onClose={onHide} />
        ),
      });
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        autoHide: true,
        bottomOffset: 60,
        renderToast: ({ onHide }) => (
          <CustomToast text1="Reset Password" text2="Please enter your email" onClose={onHide} />
        ),
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={resetEmail}
        onChangeText={setResetEmail}
      />
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    padding: 8,
  },
  resetButton: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  toastContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#555555",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  toastContent: {
    flex: 1,
    marginRight: 12,
  },
  toastText1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  toastText2: {
    color: "white",
    fontSize: 14,
  },
  closeIcon: {
    marginLeft: 12,
  },
});

export default ResetPassword;
