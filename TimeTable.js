import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TimeTable extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Time Table here!!!</Text>
            </View>
        )
    }
}