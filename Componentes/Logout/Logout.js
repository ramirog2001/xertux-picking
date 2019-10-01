import React, { Component } from 'react';
import {View,Text} from 'react-native'


export default class Logout extends Component {
    componentDidMount(){
        this.props.navigation.navigate('Auth')
    }
    render() {
        return (
            <View>
                <Text>Logout</Text>
            </View>
        );
    }
}

