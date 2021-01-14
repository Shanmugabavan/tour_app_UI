import {Dimensions, StyleSheet} from "react-native";
const {width,height}=Dimensions.get('screen');

export const styles=StyleSheet.create({
    header: {
        flexDirection:"row",
    },
    headerText: {
        paddingTop:20,
        fontSize:45,
        fontWeight: "bold",
        paddingLeft:20,
    },
    headerImage: {
        marginTop:20,
        paddingTop:20,
        width:60,
        height:60,
        borderRadius:50,
        alignItems:"flex-end",
    },
    inputContainer:{
        backgroundColor: "rgba(200,200,200,0.9)",
        width:width/1.1,
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

    },
    
    input:{
        color: "#000",
        marginLeft: 40,
    },

    imageContainer:{
        flexDirection:"row",
        marginTop:30,
    },
    imageView:{
        width:width/2.4,
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
    },

    title:{
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    description:{
        fontSize: 16,
        marginVertical:3,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

});