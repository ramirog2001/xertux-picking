import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './Administracion/RegistroLotes/RegistrarLote';
import ControlLote from './Administracion/ControlLote';
import Informes from './Administracion/Informes';
import Usuarios from './Administracion/Usuarios';

import ArmadoCarro from './Armado-Despacho/ArmadoCarro';
import ArmadoPedido from './Armado-Despacho/ArmadoPedido';
import Despacho from './Armado-Despacho/Despacho/Despacho'



const root = createSwitchNavigator({
    RegistrarLote,
    ControlLote,
    Usuarios,
    Informes,
    ArmadoCarro,
    ArmadoPedido,
    Despacho
})

export default createAppContainer(root);
