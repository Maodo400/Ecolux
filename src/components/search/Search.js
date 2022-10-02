import { View, StyleSheet, Button, Keyboard } from "react-native";
import React, { useState } from "react";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";
import { Feather, Entypo } from "@expo/vector-icons";

const Search = ({ onSearch, search, setSearch }) => {
  return (
    <View style={styles.search}>
      <CustomInput
        placeholder="Rechercher"
        value={search}
        onChange={setSearch}
        style={styles.searchInput}
      />
      {!search == "" ? (
        <Entypo
          name="cross"
          size={20}
          color="blue"
          style={{ padding: 1, alignSelf: "center" }}
          onPress={() => {
            setSearch("");
          }}
        />
      ) : null}

      <CustomButton text="Rechercher" onPress={onSearch} type="PRIMARY" />
    </View>
  );
};

const styles = StyleSheet.create({
  feather: {
    marginLeft: 1,
    alignSelf: "center",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    alignSelf: "center",
  },
});

export default Search;
