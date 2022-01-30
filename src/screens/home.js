import { Text } from "react-native";
import { Button, View, StyleSheet } from "react-native";
import { screens } from ".";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <br></br>
      <Text style={styles.text}>Welcome!</Text>
      <br></br>
      {screens.map((s) => (
        <Button
          style={styles.button}
          title={s.name}
          key={s.name}
          onPress={() => navigation.navigate(s.name)}
        ></Button>
      ))}
      {/*
      <Button
        title="Temperatue Converter"
        onPress={() => navigation.navigate("Converter")}
      ></Button>
      <br></br>
      <Button
        title="Currency Converter"
        onPress={() => navigation.navigate("Currency")}
      ></Button>
      <br></br>

      <Button
        title="Donate"
        onPress={() => navigation.navigate("Donate")}
      ></Button>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
