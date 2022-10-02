import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../customButton/CustomButton";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Footer = ({onPrevious, onNext, page}) => {
  return (
    <View style={styles.content}>
      <View style={styles.fixToText}>
        <CustomButton
          text="Precedent"
          onPress={onPrevious}
          type="PRIMARY"
          disabled={page.previous == null ? true : false}
          style={styles.searchButton}
        />
        <CustomButton
          text="Suivant"
          onPress={onNext}
          type="PRIMARY"
          style={styles.searchButton}
          disabled={page.next == null ? true : false}
        />
      </View>
      <View style={styles.footer}>
        <Entypo name="open-book" size={30} color="#3B71F3" />
        <Text>{"   "}</Text>
        <Feather name="settings" size={30} color="#3B71F3" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    marginLeft:20,
    marginRight: 20,
    marginBottom:10
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  }
});
export default Footer;
