import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from './../firebase';

const SalesReportDetailScreen = ({ navigation, route }) => {
  const { checkoutId } = route.params;
  const [checkoutData, setCheckoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      try {
        const checkoutDocRef = doc(db, 'checkouts', checkoutId);
        const docSnapshot = await getDoc(checkoutDocRef);

        if (docSnapshot.exists()) {
          setCheckoutData(docSnapshot.data());
          setLoading(false);
        } else {
          setLoading(false);
          setError('Checkout data not found');
        }
      } catch (error) {
        console.log('Error fetching checkout data:', error);
        setLoading(false);
        setError('Error fetching checkout data');
      }
    };

    fetchCheckoutData();
  }, [checkoutId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>SN:</Text>
        <Text style={styles.value}>{checkoutData.sn}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Orders:</Text>
        <Text style={styles.value}>{JSON.stringify(checkoutData.orders)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{checkoutData.date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{checkoutData.status}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{checkoutData.address}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total Amount:</Text>
        <Text style={styles.value}>{checkoutData.totalAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
});

export default SalesReportDetailScreen;
