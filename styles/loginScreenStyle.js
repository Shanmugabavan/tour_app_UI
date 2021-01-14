import {Dimensions, StyleSheet} from "react-native";
const {width,height}=Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1e90ff',
    },
  
    welcome:{
      fontSize:30,
      color:"#fff",
      textAlign:'center',
      margin: 10,
    },
    instructions:{
      textAlign:'center',
      color:'#333333',
      marginBottom:5,
      fontSize:20,
    },
    input:{
      width:"90%",
      padding:15,
      marginBottom:10,
      
      backgroundColor:"#fff",
  
    },
    login:{
      color:'#000',
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
  
    },
    loginButton:{
      backgroundColor:"#FFD700",
      padding:15,
      width:'50%',
    },
  }); 