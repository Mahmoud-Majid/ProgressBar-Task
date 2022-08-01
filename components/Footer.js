import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total amount with applicable <Text style={{ color: '#7659FB', textDecorationLine: 'underline' }}>fees</Text> will be <Text style={{ fontWeight: 'bold' }}>$58.92</Text></Text>
      <Ionicons name="ios-arrow-forward-circle-sharp" size={65} color="black" />
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  text: {
    width: '69%',
    fontSize: 13,
    lineHeight: 23,
    fontWeight: 'normal',
    marginRight: 10,
  }
})