import React from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

const ArmadoPedido = (props) => {
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        <Text>
            ArmadoPedido
        </Text>
        </>
    );
};

export default ArmadoPedido;