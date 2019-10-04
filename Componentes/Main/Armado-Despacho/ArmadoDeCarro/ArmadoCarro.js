import React, { Component } from 'react';
import { Text } from 'react-native';
import Buttons from '../../Buttons';

export default class ArmadoCarro extends Component {
    render(){
    return (
        <>
        <Buttons navigation = {this.props.navigation}/>
        <Text>
            ArmadoCarro
        </Text>
        </>
    );
    }
};
