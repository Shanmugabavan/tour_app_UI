
import { Right } from 'native-base';
import React, { Component,useState } from 'react';
import {View,Text, SafeAreaView, Image,ScrollView,TouchableOpacity,Switch,TextInput} from "react-native";
import {Dimensions, StyleSheet} from "react-native";
const {width,height}=Dimensions.get('screen');
import { Header } from 'react-native-elements';
import {FontAwesome5} from "@expo/vector-icons"; 
//



function ImageButton({title,description}){
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <>
        <View style={styles.imageButton}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <TouchableOpacity style={styles.addScheduleContainer}>
                <Text style={styles.addScheduleText}>Add to Schedule</Text>
            </TouchableOpacity>
            {/* <View style={styles.swipSwithContainer}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
             </View> */}
            
        </View>
        </>
    );
}


export default class VisitingArea extends Component {
  render(){
    return(
      <ScrollView>
        <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Visiting Areas', style: { color: '#fff',fontSize:30, fontWeight:"bold" } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.inputContainer}>
                <FontAwesome5 style={{
                    position:'absolute',
                    left:0,
                    top:5,
                }}
                name="search" size={20}/>
                <TextInput
                placeholderTextColor='#aaa' 
                placeholder="Search" 
                style={styles.input} />
        </View>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/ninearg.jpg")}
            style={styles.image}/>
            <ImageButton 
                title="Rumassala" 
                description="Rumassala,Formely Know as Bonua vista, is rain-forestd promontory that rises straight out of the sea on the eastern side of Galle Harbour"
                
                />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton 
                title="Mirissa"
                description="Rumassala,Formely Know as Bonua vista, is rain-forestd promontory that rises straight out of the sea on the eastern side of Galle Harbour" 
                />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image 
            source={require("../assets/images/dampulla.jpg")}
            style={styles.image}/>
            <ImageButton 
                title="Unawatta"
                description="Rumassala,Formely Know as Bonua vista, is rain-forestd promontory that rises straight out of the sea on the eastern side of Galle Harbour" 
                />
          </View>
        </TouchableOpacity>
        
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
        height:height/1.5,
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
        borderRadius:20,
    },

    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
        marginLeft:20,
    },


    description:{
        fontSize: 18,
        marginVertical:3,
        color: "black",
        textAlign: "left",
        marginLeft:20,
    },

    swipSwithContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent:"flex-end",
    },
    addScheduleContainer: {
        backgroundColor: 'rgba(0,0,0,5)',
        width: "40%",
        height: "25%",
        position: "absolute",
        bottom:5,
        alignSelf:"center",
        fontSize:100,
        backgroundColor:'blue',
        borderRadius:20,

    },

    addScheduleText:{
        fontSize: 20,
        marginVertical:3,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        // marginLeft:20,
    },

    inputContainer:{
        backgroundColor: "rgba(200,200,200,0.9)",
        // width:width/1.1,
        padding:8,
        marginTop:10,
        borderRadius:20,

        shadowColor: "#000",
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity:0.8,
        shadowRadius:1.3,
        backgroundColor:"white",

    },
    
    input:{
        color: "#000",
        marginLeft: 40,
    },

    




});