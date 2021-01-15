import React, { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainScreen from './screens/mainScreen';
import LoginScreen from './screens/loginScreen';
import EagleEyeView from './screens/eagleEyeView';
import SampleCard from './screens/sampleCard'
import VisitingArea from './screens/visitingAreas'
import EditProfileScreen from './screens/editProfile'

const {Navigator,Screen}=createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="mainScreen" component={EditProfileScreen}/>
        </Navigator>
      </NavigationContainer>
    );
  }
}  