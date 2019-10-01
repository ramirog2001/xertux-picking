import React from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

const Despacho = (props) => {
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        <Text>
            Despacho
        </Text>
        </>
    );
};

export default Despacho;