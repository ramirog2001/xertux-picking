import React,{Component} from 'react';
import { Text,View,StatusBar,StyleSheet,TouchableOpacity,ScrollView,Image } from "react-native";
import Buttons from '../../Buttons';

import DropDownItem from 'react-native-drop-down-item';


export default class ControlLote extends Component{

    constructor(props){
        super(props);

        this.state = {
            lotes: [{
                NroLote: 'L25',
                FechaAlt: '2019-09-27 14:00:00.00',
                Estado: 'Pendiente',
                Asignado: 'Usuario 1',
                Transp: 7,
                Prioridad: 1,
                Follow: [
                    'Administrador'
                ],
                Remito:[
                    {
                        NroRemito: '789023',
                        Estado: 1,
                        Farmacia: 'Nombre Farmacia',
                        NroCta: 13466,
                        CntUni: 10,
                        Proent: 'Buenos Aires',
                        Locent: 'Mar del Plata',
                        Dirent: 'La Rioja',
                        Producto: [
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A102',
                                Estado : 1
                            }
                        ]
                    },
                    {
                        NroRemito: '09876',
                        Estado: 1,
                        Farmacia: 'Nombre Farmacia',
                        NroCta: 13466,
                        CntUni: 10,
                        Proent: 'Buenos Aires',
                        Locent: 'Mar del Plata',
                        Dirent: 'La Rioja',
                        Producto: [
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A102',
                                Estado : 1
                            }
                        ]
                    }
                ]

            },
            {
                NroLote: 'L26',
                FechaAlt: '2019-09-27 14:00:00.00',
                Estado: 'Pendiente',
                Asignado: 'Usuario 2',
                Transp: 7,
                Prioridad: 0,
                Follow: [
                    'Administrador'
                ],
                Remito:[
                    {
                        NroRemito: '12345',
                        Estado: 1,
                        Farmacia: 'Nombre Farmacia',
                        NroCta: 13466,
                        CntUni: 10,
                        Proent: 'Buenos Aires',
                        Locent: 'Mar del Plata',
                        Dirent: 'La Rioja',
                        Producto: [
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A102',
                                Estado : 1
                            }
                        ]
                    },
                    {
                        NroRemito: '654123',
                        Estado: 1,
                        Farmacia: 'Nombre Farmacia',
                        NroCta: 13466,
                        CntUni: 10,
                        Proent: 'Buenos Aires',
                        Locent: 'Mar del Plata',
                        Dirent: 'La Rioja',
                        Producto: [
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A102',
                                Estado : 1
                            }
                        ]
                    }
                ]

            },
            {
                NroLote: 'L27',
                FechaAlt: '2019-09-27 14:00:00.00',
                Estado: 'Pendiente',
                Asignado: 'Usuario 3',
                Transp: 7,
                Prioridad: 0,
                Follow: [
                    'Administrador'
                ],
                Remito:[
                    {
                        NroRemito: '654364',
                        Estado: 1,
                        Farmacia: 'Nombre Farmacia',
                        NroCta: 13466,
                        CntUni: 10,
                        Proent: 'Buenos Aires',
                        Locent: 'Mar del Plata',
                        Dirent: 'La Rioja',
                        Producto: [
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A102',
                                Estado : 1
                            }
                        ]
                    },
                    {
                        NroRemito: '624654',
                        Estado: 1,
                        Farmacia: 'Nombre Farmacia',
                        NroCta: 13466,
                        CntUni: 10,
                        Proent: 'Buenos Aires',
                        Locent: 'Mar del Plata',
                        Dirent: 'La Rioja',
                        Producto: [
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A102',
                                Estado : 1
                            }
                        ]
                    }
                ]

            }]
        }


    }


    render(){

        return (
            <>
                <Buttons navigation = {this.props.navigation}/>
                <View style={styles.container}>
                    <ScrollView style={{alignSelf:'stretch'}}>
                        {
                            this.state.lotes.map(lote => (
                                <DropDownItem
                                    key={lote.NroLote}
                                    contentVisible={false}
                                    invisibleImage="ios-arrow-back"
                                    visibleImage="ios-arrow-down"
                                    underlineColor="#767676"
                                    header={
                                        <View style={{flexDirection:'row',width:'95%'}}>
                                         {
                                             lote.Prioridad === 1 ?
                                             <View style={{width:'2%',backgroundColor:'red',height:'100%'}}></View>
                                             :
                                             <View style={{width:'2%',backgroundColor:'yellow',height:'100%'}}></View>
                                         }
                                          <View style={{width:'10%',flexDirection:'row',flexWrap:'wrap',paddingVertical:5}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Lote</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{lote.NroLote}</Text>
                                          </View>
                                          <View style={{width:'10%',flexDirection:'row',flexWrap:'wrap',paddingVertical:5}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Fecha Alta</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{lote.FechaAlt.slice(0,10)}</Text>
                                          </View>
                                          <View style={{width:'10%',flexDirection:'row',flexWrap:'wrap',paddingVertical:5}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Transporte</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{lote.Transp}</Text>
                                          </View>
                                          <View style={{width:'10%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Asignado a</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{lote.Asignado}</Text>
                                          </View>
                                          <View style={{width:'21%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Estado</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>{lote.Estado}</Text>
                                          </View>
                                          <View style={{width:'10%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                          <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Proceso</Text>
                                            <Text style={{fontSize:14,width:'100%',textAlign:'center'}}>50%</Text>
                                          </View>
                                          <View style={{width:'10%',paddingVertical:5,flexDirection:'row',flexWrap:'wrap'}}>
                                            <Text style={{fontSize:14,width:'100%',fontWeight:'bold',textAlign:'center'}}>Prioridad</Text>
                                            {
                                                lote.Prioridad === 1 ? 
                                                <Text style={{fontSize:14,width:'100%',textAlign:'center',color:'red'}}>Urgente</Text>
                                                : 
                                                <Text style={{fontSize:14,width:'100%',textAlign:'center',color:'green'}}>Normal</Text>
                                            }      
                                            
                                          </View>


                                          <View style={{width:'10%',flexDirection:'row'}}>
                                            <TouchableOpacity style={{backgroundColor:'#9e5abf',width:'100%',height:'70%',alignSelf:'center',borderRadius:50}}>
                                                <Text style={{color:'#fff',textAlign:'center',padding: 5,}}>Seguir</Text>
                                            </TouchableOpacity>
                                          </View>
                                         
                                        </View>
                                      }
                        
                                >
                                    {
                                        lote.Remito.map(remito => (
                                            <DropDownItem
                                                key={remito.NroRemito}
                                                contentVisible={false}
                                                invisibleImage="ios-arrow-back"
                                                visibleImage="ios-arrow-down"
                                                header={
                                                    <View style={{flexDirection:'row',width:'95%',paddingVertical:5}}>
                                                        <View style={{width:'10%'}}>
                                                            <Image
                                                                source={require('../../../../Images/deleted.png')}
                                                            />
                                                        </View>
                                                        <View style={{width:'90%'}}>

                                                        </View>

                                                    </View>

                                                }
                                            >
                                                <Text>Texto</Text>
                                            </DropDownItem>
                                        ))
                                    }
                                </DropDownItem>
                            ))
                        }
                    </ScrollView>
                </View>
            </>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    }
})