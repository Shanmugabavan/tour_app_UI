// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {View,Text, SafeAreaView, Image,ScrollView} from "react-native";
import {styles} from "../styles/mainScreenStyles";
import Input from "../components/Input";
import ImageButton from '../components/ImageButton';


export default class MainScreen extends Component {
  render(){
    return(
      <ScrollView>
        <View style={styles.header}>
          <View style={{flex: 0.6}}>
            <Text style={styles.headerText}>Find your next trip!</Text>
          </View>
          <View style={{flex: 0.3,paddingTop:20 , alignItems:'flex-end'}}>
            <Image 
            style={styles.headerImage}
            source={require("../assets/images/dampulla.jpg")}/>
          </View>
        </View>
        <View style={{alignItems:"center"}}>
          <Input placeholder="Search" />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton title="Luxary" description="Stunning Places"/>
          </View>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/ninearg.jpg")}
            style={styles.image}/>
            <ImageButton title="Luxary" description="Stunning Places"/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/Sigiriya.jpg")}
            style={styles.image}/>
            <ImageButton title="Luxary" description="Stunning Places"/>
          </View>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton title="Luxary" description="Stunning Places"/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/Sigiriya.jpg")}
            style={styles.image}/>
            <ImageButton title="Luxary" description="Stunning Places"/>
          </View>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton title="Luxary" description="Stunning Places"/>
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
