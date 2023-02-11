import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import { Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

class Activities extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View >
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('VLC')}>
              <Text style={styles.title}>VLC</Text>
              <Ionicons name = {'journal'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('Messages')}>
              <Text style={styles.title}>Messages</Text>
              <Ionicons name = {'chatbubbles'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('Circular')}>
              <Text style={styles.title}>Circular</Text>
              <Ionicons name = {'clipboard'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>


          <View>
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('Contact')}>
              <Text style={styles.title}>Contact</Text>
              <Ionicons name = {'call'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('Album')}>
              <Text style={styles.title}>Album</Text>
              <Ionicons name = {'images'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('ExamSchedule')}>
              <Text style={styles.title}>Exam Schedule</Text>
              <Ionicons name = {'calendar'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('HomeWork')}>
              <Text style={styles.title}>Home Work</Text>
              <Ionicons name = {'chatbubbles'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('TimeTable')}>
              <Text style={styles.title}>Time Table</Text>
              <Ionicons name = {'time'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={styles.item}
              onPress={() => this.props.navigation.navigate('OnlineClass')}>
              <Text style={styles.title}>Online Class</Text>
              <Ionicons name = {'videocam'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => this.props.navigation.navigate('Fees')}>
              <Text style={styles.title}>Fees</Text>
              <Ionicons name = {'cash'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => this.props.navigation.navigate('Leave')}>
              <Text style={styles.title}>Leave</Text>
              <Ionicons name = {'cash'} size={RFValue(25)}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#F2BE22',
    padding: 20,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius : 25
  },
  title: {
    fontSize: 20,
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
    paddingTop : RFValue(10),
    paddingLeft : RFValue(20)
  }
});

export default Activities;
