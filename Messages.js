import React, { Component } from 'react';
import {  View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    FlatList, } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import db from '../../config';
import { Avatar, ListItem, Icon } from "react-native-elements";
import { RFValue } from 'react-native-responsive-fontsize';

export default class Messages extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            _uid : '',
            _class : '',
            _pwd : '',
            allMessages : [],
            isFetching: false,
        }
    }

    get_student_data = async () => {
        uid = await SecureStore.getItemAsync('UID');
        pwd = await SecureStore.getItemAsync('password');
        classs = await SecureStore.getItemAsync('class');

       this.setState({
            _uid : uid,
            _class : classs,
            _pwd : pwd
        });
    }

    get_more_messages = async () => {
      console.log('reloading.....');

      this.setState({allMessages : []});

      classs = await SecureStore.getItemAsync('class');
        await db.collection("messages").where('tags', 'array-contains', classs).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                console.log("message : ", doc.data().body);
                this.setState({
                    allMessages: [...this.state.allMessages, doc.data()]
                })
            });
        });
    }

    onRefresh() {
      this.setState({isFetching: true});

      this.get_more_messages();

      this.setState({isFetching: false});
  }

    get_messages = async () => {
        const {_class} = this.state;
        classs = await SecureStore.getItemAsync('class');
        await db.collection("messages").where('tags', 'array-contains', classs).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                console.log("message : ", doc.data().body);
                this.setState({
                    allMessages: [...this.state.allMessages, doc.data()]
                })
            });
        });
    }

    componentDidMount()
    {
        this.get_student_data();
        this.get_messages();
    }


    renderItem = ({ item, i }) => {
    var date = item.time.toDate().toString().split(" ").splice(0, 4).join(" ");
    return (
      <View style = {styles.container}>
        <View style = {styles.item}>
          <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.subtitle}>
              {item.body}
            </Text>
            <View style={styles.lowerLeftContaiiner}>
              <Text style={styles.date}>{date}</Text>
            </View>
        </View>
            
      </View>
    );
  };

    render() {
        return (
            <View>
              <FlatList 
                data={this.state.allMessages}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.isFetching}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    //paddingTop: StatusBar.currentHeight,
    marginHorizontal: 10,
    borderRadius : 50,
    //marginBottom : 50
  },
  title: {
    fontSize: 20,
    paddingBottom : 5,
    backgroundColor : '#F2BE22',
    borderRadius : 50
  },
  subtitle: {
    fontSize: 16,
    paddingBottom : 10,
    backgroundColor : '#F2BE22',
    borderRadius : 50
  },
  lowerLeftContaiiner: {
    flex : 0.05,
    alignSelf: "flex-end",
    marginTop: 30,
    backgroundColor : '#F2BE22', 
    borderRadius : 50
  },
  date: {
    fontSize: 12,
    paddingTop: 5,
    backgroundColor : '#F2BE22',
    borderRadius : 50
  },
  item: {
    backgroundColor: '#F2BE22',
    padding: 20,
    marginVertical: 8,
    borderRadius : 50
  },
  });