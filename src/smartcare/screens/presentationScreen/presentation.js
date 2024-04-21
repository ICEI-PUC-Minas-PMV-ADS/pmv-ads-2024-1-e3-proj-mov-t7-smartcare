// presentation.js
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import SmartCareLogo from "../../assets/SmartCareLogo.png";
import GreenButton from "../../components/buttons/greenButton";
import WhiteButton from "../../components/buttons/whiteButton";

export const Presentation = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleRegisterPress = () => {
    navigation.navigate("Registre-se");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={SmartCareLogo} />
      </View>
      <View style={styles.btnGroup}>
        <GreenButton onPress={handleLoginPress} />
        <WhiteButton onPress={handleRegisterPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#ffff",
  },
  btnGroup: {
    width: "90%",
    alignItems: "center",
  },
});
