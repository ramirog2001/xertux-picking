import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './Login'
import Main from '../Main/Main'


const root = createSwitchNavigator({
    Login,
    Main
})


export default createAppContainer(root);