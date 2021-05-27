import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import db from '../config';
import firebase from 'firebase'
import MyHeader from "../components/MyHeader";

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      taskName: "",
      time: ""
    }
  }

  newTask = (taskName, time) => {
    db.collection('addTask').add({
      "user_id": this.state.userId,
      "task_name": this.state.taskName,
      "time": this.state.time,
    })
    this.setState({
      taskName: '',
      time: ''
    })

    return alert(
      'To-Do added Successfully'),
      [
      {
        text: 'OK', onPress: () => {
          this.props.navigation.navigate('ActiveTodo')
        }
      }
      ]

  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <MyHeader title=" Add Todo's" navigation={this.props.navigation} />
          </View>

          <KeyboardAvoidingView style={styles.keyBoardStyle}>
            <TextInput
              style={styles.formTextInput}
              placeholder={"Add Task"}
              onChangeText={(text) => {
                this.setState({
                  taskName: text
                })
              }}
              value={this.state.taskName}
            />
            <TextInput
              style={styles.formTextInput}
              multiline
              numberOfLines={8}
              placeholder={"Add Starting Time"}
              onChangeText={(text) => {
                this.setState({
                  time: text
                })
              }}
              value={this.state.time}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => { this.newTask(this.state.taskName, this.state.time) }}
            >
              <Text>Add Task</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formTextInput: {
    width: "80%",
    height: 40,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20
  },
}
)
