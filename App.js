import React,{Component} from 'react';
import { StyleSheet, Text, View, Switch,ActivityIndicator,StatusBar } from 'react-native';

//React Navigation
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

//Componentes
import Login from './Componentes/Login/Login'
import Main from './Componentes/Main/Main'
import Logout from './Componentes/Logout/Logout'


export default class App extends Component {

  render () {
    return (
      <Main />
    );
  }
}

//AUTORIZACION
class AuthLoading extends Component{

  componentDidMount(){
    const userToken = false;
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render(){
    return(
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}
//END OF AUTORIZACION


const DrawerNavigation = createDrawerNavigator({
    Home: {
      screen: Main
    },
    Logout:{
      screen: Logout
    }
});

const SwitchLogin = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading
  },
  App: {
    screen: DrawerNavigation
  },
  Auth:{
   screen: Login 
  }
},{
  initialRouteName: 'App'
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

