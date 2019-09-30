import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './RegistrarLote';
import ControlLote from './ControlLote';
import Usuarios from './Usuarios';
import Informes from './Informes';
import { Text, View } from 'react-native';



const root = createSwitchNavigator({
    RegistrarLote,
    ControlLote
})

export default createAppContainer(root);
