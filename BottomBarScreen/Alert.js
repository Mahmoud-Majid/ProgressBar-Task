import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Alert = () => {
  return (
    <View style={styles.container}>
      <Text>Alert</Text>
    </View>
  )
}

export default Alert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})