import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default Title