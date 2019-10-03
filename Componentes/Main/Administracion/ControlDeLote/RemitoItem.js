import React, { Component } from 'react';
import {Text, View, TouchableOpacity,ScrollView,StyleSheet,Alert,Image} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

export default class RemitoItem extends Component {
    constructor(props){
        super(props);

        this.state  = {
            isSelectedRemito: false
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
        <View style={{width:'100%',flexDirection:'row',backgroundColor:'red',flexWrap:'wrap',overflow:'hidden',}}>
                {
                    this.state.isSelectedRemito ?
                    this.props.remito.Producto.map(producto => (
                        <View key={producto.Nserie} style={{width:'100%',padding:15,flexWrap:'wrap',flexDirection:'row',alignItems:'stretch',}}>
                            <View style={{width:'10%'}}>
                            <Text style={{width:'100%',textAlign:'center'}}>Tipo de Producto</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{producto.TipPro}</Text>
                            </View>
                            <View style={{width:'10%'}}>
                            <Text style={{width:'100%',textAlign:'center'}}>Numero Producto</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{producto.ArtCod}</Text>
                            </View>
                            <View style={{width:'40%'}}>
                            <Text style={{width:'100%',textAlign:'center'}}>Descripcion</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{producto.Desc}</Text>
                            </View>
                            <View style={{width:'10%'}}>
                            <Text style={{width:'100%',textAlign:'center'}}>Cantidad</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>10</Text>
                            </View>
                            <View style={{width:'10%'}}>
                            <Text style={{width:'100%',textAlign:'center'}}>Fecha Vencimiento</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{producto.FechaVen}</Text>
                            </View>
                            <View style={{width:'10%'}}>
                            <Text style={{width:'100%',textAlign:'center'}}>Nseries</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{producto.Nserie}</Text>
                            </View>
                            <View style={{width:'10%'}}>
                            <Text style={{width:'100%'}}>Nseries</Text>
                            <Text style={{width:'100%'}}>{producto.Nserie}</Text>
                            </View>
                        </View>
                    ))
                    :null
                }
        </View>
        </>
        );
    }
}
