import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Buttons from '../../Buttons';

import DropDownItem from 'react-native-drop-down-item';
import { Ionicons } from '@expo/vector-icons';
import ItemArmado from './ItemArmado';
import Remito from './Remito';
import { TouchableOpacity } from 'react-native-gesture-handler';


class ArmadoPedido extends Component {
    datos = [
        {
            id: '1',
            nombre: 'Hola',
            fecha: '2/10/19',
            urgente: true
        },
        {
            id: '2',
            nombre: 'Hola2',
            fecha: '2/10/19',
            urgente: true
        },
        {
            id: '3',
            nombre: 'Hola3',
            fecha: '2/10/19',
            urgente:  false
        }
    ]

    state = {
        expanded: false,
    }

    changeExpanded = () =>{
        this.setState({
            expanded: !this.state.expanded
        })
        console.log('changeExpanded');
    }

    Drop = ({nombre, fecha, urgente, id}) => {
        if(id === '1')
        return(
            <View style = {{borderWidth: 1}}>
                <TouchableOpacity onPressIn = {() => this.changeExpanded()}>  
                    <ItemArmado nombre={nombre} fecha={fecha} urgente={urgente} id={id}/>
                    <View style={{position: "absolute", right: 15, top: 10}}>
                    <Ionicons name={this.state.expanded? 'ios-arrow-down' : 'ios-arrow-back'} size={32}/>
                    </View>
                    
                </TouchableOpacity>
                <View style={{borderWidth: this.state.expanded? 1 : 0, height: this.state.expanded? null : 0, overflow: "hidden"}}>
                    <Remito />
                </View>
                <View style={{borderWidth: this.state.expanded? 1: 0, height: this.state.expanded? null : 0, overflow: "hidden"}}>
                    <Remito />
                </View>
            </View>
        )

        return(
            <View style={{borderWidth: 1}}>
                <ItemArmado nombre={nombre} fecha={fecha} urgente={urgente} id={id}/>
            </View>
        )

        }
    render() {
        return (
            <View>
                <Buttons navigation = {this.props.navigation}/>
                    <FlatList 
                        data={this.datos}
                        renderItem = {({item}) => <this.Drop nombre={item.nombre} fecha={item.fecha} urgente={item.urgente} id={item.id}/>}
                        keyExtractor = {item => item.id}
                        extraData = {this.state}
                    />
                
            </View>
        );

    }

};

export default ArmadoPedido;