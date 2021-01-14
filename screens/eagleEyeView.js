// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {View,Text, SafeAreaView, Image,ScrollView} from "react-native";
import {styles} from "../styles/eagleEyeViewStyles";
import Input from "../components/Input";
import ImageButton from '../components/ImageButtonEagle';


export default class EagleEyeView extends Component {
  render(){
    return(
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/ninearg.jpg")}
            style={styles.image}/>
            <ImageButton  title="Visiting Areas"/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton  title="Schedule Routing" />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton title="Charges" />
          </View>
        </View>
        
      </ScrollView>
    );
  }
  
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
