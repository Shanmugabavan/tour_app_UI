import React from 'react';
import {View,Text,Image,Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImagePickers extends React.Component{
    handleChoosePhoto=()=>{
        const options={};
        ImagePicker.launchImageLibrary(options,response=>{
            console.log("response",response);
        });
    };

    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Button title="ChoosePhoto" onPress={this.handleChoosePhoto}/>
            </View>
        );
    }
} 