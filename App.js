import React,{Component} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

//React Navigation
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

//Componentes
import Login from './Componentes/Login/Login'


export default class App extends Component {

  render () {
    return (
        <MyApp/>     
    );
  }
}


const DrawerNavigation = createDrawerNavigator({
  Login:{
    screen: Login
  }
});

const SwitchLogin = createSwitchNavigator({
  Login:{
    screen: Login
  }
})

const MyApp = createAppContainer(SwitchLogin);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

