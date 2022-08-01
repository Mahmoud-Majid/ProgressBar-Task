import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Header from './Header'
import Body from './Body'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  }
})