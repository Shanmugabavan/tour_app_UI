import React from 'react';

import { TextInput, View } from "react-native";
import {FontAwesome5} from "@expo/vector-icons"; 
// import {TextInput} from "react-native-gesture-handler";
import {styles} from "../styles/mainScreenStyles";

export default function Input({placeholder, onChangeText}){
    return(
        <>
            <View style={styles.inputContainer}>
                <FontAwesome5 style={{
                    position:'absolute',
                    left:0,
                    top:5,
                }}
                name="search" size={20}/>
                <TextInput
                placeholderTextColor='#aaa' 
                placeholder={placeholder} 
                style={styles.input} />
            </View>
        </>

    );
}