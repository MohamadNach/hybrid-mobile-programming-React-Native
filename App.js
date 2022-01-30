import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { screens } from "./src/screens";

//import Home from "./src/screens/home";
//import Converter from "./src/screens/converter";
//import Currency from "./src/screens/currency";
//import Donate from "./src/screens/donate";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((s) => (
          <Stack.Screen
            key={s.name}
            name={s.name}
            component={s.component}
          ></Stack.Screen>
        ))}

        {/*
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Converter" component={Converter}></Stack.Screen>
        <Stack.Screen name="Currency" component={Currency}></Stack.Screen>
        <Stack.Screen name="Donate" component={Donate}></Stack.Screen>
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
