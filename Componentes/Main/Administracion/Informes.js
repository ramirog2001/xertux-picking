import React from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

const Informes = (props) => {
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        <Text>
            Informes
        </Text>
        </>
    );
};

export default Informes;