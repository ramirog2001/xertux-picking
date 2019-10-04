import React, { Component } from 'react';
import {Text, View, TouchableOpacity,ScrollView,StyleSheet,Alert,Image} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import Producto from './Producto'

export default class LoteArmadoDeCarro extends Component {
    constructor(props){
        super(props);

        this.state  = {
            isSelected: false,
            productos: [],
        }
    }

  

    abrirLote = () => {

        
        this.setState({
            isSelected: !this.state.isSelected
        })
    }
    render() {
       
     
        return (
            <>
           <View style={{width:'100%',flexWrap:'wrap',flexDirection:'row'}}>
                                         {
                                             this.props.lote.Prioridad === 1 ?
                                             <View style={{width:'2%',backgroundColor:'red',height:'100%'}}></View>
                                             :
                                             <View style={{width:'2%',backgroundColor:'yellow',height:'100%'}}></View>
                                         }
                                          <View style={{width:'10%',flexDirection:'row',flexWrap:'wrap',paddingVertical:5}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Lote</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{this.props.lote.NroLote}</Text>
                                          </View>
                                          <View style={{width:'10%',flexDirection:'row',flexWrap:'wrap',paddingVertical:5}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Fecha Alta</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{this.props.lote.FechaAlt.slice(0,10)}</Text>
                                          </View>
                                          
                                          <View style={{width:'68%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap',}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'right'}}>Prioridad</Text>
                                            {
                                                this.props.lote.Prioridad === 1 ? 
                                                <Text style={{fontSize:14,width:'100%',textAlign:'right',color:'red'}}>Urgente</Text>
                                                : 
                                                <Text style={{fontSize:14,width:'100%',textAlign:'right',color:'green'}}>Normal</Text>
                                            }      
                                            
                                          </View>   
               
               
               <View style={{width:'10%',flexDirection:'row',}}>
                                            <TouchableOpacity style={{width:'100%',marginHorizontal:30,alignSelf:'center'}} onPress={this.abrirLote}>
                                                
                                                {
                                                    this.state.isSelected ?
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
           </View>
           <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',overflow:'hidden',}}onPress={this.abrirLote}>
                    {
                        this.state.isSelected ? 
                        this.props.remito.map(remito => (
                            remito.Producto.map(producto => {
                               
                                return(
                                <Producto
                                    key={producto.Nserie}
                                    producto={producto}
                                />
                               )
                                    
                            }) 
                        ))
                        :
                        null
                    }
           </View>
           </>
        );
    }
}

