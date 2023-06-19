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
import { Divider } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
// import { createCollectionAndDocument } from '../adpater';
import { Product } from './../components/Product';
import COLORS from './../global/LandingColors';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productPhotoUri, setProductPhotoUri] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const showFeedbackMessage = (message) => {
    setFeedbackMessage(message);
    setTimeout(() => {
      setFeedbackMessage('');
    }, 3000); // hide message after 3 seconds
  };

  // const handleAddProduct = async () => {
  //   try {
  //     setIsLoading(true);
  //     const imageUrl = await uploadImage(productPhotoUri);
  //     const result = await createCollectionAndDocument('products', {
  //       name: productName,
  //       description: productDesc,
  //       price: productPrice,
  //       photoUri: imageUrl,
  //     });
  //     setIsLoading(false);
  //     console.log(result);
  //     showFeedbackMessage('Product added successfully!');
  //   } catch (error) {
  //     setIsLoading(false);
  //     setErrorMessage('Failed to add product. Please try again later.');
  //     console.log(error);
  //     showFeedbackMessage('Failed to add product. Please try again later.');
  //   }
  // };

  const handleAddProduct = async () => {
    try {
      setIsLoading(true);
  
      // Upload the product photo to a storage service (assuming "uploadImage" is implemented)
      const imageUrl = await uploadImage(productPhotoUri);
  
      // Create a new document in the "products" collection with the product details
      const productData = {
        name: productName,
        description: productDesc,
        price: productPrice,
        photoUri: imageUrl,
      };
  
      const docRef = await addDoc(collection(db, 'products'), productData);
  
      setIsLoading(false);
      console.log('Product added successfully:', docRef.id);
      showFeedbackMessage('Product added successfully!');
    } catch (error) {
      setIsLoading(false);
      const errorMessage = 'Failed to add product. Please try again later.';
      setErrorMessage(errorMessage);
      console.error(error);
      showFeedbackMessage(errorMessage);
    }
  };
  
  
  const handleImageUpload = () => {
    const options = {
      title: 'Select Product Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        setErrorMessage('Failed to upload image. Please try again later.');
        console.log('ImagePicker Error: ', response.error);
      } else {
        setProductPhotoUri(response.uri);
      }
    });
  };

  // const handleImageUpload = () => {
  //   const options = {
  //     title: 'Select Product Photo',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  
  //   ImagePicker.launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       setErrorMessage('Failed to upload image. Please try again later.');
  //       console.log('ImagePicker Error: ', response.error);
  //       showFeedbackMessage('Failed to upload image. Please try again later.');
  //     } else {
  //       setProductPhotoUri(response.uri);
  //     }
  //   });
  // };


  // const handleAddProduct = async () => {
  //   try {
  //     setIsLoading(true);
  //     const imageUrl = await uploadImage(productPhotoUri);
  //     const result = await createCollectionAndDocument('products', {
  //       name: productName,
  //       description: productDesc,
  //       price: productPrice,
  //       photoUri: imageUrl,
  //     });
  //     setIsLoading(false);
  //     console.log(result);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setErrorMessage('Failed to add product. Please try again later.');
  //     console.log(error);
  //   }
  // };


  // const handleImageUpload = () => {
  //   const options = {
  //     title: 'Select Product Photo',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   ImagePicker.showPicker(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       setErrorMessage('Failed to upload image. Please try again later.');
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setProductPhotoUri(response.uri);
  //     }
  //   });
  // };

  // const handleImageUpload = () => {
  //   const options = {
  //     title: 'Select Product Photo',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  
  //   ImagePicker.launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       setErrorMessage('Failed to upload image. Please try again later.');
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setProductPhotoUri(response.uri);
  //     }
  //   });
  // };


  // It seems that showPicker, showImagePicker,  launchImageLibrary or launchCamera is not a valid function of ImagePicker. 
  // Instead, try using launchImageLibrary or launchCamera to show the image picker. 
  // Here's an example of how to use launchImageLibrary:

  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          keyboardVerticalOffset={100}>
          <View style={styles.profileCard}>
            <View style={styles.container}>
              <View style={{...styles.row, flex: 1, flexDirection: 'column'}}>
                <Divider style={styles.divider} />
                <View style={{...styles.row, flex: 1}}>
                  <View style={{...styles.productPhotoWrapper}}>
                  {productPhotoUri ? (
                      <Image
                        source={{uri: productPhotoUri}}
                        style={styles.productPhoto}
                      />
                    ) : (
                      <View style={styles.productPhotoPlaceholder}>
                        <Text style={styles.productPhotoPlaceholderText}>
                          Add Product Photo
                        </Text>
                      </View>
                    )}
                    {feedbackMessage ? (
                      <View style={styles.feedbackContainer}>
                        <Text style={styles.feedbackMessage}>{feedbackMessage}</Text>
                      </View>
                    ) : null}
                  <TouchableOpacity
                    style={styles.addPhotoButton}
                    onPress={handleImageUpload}>
                    <Text style={styles.addPhotoButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Product:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter product name"
              value={productName}
              // onChangeText={setSurname}
              onChangeText={text => setProductName(text)}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Price:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter product price"
              value={productPrice}
              // onChangeText={setEmail}
              onChangeText={text => setProductPrice(text)}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>description:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Enter your address"
              value={productDesc}
              // onChangeText={setAddress}
              onChangeText={text => setProductDesc(text)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          // onClick = {create}
          onPress={handleAddProduct}>
          {/* <Icon name="check" size={24} color={COLORS.white} /> */}
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}

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
    margin: 30,
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

  input: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    width: 220,
    marginHorizontal: 10,
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
  productPhotoWrapper: {
    height: 200,
    width: 200,
    borderRadius: 100,
    overflow: 'hidden',
    },
    productPhoto: {
    height: '50%',
    width: '50%',
    },
    productPhotoPlaceholder: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
    },
    productPhotoPlaceholderText: {
    color: COLORS.white,
    fontSize: 14,
    },
    addPhotoButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    },
    addPhotoButtonText: {
    color: COLORS.white,
    fontSize: 20,
    },
    inputWrapper: {
    flex: 1,
    },
});
