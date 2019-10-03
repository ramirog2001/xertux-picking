import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
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
            <View style={{borderWidth: 1}}>
            <TouchableOpacity onPress={() => this.changeHeight()}>
                <View style={{flexDirection: "row", padding: 10}}>
                    <Image source={require('../../../../Images/solicit_accept_check_ok_theaction_6340.png')} style={{height: 35}} resizeMethod="scale" resizeMode="center" />
                    <View>
                        <Text style={{fontWeight: "bold"}}>Numero de Remito</Text>
                        <Text>{this.props.numero}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end", paddingRight: '10%'}}>
                        <Ionicons name={this.state.TextView? 'ios-arrow-down' : 'ios-arrow-back'} size={32}/>
                    </View>
                </View>
            </TouchableOpacity>
            
            <View style={{height: this.state.TextView? null : 0, overflow: "hidden", borderTopWidth: this.state.TextView? 1 : 0}}>
                <FlatList 
                    data = {this.props.productos}
                    renderItem = {({item}) => <RemitoItem tipo = {item.tipo} numero = {item.numero} descripcion = {item.descripcion} cantidad = {item.cantidad} fvencimiento = {item.fvencimiento}/>}
                    keyExtractor = {item => item.numero}
                />
            </View>
            </View>
            </>
        );
    }
}

export default Remito;