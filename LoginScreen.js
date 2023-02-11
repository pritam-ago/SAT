import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import db from '../config';

import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component {

  constructor(props)
  {
    super(props);
    
    this.state = {
       login_status : false,
       eye_status : true,
       icon : "eye-off",
       UID : '',
       pwd : '',
       _UID : '',
       _pwd : '',
       _class : null,
       section : '',
       userFound : false
       
    }
  }

  componentDidMount()
  {
    this.process_input_fields();
  }

  handle_eye_status = () => {
    this.setState(e =>({
      icon : e.icon === 'eye' ? 'eye-off' : 'eye',
      eye_status : !e.eye_status
    }));
  }

  process_input_fields = () => {
    const trimmed_uid = this.state.UID.toUpperCase().trim();

    this.setState({
      UID : trimmed_uid
    });
  }

  on_login_press = () => {
    if(this.state.UID && this.state.pwd)
    {
      this.handle_login_event();
    }
    else {
      Alert.alert('Please Fill the Required Fields.');
    }
  }

  handle_login_event = async () => {
    const userRef =  await db.collection("users").where("UID", "==", this.state.UID).get();
  
   userRef.docs.map(doc => {
      this.setState({
        _UID : doc.data().UID,
        _pwd : doc.data().password,
        _class : doc.data().class,
        section : doc.data().section
      });
      console.log(this.state._UID);
      console.log(this.state._pwd);
  });
  console.log(userRef);
  
  if(this.state._pwd)
  {
    if(this.state.pwd === this.state._pwd)
  {
    this.setState({
      login_status : true
    });
    console.log('Login successful');
    this.save_login_info();
    
  }
  else{
    console.log('Invalid password.');
    Alert.alert('Invalid Password.');
  }
  }
  else{
    Alert.alert('Student not found!!!');
  }
  

  }


  save_login_info = async () => {
    await SecureStore.setItemAsync('UID', this.state.UID);
    await SecureStore.setItemAsync('password', this.state.pwd);
    await SecureStore.setItemAsync('section', this.state.section);
    await SecureStore.setItemAsync('class', this.state._class.toString());

    this.props.navigation.navigate('MainScreens');
  }


  render()
  {
    return(
      <View style = {styles.container}>

        <Image source={require('../assets/logo.png')} style = {styles.image} />
        <View style = {styles.inputView}>
          <TextInput
        style={styles.TextInput}
        placeholder = {"Enter UID"}
        onChangeText={(t) => {
           this.setState({
              UID : t
           })
        }}
        value={this.state.UID}
      />
      </View>

        <View style = {styles.inputView}> 
        <TextInput
        style={styles.TextInput}
        placeholder = {"Enter Password"}
        onChangeText={(t) => {
           this.setState({
              pwd : t
           })
        }}
        value={this.state.pwd}
        secureTextEntry = {this.state.eye_status}
        />
        <Ionicons style = {styles.icons} name ={this.state.icon} size = {RFValue(12)} onPress = {this.handle_eye_status} />
        </View>
        

        <TouchableOpacity onPress={this.on_login_press} style = {styles.loginBtn}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    paddingTop: 10,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 4,
    marginBottom : 50
  },
  image :{
    marginBottom: 40,
    width : RFValue(200),
    height : RFValue(200)
  },
  loginBtn:
  {
    width:"40%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#F2B035",
  },
  inputView: {
    backgroundColor: "#F2D6A2",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    alignContent : 'center',
    flexWrap : "wrap",
    justifyContent : 'center'
  },
  TextInput: {
    height: 60,
    width : '50%',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  icons: {
    width: RFValue(40),
    height: RFValue(35),
    paddingTop : RFValue(10),
    paddingLeft : RFValue(20)
  }
});