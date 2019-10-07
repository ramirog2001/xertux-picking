import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './Administracion/RegistroLotes/RegistrarLote';
import ControlLote from './Administracion/ControlDeLote/ControlLote';
import Informes from './Administracion/Informes';
import Usuarios from './Administracion/Usuarios/Usuarios';

import ArmadoCarro from './Armado-Despacho/ArmadoDeCarro/ArmadoCarro';
import ArmadoPedido from './Armado-Despacho/ArmadoPedido/ArmadoPedido';
import Despacho from './Armado-Despacho/Despacho/Despacho'

import { getPermissions } from '../../Redux/store'



const root = createSwitchNavigator({

    RegistrarLote,
    ControlLote,
    Usuarios,
    Informes,
    ArmadoCarro,
    ArmadoPedido,
    Despacho,

},

{
    
    initialRouteName: getPermissions === 'admin'? 'RegistrarLote' : 'ArmadoCarro'
})

export default createAppContainer(root);
