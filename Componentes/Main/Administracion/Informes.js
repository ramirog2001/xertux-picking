import React from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

const Informes = (props) => {
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        <Text style={{alignSelf:'center', justifyContent:'center',flex:1}}>
            Comming Soon
        </Text>
        </>
    );
};

export default Informes;