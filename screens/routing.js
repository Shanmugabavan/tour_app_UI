import React from 'react';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import {  createStackNavigator } from 'react-navigation-stack';  
// class HomeScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
//                 <Text>Home Screen</Text>  
//                 <Button  
//                     title="Go to Profile"  
//                     onPress={() => this.props.navigation.navigate('Profile')}  
//                 />  
//             </View>  
//         );  
//     }  
// }  
// class ProfileScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
//                 <Text>Profile Screen</Text>  
//             </View>  
//     );  
//     }  
// }  
  
// const AppNavigator = createStackNavigator(  
//     {  
//         Home: HomeScreen,  
//         Profile: ProfileScreen  
//     },  
//     {  
//         initialRouteName: "Home"  
//     }  
// );  
  
// const AppContainer = createAppContainer(AppNavigator);  
// export default class LoginScreen extends React.Component {  
//     render() {  
//         return <AppContainer />;  
//     }  
// }  