import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './Administracion/RegistroLotes/RegistrarLote';
import ControlLote from './Administracion/ControlDeLote/ControlLote';
import Informes from './Administracion/Informes';
import Usuarios from './Administracion/Usuarios/Usuarios';

import ArmadoCarroScreen from './Armado-Despacho/ArmadoDeCarro/ArmadoCarro';
import ArmadoPedido from './Armado-Despacho/ArmadoPedido/ArmadoPedido';
import Despacho from './Armado-Despacho/Despacho/Despacho'

import { getPermissions } from '../../Redux/store'


const armadoCarroView = createSwitchNavigator({
    
    Despacho,
    ArmadoCarroScreen,
    ArmadoPedido,

})

const adminView = createSwitchNavigator({
    Usuarios,
    RegistrarLote,
    ControlLote,
    Informes,
})
export let Admin = createAppContainer(adminView);
export let ArmadoCarro = createAppContainer(armadoCarroView);
