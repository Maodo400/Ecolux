import { View, StyleSheet, TextInput, Text } from "react-native";

const CustomInput = ({ value='', onChange, placeholder, secureTextEntry }) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "67%",
    backgroundColor: "white",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 6,

    padding: 5,

    marginVertical: 5,
  },
  input: {
    fontSize: 20,
  },
});
export default CustomInput;
