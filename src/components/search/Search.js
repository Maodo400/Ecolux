import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";
import { useForm } from "react-hook-form";
import { API_SERVER } from "../../../assets/constants";

const Search = () => {
  const { control, handleSubmit, watch } = useForm();

  const onSearch = (data) => {
    fetch(API_SERVER + "/livres?nom="+data.Rechercher)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson);
      })
      .catch(console.error)
      .finally(() => setIsloading(false));
  };

  const onSearch1 = async (data) => {
    console.log(data);
    await fetch(API_SERVER+'/livres?nom='+data.Rechercher, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.warn("Register pressed");
  };

  return (
    <View>
      <Text style={styles.title}>LISTE DES POSTS</Text>
      <View style={styles.search}>
        <CustomInput
          name="Rechercher"
          placeholder="Rechercher"
          control={control}
          onChangeText={(value) => onChangeTitle(value)}
          rules={{}}
          style={styles.searchInput}
        />
        <CustomButton
          text="Rechercher"
          onPress={handleSubmit(onSearch)}
          type="PRIMARY"
          style={styles.searchButton}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    alignSelf: "center",
  },
  searchButton: {
    width: 150
  },
  searchInput: {

  },
});

export default Search;
