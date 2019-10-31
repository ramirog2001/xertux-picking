import React, { Component } from 'react';
import {Text, View, TouchableOpacity,ScrollView,StyleSheet,Alert,Image} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import RemitoItem from './RemitoItem'
import {setNotification, getNotification} from '../../../../Redux/store.js'

export default class RemitoModal extends Component {
    constructor(props){
        super(props);

        this.state  = {
            isSelected: false
        }
    }

    abrirRemito = () => {

        this.setState({
            isSelected: !this.state.isSelected
        })
    }

    
 

    render() {
   
      
        return (
            <>
            <View style={{flexDirection:'row',width:'100%',flexWrap:'wrap',borderBottomWidth:.5,borderColor:'#767676'}}>
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
                                          <View style={{width:'10%',flexDirection:'row',flexWrap:'wrap',paddingVertical:5}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Transporte</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{this.props.lote.Transp}</Text>
                                          </View>
                                          <View style={{width:'10%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Asignado a</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{this.props.lote.Asignado}</Text>
                                          </View>
                                          <View style={{width:'20%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Estado</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{this.props.lote.Estado}</Text>
                                          </View>
                                          <View style={{width:'10%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                          <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Proceso</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>50%</Text>
                                          </View>
                                          <View style={{width:'10%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Prioridad</Text>
                                            {
                                                this.props.lote.Prioridad === 1 ? 
                                                <Text style={{fontSize:14,width:'100%',textAlign:'center',color:'red'}}>Urgente</Text>
                                                : 
                                                <Text style={{fontSize:14,width:'100%',textAlign:'center',color:'green'}}>Normal</Text>
                                            }      
                                            
                                          </View>


                                          <View style={{width:'8%',flexDirection:'row'}}>
                                            <TouchableOpacity style={{backgroundColor:'#9e5abf',width:'100%',height:'70%',alignSelf:'center',borderRadius:50}}
                                              onPress={()=>{
                                                setNotification(1)
                                                
                                                 }}
                                            >
                                                <Text style={{color:'#fff',textAlign:'center',padding: 5,}}>Seguir</Text>
                                            </TouchableOpacity>
                                          </View>

                                          <View style={{width:'10%',flexDirection:'row'}}>
                                            <TouchableOpacity style={{width:'100%',marginLeft:10,alignSelf:'center'}} onPress={this.abrirRemito}>
                                                
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
         <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',overflow:'hidden',}}>
               {  
                   this.state.isSelected ?  
                   this.props.lote.Remito.map(remito=>(
                        <RemitoItem
                            remito={remito}
                            key={remito.NroRemito}
                        />
                   ))
                   :null
               }
         </View>
         </>
        );
    }
}

const style = StyleSheet.create({
    
})