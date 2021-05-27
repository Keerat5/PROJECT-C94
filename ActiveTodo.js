import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';

import db from '../config'

export default class ActiveTodo extends Component {
  constructor() {
    super()
    this.state = {
      allRequests: []
    }
    this.requestRef = null
  }

  getAllRequests = () => {
    this.requestRef = db.collection("addTask")
      .onSnapshot((snapshot) => {
        var allRequests = []
        snapshot.forEach((doc) => {
          allRequests.push(doc.data())
        })
        this.setState({ allRequests: allRequests })
      })
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.task_name}
        subtitle={item.time}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: '#ffff' }}>Complete</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    )
  }

  componentDidMount() {
    this.getAllRequests()
  }

  componentWillUnmount() {
    this.requestRef();
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <MyHeader title="Active Todo's" navigation={this.props.navigation} />
          <View style={{ flex: 1 }}>
            {
              this.state.allRequests.length === 0
                ? (
                  <View style={{ flex: 1, fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>List of all Active Tasks</Text>
                  </View>
                )
                : (
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allRequests}
                    renderItem={this.renderItem}
                  />
                )
            }
          </View>
        </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    }
  }
})