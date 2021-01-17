// import { StatusBar } from 'expo-status-bar';
import { Right } from 'native-base';
import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {View,Text, SafeAreaView, Image,ScrollView,TouchableOpacity} from "react-native";
import {Dimensions, StyleSheet} from "react-native";
const {width,height}=Dimensions.get('screen');
import { Header } from 'react-native-elements';
import Routing from '../App'
// import {styles} from "../styles/eagleEyeViewStyles";
// import Input from "../components/Input";
// import ImageButton from '../components/ImageButtonEagle';
// import { TouchableOpacity } from "react-native";
// import {Text,TouchableOpacity} from "react-native";
// import {styles} from "../styles/eagleEyeViewStyles";

function ImageButton({title,way,recommendation,view_,rating}){
    return(
        <>
        <View style={styles.imageButton}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.way}>
                {way}
            </Text>
            <Text style={styles.recommendation}>
                {recommendation}
            </Text>
            <TouchableOpacity style={styles.view_}>
                <Text style={styles.view_text}>View details</Text>
            </TouchableOpacity>
            <View style={styles.rating}>
                <Text style={styles.rating_text}>{rating}</Text>
            </View>
        </View>
        </>
    );
}


export default class ScheduleRouting extends Component {
  render(){
    return(
      <ScrollView>
        {/* <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Visiting Areas', style: { color: '#fff',fontSize:30, fontWeight:"bold" } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
        /> */}
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/ninearg.jpg")}
            style={styles.image}/>
            <ImageButton 
                title="Plan A" 
                way="Mirrisa->Unawata->Rumassaka->Galle"
                recommendation="Recommender for 2 days vacation"
                rating="3.4"/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton 
                title="Plan B" 
                way="Mirrisa->Unawata->Rumassaka->Galle"
                recommendation="Recommender for 2 days vacation"
                rating="3.6"/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton 
                title="Plan C" 
                way="Mirrisa->Unawata->Rumassaka->Galle"
                recommendation="Recommender for 2 days vacation"
                rating="4"/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
  
  
}



export const styles=StyleSheet.create({
    imageContainer:{
        flexDirection:"row",
        marginTop:30,
    },
    imageView:{
        width:width,
        height:height/2,
        // borderWidth:1,
        borderColor:"#000",
        marginHorizontal:10,
        // borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 5,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    
    image:{
        width: '100%',
        height:'100%',
        borderRadius:20,

    },

    imageButton:{
        backgroundColor: 'rgba(0,0,0,5)',
        width: "100%",
        height: "40%",
        position: "absolute",
        bottom:0,
        left:0,
        fontSize:100,
        backgroundColor:'white',
    },

    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
        marginLeft:20,
    },

    way:{
        fontSize: 20,
        marginVertical:3,
        // fontWeight: "bold",
        color: "black",
        textAlign: "left",
        marginLeft:20,
    },
    recommendation:{
        fontSize: 20,
        marginVertical:3,
        // fontWeight: "bold",
        color: "black",
        textAlign: "left",
        marginLeft:20,
    },
    view_: {
        backgroundColor: 'rgba(0,0,0,5)',
        width: "40%",
        height: "25%",
        position: "absolute",
        bottom:5,
        left:5,
        fontSize:100,
        backgroundColor:'blue',
        borderRadius:20,

    },

    view_text:{
        fontSize: 20,
        marginVertical:3,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        // marginLeft:20,
    },

    rating: {
        backgroundColor: 'rgba(0,0,0,5)',
        width: "40%",
        height: "25%",
        position: "absolute",
        bottom:5,
        left:230,
        fontSize:100,
        backgroundColor:'black',
        borderRadius:20,

    },

    rating_text:{
        fontSize: 20,
        marginVertical:3,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        // marginLeft:20,
    },
    




});