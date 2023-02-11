import React, { Component } from 'react';
import {  View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    Button,
    Alert} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import * as SecureStore from 'expo-secure-store';

import * as Calendar from 'expo-calendar';

import db from '../../config';

export default class Leave extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            dropdownHeight: 40,
            teacher : 'Admin',
            title : '',
            message : '',
            classs : '',
            section : '',
            uid : '',
            value : ''
        }
    }

    get_user_data = async () => {

        this.setState({
            classs : await SecureStore.getItemAsync('class'),
            section : await SecureStore.getItemAsync('section'),
            uid : await SecureStore.getItemAsync('UID')
        });
        
        
    }

    async addMessage()
    {
        const { classs, section } = this.state;
        const value = classs + "-" + section;
        let class_val = "class-" + this.state.classs + "-" + this.state.section;
        if(this.state.title && this.state.message)
        {
            let messageData = {
                title : this.state.title,
                from : this.state.uid,
                message : this.state.message,
                section : this.state.section
            };
            
            if(this.state.teacher === "Admin")
            {
                await db.collection('contact').doc("Admin").collection('messages').add(messageData);
            }
            else{
                await db.collection('contact').doc(value).collection('messages').add(messageData);
            }

            

        }
        else{
            Alert.alert('Error', 'All fields are are required', [{
              text : 'ok',
              onPress : () => console.log('Ok Pressed')
            }],
            {
              cancelable : false
            }
            );
      
          }
    }

    componentDidMount()
    {
        this.get_user_data();
        

    }

    componentDidUpdate()
    {
        console.log(this.state.teacher);
    }

    render() {

        const { classs, section } = this.state;
        const value = classs + "-" + section;
        
        return (

        <View style = {styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style = {styles.fieldsContainer}>
            

            <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(message) => this.setState({ message })}
                placeholder={"Message"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="black"
              />
              <View style = {styles.submitButton}>
                <Button onPress ={()=>
                  this.addMessage()
                } title = 'Submit' color = '#F2B035' />
              </View>

            </View>
                
        </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F2F2F2",
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    
    fieldsContainer: {
      flex: 0.85,
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain",
    },
    inputFont: {
      height: RFValue(50),
      borderColor: "black",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "black",
      marginTop: RFValue(10),
    },
    inputFontExtra: {
      marginTop: RFValue(15),
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5),
    },
    submitButton : {
      marginTop : RFValue(20),
      alignItems : 'center',
      justifyContent : 'center'
    }
  });