import React, { Component } from 'react';
import {Text, View, TouchableOpacity,ScrollView,StyleSheet,Alert,Image} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

export default  class Producto extends Component {
    constructor(props){
        super(props);

        this.state  = {
            isSelected: false
        }
    }

    handleClick = () => {
        this.setState({
            isSelected: !this.state.isSelected
        })
    }


    render() {
        console.log(this.props);
        
        return (
            <View  style={{width:'100%',padding:15,flexWrap:'wrap',flexDirection:'row',alignItems:'stretch',borderBottomColor: "#767676",borderBottomWidth:.5,borderTopColor: "#767676",borderTopWidth:.5}}>
                            <View style={{width:'10%',paddingHorizontal:5}}>
                            <Text style={{width:'100%',textAlign:'center',fontSize:14,fontWeight:'bold'}}>Tipo de Producto</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{this.props.producto.TipPro}</Text>
                            </View>
                            <View style={{width:'10%',paddingHorizontal:5}}>
                            <Text style={{width:'100%',textAlign:'center',fontSize:14,fontWeight:'bold'}}>Numero Producto</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{this.props.producto.ArtCod}</Text>
                            </View>
                            <View style={{width:'40%',paddingHorizontal:5}}>
                            <Text style={{width:'100%',textAlign:'center',fontSize:14,fontWeight:'bold'}}>Descripcion</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{this.props.producto.Desc}</Text>
                            </View>
                            <View style={{width:'10%',paddingHorizontal:5}}>
                            <Text style={{width:'100%',textAlign:'center',fontSize:14,fontWeight:'bold'}}>Cantidad</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>10</Text>
                            </View>
                            <View style={{width:'10%',paddingHorizontal:5}}>
                            <Text style={{width:'100%',textAlign:'center',fontSize:14,fontWeight:'bold'}}>Fecha Vencimiento</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{this.props.producto.FechaVen}</Text>
                            </View>
                            <View style={{width:'10%',paddingHorizontal:5}}>
                            <Text style={{width:'100%',textAlign:'center',fontSize:14,fontWeight:'bold'}}>Nseries</Text>
                            <Text style={{width:'100%',textAlign:'center'}}>{this.props.producto.Nserie}</Text>
                            </View>
                            <View style={{width:'10%',justifyContent:'center'}}>
                            <TouchableOpacity style={{width:40,borderRadius:10,backgroundColor:this.props.producto.Estado === 1 ? 'green' : 'red',height:20,alignSelf:'center',elevation:5}}
                                onPress={this.handleClick}
                            >

                            </TouchableOpacity>
                            </View>
                        </View>
        );
    }
}

