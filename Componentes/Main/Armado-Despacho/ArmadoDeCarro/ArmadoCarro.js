import React from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

const ArmadoCarro = (props) => {
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        <Text>
            ArmadoCarro
        </Text>
        </>
    );
};

export default ArmadoCarro;