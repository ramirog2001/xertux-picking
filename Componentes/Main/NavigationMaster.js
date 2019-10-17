import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import paginas
import RegistrarLote from './Administracion/RegistrarLote';
import ControlLote from './Administracion/ControlLote';
import Informes from './Administracion/Informes';
import Usuarios from './Administracion/Usuarios/Usuarios';

import ArmadoCarro from './Armado-Despacho/ArmadoCarro';
import ArmadoPedido from './Armado-Despacho/ArmadoPedido';
import Despacho from './Armado-Despacho/Despacho'



<<<<<<< Updated upstream
const root = createSwitchNavigator({
=======
const armadoCarroView = createSwitchNavigator({

    ArmadoCarroScreen,
    ArmadoPedido,
    Despacho,

})

const adminView = createSwitchNavigator({
    Usuarios,
>>>>>>> Stashed changes
    RegistrarLote,
    ControlLote,
    Informes,
    ArmadoCarro,
    ArmadoPedido,
    Despacho
},
{
    initialRouteName: 'Usuarios'
})

export default createAppContainer(root);
