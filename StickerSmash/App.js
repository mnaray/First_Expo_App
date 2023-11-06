import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name here:"
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Button title="Submit" onPress={() => alert(`Hello ${name}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 20,
  },
});
