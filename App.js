import React,{Component} from 'react';
import { StyleSheet, Text, View, Switch,ActivityIndicator,StatusBar } from 'react-native';

//React Navigation
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

//Componentes
import LoginManager from './Componentes/Login/LoginManager';

import { setuserName } from './Redux/store'
import { setPermissions } from './Redux/store'

export default class App extends Component {
  
  render () {
    return (
      <>
        <LoginManager />
      </>
    );
  }
}