import React from 'react';
import { Text } from "react-native";
import Buttons from '../Buttons';

const ControlLote = (props) => {
    return (
        <>
            <Buttons navigation = {props.navigation}/>
            <Text>ControlLote</Text>
        </>
    );
};

export default ControlLote;