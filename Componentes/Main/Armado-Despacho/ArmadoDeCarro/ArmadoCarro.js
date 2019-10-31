import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Buttons from '../../Buttons';



import LoteArmadoDeCarro from './LoteArmadoDeCarro'

export default class ArmadoCarro extends Component {


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
                                Nserie: 'A106',
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
                                Nserie: 'A107',
                                Estado: 1
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
                                Nserie: 'A101',
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
                                Nserie: 'A105',
                                Estado : 1
                            },
                            {
                                TipPro: 'PVT',
                                ArtCod: 'ab1235789',
                                Desc: 'Un producto',
                                FechaVen: '2019-09-27',
                                Nserie: 'A198',
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
                                Nserie: 'A1065',
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
            <View style={style.container}>
                <ScrollView style={{alignSelf:'stretch'}}>
                    {
                        this.state.lotes.map(lote => (
                            <LoteArmadoDeCarro 
                                key={lote.NroLote}
                                remito={lote.Remito}
                                lote={lote}
                            />
                        ))
                    }   
                </ScrollView>
            </View>
        </>
    );
    }
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    }
})