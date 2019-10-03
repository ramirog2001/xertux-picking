import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Buttons from '../../Buttons';

import DropDownItem from 'react-native-drop-down-item';
import { Ionicons } from '@expo/vector-icons';
import ItemArmado from './ItemArmado';
import Remito from './Remito';
import { TouchableOpacity } from 'react-native-gesture-handler';


class ArmadoPedido extends Component {
    datosLote = [
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

    datosRemito = [
        {
            numero: "123456",
            productos:[
                {
                    tipo: 'PTV',
                    numero: "123456789",
                    descripcion: 'REFENAX frasco x24',
                    cantidad: 12,
                    fvencimiento: '2019-12-18'
                },
                {
                    tipo: 'PTV',
                    numero: "45456798",
                    descripcion: 'REFENAX pastillas x24',
                    cantidad: 18,
                    fvencimiento: '2021-12-18'
                }
            ]
        },
        {
            numero: "22665588",
            productos:[
                {
                    tipo: 'PTV',
                    numero: "154859",
                    descripcion: 'REFENAX frasco x24',
                    cantidad: 12,
                    fvencimiento: '2019-12-18'
                },
                {
                    tipo: 'PTV',
                    numero: "3068451",
                    descripcion: 'REFENAX pastillas x24',
                    cantidad: 18,
                    fvencimiento: '2021-12-18'
                }
            ]
        }
    ]

    state = {
        expanded: false,
    }

    changeExpanded = () =>{
        this.setState({
            expanded: !this.state.expanded
        })
    }

    Drop = ({nombre, fecha, urgente, id}) => {
        if(id === '1')
        return(
            <View style = {{borderWidth: 1}}>
                <TouchableOpacity onPress = {() => this.changeExpanded()}>  
                    <ItemArmado nombre={nombre} fecha={fecha} urgente={urgente} id={id}/>
                    <View style={{position: "absolute", right: 15, top: 10}}>
                    <Ionicons name={this.state.expanded? 'ios-arrow-down' : 'ios-arrow-back'} size={32}/>
                    </View>
                    
                </TouchableOpacity>
                <View style={{height: this.state.expanded? null: 0, overflow: "hidden"}}>
                    <FlatList 
                        data={this.datosRemito}
                        renderItem = {({item}) => <Remito numero = {item.numero} productos = {item.productos}/>}
                        keyExtractor = {item => item.numero}
                    />
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
                        data={this.datosLote}
                        renderItem = {({item}) => <this.Drop nombre={item.nombre} fecha={item.fecha} urgente={item.urgente} id={item.id}/>}
                        keyExtractor = {item => item.id}
                        extraData = {this.state}
                    />
                
            </View>
        );

    }

};

export default ArmadoPedido;