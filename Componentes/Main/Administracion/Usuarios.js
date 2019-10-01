import React from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

const Usuarios = (props) => {
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        <Text>
            Usuarios
        </Text>
        </>
    );
};

export default Usuarios;