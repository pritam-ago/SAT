import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class SampleScreen extends Component {
    render()
    {
        return(
         <View style = {{flex :  1, justifyContent : 'center', alignItems : 'center'}}>
            <TouchableOpacity onPress={this.props.navigation.navigate('LoginScreen')}>
                <Text>
                Sample Screen!!!
                </Text>
            </TouchableOpacity>
            
         </View>
        );
    }
}