import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ title1, title2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>{title1}</Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  )
}

export default Title;

const styles = StyleSheet.create({
  title1: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 'normal',
  },
  title2: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 'bold',
  }

});