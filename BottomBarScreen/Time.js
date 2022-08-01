import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Time = () => {
  return (
    <View style={styles.container}>
      <Text>Time</Text>
    </View>
  )
}

export default Time;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})