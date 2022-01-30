// this class component is not completed (not working)
// Hope you can tell me where is the fault.

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default class Converter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: "0",
      fahrenheit: "0",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>From Celsius To Fahrenheit</Text>
        <TextInput
          style={styles.input}
          ref="celsius"
          onChangeText={(celsius) => this.setState({ celsius })}
          value={this.state.celsius}
          placeholder="Enter Celsius Here!"
          keyboardType="numeric"
        ></TextInput>
        <Button
          title="Convert"
          onPress={() =>
            this.setState({ fahrenheit: (this.state.celsius * 9) / 5 + 32 })
          }
        ></Button>
        <Text style={styles.text}>Fahrenheit: {this.state.fahrenheit}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flexFlow: "column",
    margin: "20px",
    borderRadius: "25%",
    padding: "12px",
    textAlign: "center",
  },
  text: {
    fontSize: "20px",
    alineSelf: "center",
    margin: "5%",
  },
});
