import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Demo from "./KeyboardAvoidingView";
// import Demo from "./KeyboardAwareScrollView";
// import Demo from "./KeyboardModule";
import Demo from "./KeyboardCovering";

export default class App extends React.Component {
  render() {
    return <Demo />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
