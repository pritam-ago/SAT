import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ExamSchedule extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Exam Schedule here!!!</Text>
            </View>
        )
    }
}