import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Help extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                    //  fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Save the world</Text>

                <Text
                style={{
                    // fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:5
                }}>
                    
                    <TextInput 
                        placeholder="Ask Your Question?"
                        placeholderTextColor="#00716F"
                        multiline={true}
                        style={{paddingHorizontal:5,
                        height:50,
                        marginLeft:1,
                        marginRight:1,
                        borderColor: '#00716F',
                        
                        
                        
                    }}
                    />

                    

                </View>
               

                <TouchableOpacity style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    flexDirection: "row",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    
                    <Text 
                    // onPress={()=>navigate('Help')}
                    style={{
                        color:"white",
                        // fontFamily:"SemiBold"
                    }}>Submit Your Question       </Text>
                    
                </TouchableOpacity>
                <Text 
                    // onPress={()=>navigate('Help')}
                    style={{
                        color:"#00716F",
                        paddingLeft: 57,
                        // fontFamily:"SemiBold",
                        marginTop: 30
                    }}>Answer for your question      
                </Text>
                <View style={{
                    alignItems:"center",
                    marginHorizontal:55,
                    height: 100,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                   
                }}>
                <Text 
                    // onPress={()=>navigate('Help')}
                    style={{
                        marginBottom:20,
                        color:"#00716F",
                        marginTop: 10,
                        marginRight:3,
                        marginLeft:8
                    }}>Answer for your question Answer for your question  Answer for your question       
                </Text>

                    

                </View>
              
            </View>
        )
    }
}