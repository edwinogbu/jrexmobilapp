import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import COLORS from './../global/LandingColors';
// import MapView from 'react-native-maps';

export default function JrexMapScreen() {
    return (
        <SafeAreaView style={styles.container}>
             {/* <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            /> */}
            <Text style={styles.text1}>Page Engineer On Duty</Text>
            <Text style={styles.text1}>Maps Coming Soon!</Text>
        </SafeAreaView>
       
    )
}



const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
        alignItems:'center',
        justifyContent:'center'
    },

    text1:{
        color:COLORS.white,
        fontWeight:'bold',
        fontSize:25,
    }
})