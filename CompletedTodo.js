import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import MyHeader from "../components/MyHeader";

export default class CompletedTodo extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0.1 }}>
          <MyHeader title="Completed Todo's" navigation={this.props.navigation} />
        </View>
      </SafeAreaProvider>
    );
  }
}