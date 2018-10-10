import React from "react";
import { View, TextInput, Image, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import logo from "./assets/logo.png";

export default (Demo = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={logo} style={styles.logo} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      {/* The View below is used to give some additional room between the bottom input and the software keyboard when it pops up */}
      <View style={{ height: 60 }} />
    </KeyboardAvoidingView>
  );
});
