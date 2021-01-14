import React, {Component} from  'react';
import {platform,StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';
import {styles} from '../styles/loginScreenStyle';


export default class LoginScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login
        </Text>
        <TextInput style={styles.input} placeholder='Username'>
          
        </TextInput>
        <TextInput style={styles.input} placeholder='Password'>
          
        </TextInput>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>

      </View>
    ); 

    
  }
}

