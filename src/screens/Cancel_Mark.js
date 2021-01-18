import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import {CheckBox} from 'native-base';
export default class Cancel_Mark extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Save the world</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{flexDirection:"row"}}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    marginLeft:20,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    height: 40,
                    width: 200
                }}>
                    
                    <Text 
                       style={{paddingHorizontal:5,
                        marginLeft:1,
                        color: '#00716F',
                        }}>
                        Ninearg
                    </Text>
                </View>
                <View style={{
                        width: 40,
                        alignItems:"center",
                        flexDirection: "row",
                        justifyContent:"center",
                        marginTop:15,
                        marginLeft:2,
                        backgroundColor:"#00716F",
                        paddingVertical:4,
                        borderRadius:23,
                        height:40
                }}>
                    
                <Icon name="delete" color="#fff" size={24}/>
                </View> 
                </View>
                
                </ScrollView>
            </View>
            )
        }
    }
    const styles = StyleSheet.create({
        contentContainer: {
          paddingVertical: 20
        }
      });
            
               
                            
                            
                
                    

               

                
              