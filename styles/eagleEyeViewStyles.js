import {Dimensions, StyleSheet} from "react-native";
const {width,height}=Dimensions.get('screen');

export const styles=StyleSheet.create({
    imageContainer:{
        flexDirection:"row",
        marginTop:30,
    },
    imageView:{
        width:width,
        height:height/3.5,
        // borderWidth:1,
        // borderColor:"#000",
        marginHorizontal:10,
        // borderRadius:20,
    },
    
    image:{
        width: '100%',
        height:'100%',
        borderRadius:20,

    },

    imageButton:{
        backgroundColor: 'rgba(0,0,0,5)',
        width: "100%",
        height: "30%",
        position: "absolute",
        bottom:0,
        left:0,
        fontSize:100,
        backgroundColor:'black',
    },

    title:{
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    description:{
        fontSize: 50,
        marginVertical:3,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

});