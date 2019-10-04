import React, { Component } from 'react';
import { Text } from 'react-native';
import Buttons from '../Buttons';

class ArmadoCarro extends Component {
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

export default ArmadoCarro;