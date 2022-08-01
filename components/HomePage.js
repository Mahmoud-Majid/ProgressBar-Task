import { View, StyleSheet } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import MainScreen from './MainScreen';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#7659FB', '#fff']}
        locations={[0.4, 0.4]}
        style={styles.header}
      >
        <MainScreen />
      </LinearGradient>
    </View>

  )
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // margin: -62,
  }
})