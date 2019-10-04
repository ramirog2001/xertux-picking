import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './Administracion/RegistrarLote';
import ControlLote from './Administracion/ControlDeLote/ControlLote';
import Informes from './Administracion/Informes';
import Usuarios from './Administracion/Usuarios/Usuarios';

import ArmadoCarro from './Armado-Despacho/ArmadoCarro';
import ArmadoPedido from './Armado-Despacho/ArmadoPedido/ArmadoPedido';
import Despacho from './Armado-Despacho/Despacho'



const root = createSwitchNavigator({
    RegistrarLote,
    ControlLote,
    Usuarios,
    Informes,
    ArmadoCarro,
    ArmadoPedido,
    Despacho
},
{
    initialRouteName: 'Usuarios'
})

export default createAppContainer(root);
