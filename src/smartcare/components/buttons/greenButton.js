// greenButton.js
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default function GreenButton({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.greenButton}
      onPress={onPress}
      underlayColor="#2bbf6a"
    >
      <View>
        <Text style={styles.clearBtnText}>Login</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  greenButton: {
    backgroundColor: "#3EB59F",
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
    height: 55,
    marginBottom: 25,
    width: "90%",
  },
  clearBtnText: {
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: "Roboto",
    color: "#FFFFFF",
  },
});
