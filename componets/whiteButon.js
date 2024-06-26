import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableHighlight,
} from "react-native";

export default function WhiteButton({ onPress }) {
  return (
    <TouchableHighlight
      style={{ width: "90%" }}
      accessibilityLabel="Se não for cadastrado clique para se registrar."
      onPress={onPress}
      underlayColor="#2bbf6a"
    >
      <View style={styles.whiteButton}>
        <Text style={styles.darkBtnText}>Registrar-se</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  whiteButton: {
    backgroundColor: "#ffff",
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
    height: 55,
    borderWidth: 1.5,
  },

  darkBtnText: {
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: "Roboto",
    color: "#040404",
  },
});
