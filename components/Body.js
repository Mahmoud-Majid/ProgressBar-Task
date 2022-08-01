import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from './Title';
import ProgressBar from './ProgressBar';
import Footer from './Footer';

const Body = () => {
  return (
    <View style={styles.container}>
      <Title title1={'Loan amount'} title2={'How much would you like to borrow?'} />
      <ProgressBar />
      <Footer />
    </View>
  )
}

export default Body;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '80%',
    marginTop: 5,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  }
})