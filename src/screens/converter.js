import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
import { StyleSheet, TextInput } from "react-native-web";

export default function converter() {
  const [fahrenheit, setFahrenheit] = useState("0");
  const [celsius, setCelsius] = useState("0");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>From Fahrenheit To Celsius</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFahrenheit}
        value={fahrenheit}
        placeholder="Enter Fahrenheit Here!"
        keyboardType="numeric"
      ></TextInput>
      <Button
        title="Convert"
        onPress={() => setCelsius((fahrenheit - 32) / 1.8)}
      ></Button>

      <Text style={styles.text}>Celsius: {celsius}</Text>
    </View>
  );
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
    //padding: "25px",
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
