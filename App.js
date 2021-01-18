import React, { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
// import {createStackNavigator} from "@react-navigation/stack"; //another navigator
import {  createStackNavigator } from 'react-navigation-stack';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import MainScreen from './screens/mainScreen';
import LoginScreen from './screens/loginScreen';
import EagleEyeView from './screens/eagleEyeView';
import ScheduleRouting from './screens/ScheduleRouting'
import VisitingArea from './screens/visitingAreas'
import EditProfileScreen from './screens/editProfile'
import DetailedVisitingArea from './screens/detailed_visitingArea'
import Map from './screens/Map'
import Travel from './screens/travel'
import DetailedTravel from './screens/detailedTravel'

import Cancel_Mark from './src/screens/Cancel_Mark'
import Complain from './src/screens/Complain'
import Help from './src/screens/Help'
import Track_Sch from './src/screens/Track_Sch'
import Remove_Sch from './src/screens/Remove_Sch'



import ImagePickers from './screens/image-picker'
// import TabNavigator from './components/BottomNavigator'
// import Routing from './routing'

const AppNavigator = createStackNavigator(  
  {  
      EagleEyeView: EagleEyeView,  
      VisitingArea: VisitingArea,
      EditProfileScreen:EditProfileScreen,
      LoginScreen:LoginScreen,
      ScheduledRouting:ScheduleRouting,
      DetailedVisitingArea:DetailedVisitingArea,
      Map:Map,
      ImagePickers:ImagePickers,
      Travel:Travel,
      DetailedTravel:DetailedTravel,
      Remove_Sch:Remove_Sch,
      Cancel_Mark:Cancel_Mark,
      Complain:Complain,
      Help:Help,
      Track_Sch:Track_Sch,


      // TabNavigator:TabNavigator,
      

  },  
  {  
      initialRouteName: "LoginScreen"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class Routing extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  

// const {Navigator,Screen}=createStackNavigator();

// export default class App extends Component{
//   render(){
//     return(
//       <NavigationContainer>
//         <Navigator
//           screenOptions={{
//             headerShown: false,
//           }}>
//           <Screen name="mainScreen" component={Routing}/>
//         </Navigator>
//       </NavigationContainer>
//     );
//   }
// }  

