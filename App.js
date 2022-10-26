import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Title';
import Main from './src/components/Main';

export default App = () => {

  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

