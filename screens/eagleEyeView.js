// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {View,Text, SafeAreaView, Image,ScrollView} from "react-native";
import {styles} from "../styles/eagleEyeViewStyles";
import Input from "../components/Input";
import ImageButton from '../components/ImageButtonEagle';
import Routing from '../App'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class EagleEyeView extends Component {
  render(){
    return(
      <ScrollView>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this.props.navigation.navigate('VisitingArea')}  >
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/ninearg.jpg")}
            style={styles.image}/>
            <ImageButton
              title="Visiting Areas"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}  onPress={() => this.props.navigation.navigate('Track_Sch')}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton  title="Schedule Routing" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this.props.navigation.navigate('Travel')}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/travelingmethods/Bus.jpg") }
            style={styles.image}/>
            <ImageButton title="Traveling" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this.props.navigation.navigate('Complain')}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/Complaints_and_Help/Complaint.jpg") }
            style={styles.image}/>
            <ImageButton title="Complaint" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this.props.navigation.navigate('Help')}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/Complaints_and_Help/Help.jpg") }
            style={styles.image}/>
            <ImageButton title="Help" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainerProfile} onPress={() => this.props.navigation.navigate('EditProfileScreen')}>
          <View style={styles.imageViewProfile}>
            <Image 
            source={require("../assets/images/profile/userAvatar.jpg")}
            style={styles.image}/>
            <ImageButton title="Profile" />
          </View>
        </TouchableOpacity>
        
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
