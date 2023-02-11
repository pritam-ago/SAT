import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import App from '../App';
import * as Updates from 'expo-updates';
import SampleScreen from './SampleScreen';

export default class ProfileScreen extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isLogut_ : false
        }
    }

    
    

    handle_logout = async () => {
         await SecureStore.deleteItemAsync('UID');
         this.setState({
            isLogut_ : true
         });
    }



    render()
    {
        if(this.state.isLogut_)
        {
           return(
                <View>
                    <Text>
                        successfully Signed Out.
                         Please Reopen The App.
                    </Text>
                </View>
           );
           
        }
        else{
            return(
         <View style = {{flex :  1, justifyContent : 'center', alignItems : 'center'}}>
            <Text>
                Profile Screen!!
            </Text>

            <TouchableOpacity onPress={this.handle_logout}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
         </View>
        );
        }

        
    }
}