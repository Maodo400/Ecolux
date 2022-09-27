import { View, StyleSheet, TextInput, Text } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, placeholder, rules = {}, secureTextEntry }) => {
  return (
    
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: { value = '', onChange, onBlur }, fieldState:{error}}) => (
          <>
          <View style={[styles.container, {borderColor: error? "red" : '#E8E8E8'}]}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
          </View>
          {error &&(
            <Text style={{color:"red", alignSelf:"stretch"}}>{error.message || "Error"}</Text>
          )
          }
          </>
        )}
      />
    
  );
};
const styles = StyleSheet.create({
  container: {
    width: "67%",
    backgroundColor: "white",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 6,

    padding:5,

    marginVertical: 5,
  },
  input: {
    fontSize: 20
  },
});
export default CustomInput;
