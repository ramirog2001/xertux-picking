import React, { Component } from 'react';
import {Text, View, TouchableOpacity,ScrollView,StyleSheet,Alert,Image} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import Producto from './Producto'

export default class RemitoItem extends Component {
    constructor(props){
        super(props);

        this.state  = {
            isSelectedRemito: false,
            isOkey: false
        }
    }
    abrirRemitoxd = () => {
        this.setState({
            isSelectedRemito: !this.state.isSelectedRemito
        })
    }
    render() {
        return (
            <>
        <TouchableOpacity style={{width:'100%',padding:15,flexWrap:'wrap',flexDirection:'row'}} onPress={this.abrirRemitoxd}>
            <View style={{width:'10%',flexWrap:'wrap',flexDirection:'row'}}>
                <Image
                    source={require('../../../../Images/deleted.png')}
                    style={{width:35,height:35}}
                />
            </View>
            <View style={{width:'30%',flexWrap:'wrap',flexDirection:'row'}}>
                <Text style={{width:'100%'}}>Numero de Remito</Text>
                <Text style={{width:'100%'}}>{this.props.remito.NroRemito}</Text> 
            </View>
            <View style={{width:'60%'}}>
            <TouchableOpacity style={{marginLeft:20,alignSelf:'center'}} >
                                
                                {
                                    this.state.isSelectedRemito ?
                                    <Ionicons
                                    name="ios-arrow-down"
                                    size={26}
                                />
                                    :

                                    <Ionicons
                                    name="ios-arrow-back"
                                    size={26}
                                />
                                }
                            </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',overflow:'hidden',}} onPress={this.abrirRemitoxd}>
                {
                    this.state.isSelectedRemito ?
                    this.props.remito.Producto.map(producto => (
                        <Producto
                        key={producto.Nserie}
                        producto={producto}
                        />
                    ))
                    :null
                }
        </View>
        </>
        );
    }
}
