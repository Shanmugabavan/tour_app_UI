// import { TouchableOpacity } from "react-native";
import React from 'react';
import {Text,TouchableOpacity} from "react-native";
import {styles} from "../styles/mainScreenStyles";

export default function ImageButton({title,description}){
    return(
        <>
        <TouchableOpacity style={styles.imageButton}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </TouchableOpacity>
        </>
    );
}