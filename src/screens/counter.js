import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View>
        <Text>Counter: {this.state.count}</Text>
        <Button
          title="+"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        ></Button>
      </View>
    );
  }
}
