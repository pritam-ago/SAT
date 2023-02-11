import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import LoginScreen from './screens/LoginScreen';
import SampleScreen from './screens/SampleScreen';
import DrawerNavigator from './navigation/DrawerNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


export default class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
       signedIn : null,
       isLoading : true
    }
  }

  componentDidMount()
  {
    this.is_signedin();

  }

  componentDidUpdate()
  {
    this.is_signedin();
  }

  is_signedin = async () => {
    
    let result = await SecureStore.getItemAsync('UID');
    if (result) {
      this.setState({
        signedIn : true,
        isLoading : false
      });
    } else {
      this.setState({
        signedIn : false,
        isLoading : false
      });
    }
    
  }

  render()
  {
    if(this.state.isLoading)
    {
      return(
        <View style = {{flex : 1,
          justifyContent: 'center',
          alignItems : 'center'}}>

          <Text>
            Loading...
          </Text>

        </View>
      );
    }
    else{
      if(this.state.signedIn)
      {
        return(
          <NavigationContainer>
            <DrawerNavigator/>
          </NavigationContainer>
        );
      }
      else{
        return (
          <NavigationContainer>
            <LoginNavigator/>
          </NavigationContainer>
        );
      }
    }
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
