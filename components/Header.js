import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ color: '#fff' }}>Maximum amount is $200.</Text>
        <Text style={{ color: '#fff' }}>Details</Text>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 30,
    width: '90%',
    height: '10%',
    backgroundColor: '#232323',
    borderRadius: 10,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    color: '#fff',
    backgroundColor: '#blue',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
})