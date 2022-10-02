import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View>
    <Text style={styles.title}>{props.title}</Text>
  </View>
  )
};

const styles = StyleSheet.create({ 
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    alignSelf: "center",
  },
});

export default Header
