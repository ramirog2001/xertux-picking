import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import RemitoItem from './RemitoItem';

import { Ionicons } from '@expo/vector-icons'

class Remito extends Component {
    state = {
        TextView: false
    }

    changeHeight = () => {
        this.setState(
            {
                TextView: !this.state.TextView
            }
        )
    }

    render() {
        return (
            <>
            <TouchableOpacity onPressIn={() => this.changeHeight()}>
                <View style={{flexDirection: "row", padding: 10}}>
                    <Image source={require('../../../../Images/solicit_accept_check_ok_theaction_6340.png')} style={{height: 35}} resizeMethod="scale" resizeMode="center" />
                    <View>
                        <Text style={{fontWeight: "bold"}}>Numero de Remito</Text>
                        <Text>12256894</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end", paddingRight: '10%'}}>
                        <Ionicons name={this.state.TextView? 'ios-arrow-down' : 'ios-arrow-back'} size={32}/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{height: this.state.TextView? null : 0, overflow: "hidden", borderTopWidth: this.state.TextView? 1 : 0}}>
                <RemitoItem />
            </View>
            <View style={{height: this.state.TextView? null : 0, overflow: "hidden", borderTopWidth: this.state.TextView? 1 : 0}}>
                <RemitoItem />
            </View>
            </>
        );
    }
}

export default Remito;