import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import { TextInput } from "react-native";

const SubSearch = ({ classe, setClasse, lycee, college, getAll }) => {
  const RenderMessage = () => {
    if (lycee && college)
      return (
        <View style={styles.subsearch}>
          <CustomButton
            text="Lycée"
            onPress={getLycee}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="College"
            onPress={getCollege}
            type="TERTIARY"
            style={styles.searchButton}
          />
        </View>
      );
    else if (!lycee && college)
      return (
        <View style={styles.subsearch}>
          <CustomButton
            text="Retour"
            onPress={retour}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="Seconde"
            onPress={getSeconde}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="Premiere"
            onPress={getPremiere}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="Terminale"
            onPress={getTerminal}
            type="TERTIARY"
            style={styles.searchButton}
          />
        </View>
      );
    else if (lycee && !college)
      return (
        <View style={styles.subsearch}>
          <CustomButton
            text="Retour"
            onPress={retour}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="6eme"
            onPress={get6eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="5eme"
            onPress={get5eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="4eme"
            onPress={get4eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="3eme"
            onPress={get3eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
        </View>
      );
  };
  return (
    <View>
      <RenderMessage />
    </View>
  );
};
const styles = StyleSheet.create({
  subsearch: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  searchButton: {
    width: 100,
  },
});

export default SubSearch;
