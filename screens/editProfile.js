import React,{Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';
import { Header } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
// import { styles } from './visitingAreas';

export default class EditProfileScreen extends Component{
    bs=React.createRef();
    fall=new Animated.Value(1);
    render(){
        
        const renderInner=()=>(
            <View style={styles.panel}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.PanelTitle}>
                        Upload Photo
                    </Text>
                    <Text style={styles.PanelSubtitle}>
                        Choose your profile Picture
                    </Text>
                    <TouchableOpacity style={styles.panelButton}>
                        <Text style={styles.panelButtonTitle}>
                            Take Photo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
        const renderHeader=()=>(
            <View style={styles.header}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle}>
    
                    </View>
    
                </View>
            </View>
            
        );
        return(
            <View style={styles.container}>
                {/* <Header
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Edit Profile', style: { color: '#fff',fontSize:30, fontWeight:"bold" } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[300,100,0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />
                <View style={{margin:20}}>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.bs.current.snapTo(0)}>
                            <View style={{
                                height:100,
                                width:100,
                                borderRadius:15,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:"black"
                            }}>
                                <ImageBackground
                                    source={require("../assets/images/dampulla.jpg")}
                                    style={{height:100,width:100}}
                                    imageStyle={{borderRadius:15}}>
                                        <View style={{
                                            flex:1,
                                            justifyContent:'center',
                                            alignItems:'center',
                                        }}>
                                            <Icon name='camera' size={35} color="#fff" style={{
                                                opacity:0.7,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                borderWidth:1,
                                                borderColor:'#fff',
                                                borderRadius:10,
                                            }}>
    
                                            </Icon>
                                        </View>
                        
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>
                            Shanmugabavan
                        </Text>
                    </View>
    
                    <View style={styles.action}>
                        <FontAwesome name='user-o' size={20}/>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        <Feather name='phone' size={20}/>
                        <TextInput
                            placeholder="Phone number"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name='user-o' size={20}/>
                        <TextInput
                            placeholder="NIC"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.CommandButton} onPress={()=>{}}>
                        <Text style={styles.panelButtonTitle}>Submit</Text>
                    </TouchableOpacity>
    
                    <View style={styles.action}>
                        <FontAwesome name='user-o' size={20}/>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Old Password"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name='user-o' size={20}/>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder="New Password"
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.CommandButton} onPress={()=>{}}>
                        <Text style={styles.panelButtonTitle}>Change Password</Text>
                    </TouchableOpacity>
    
    
                </View>
    
    
            </View>
        );

    }
    
}



const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    CommandButton:{
        padding:15,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginTop:10,
    },
    panel:{
        padding:20,
        backgroundColor:"#FFFFFF",
        paddingTop:20,
    },
    header:{
        backgroundColor:"black",
        shadowColor:"#333333",
        shadowOffset:{width:-1, height:-3},
        shadowRadius: 2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    panelHeader:{
        alignItems:'center',
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:'#00000040',
        marginBottom:10,
    },
    PanelTitle:{
        fontSize:14,
        height:35,
    },
    PanelSubtitle:{
        fontSize:14,
        color:'gray',
        height:30,
        marginBottom:10,
    },
    panelButton:{
        padding:13,
        borderRadius:10,
        backgroundColor:"#FF6347",
        alignItems:'center',
        marginVertical:7,
    },
    panelButtonTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:'white',
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5,

    },
    actionError:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#FF0000",
        paddingBottom:5,
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a',
    },
});

