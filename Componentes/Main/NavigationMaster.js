import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './Administracion/RegistrarLote';
import ControlLote from './Administracion/ControlDeLote/ControlLote';
import Informes from './Administracion/Informes';
import Usuarios from './Administracion/Usuarios';

import ArmadoCarro from './Armado-Despacho/ArmadoDeCarro/ArmadoCarro';
import ArmadoPedido from './Armado-Despacho/ArmadoPedido';
import Despacho from './Armado-Despacho/Despacho'



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
