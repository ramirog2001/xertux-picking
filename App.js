import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

//Expo packages

//components
import Main from './Componentes/Main/Main'

export default class App extends React.Component {


  
  
  render () {
    AuthLevel = 'Administrador';
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <Main />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
