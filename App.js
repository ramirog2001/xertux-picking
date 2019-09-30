import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

//React Navigation
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

//Componentes
import Login from './Componentes/Login/Login'


//Expo packages
import {ScreenOrientation} from 'expo'


export default class App extends React.Componen {

  Auth = (AuthLevel) => {
    switch (AuthLevel) {
      case 'Admininstrador':
        
        break;

      case 'ArmadoPedidos':
        
        break;

      case 'ArmadoCarro':
        
        break;

      case 'Despacho':
        
        break;
    
      default:
        return(<Text>Login</Text>)
        break;
    }
  }

  AuthLevel = 'login';

  
  render () {
    return (
      <View style={styles.container}>

      <Auth AuthLevel />

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
