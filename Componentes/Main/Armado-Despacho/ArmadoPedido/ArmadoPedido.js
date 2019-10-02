import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Buttons from '../../Buttons';

import DropDownItem from 'react-native-drop-down-item';
import { Ionicons } from '@expo/vector-icons';
import ItemArmado from './ItemArmado';
import Remito from './Remito';

const ArmadoPedido = (props) => {

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

    const Drop = ({nombre, fecha, urgente, id}) => {
        if(id === '1')
        return(
        <View style={{borderWidth: 1}}>
            <DropDownItem 
                style={{flex: 1, width: "100%"}}
                header={
                <ItemArmado nombre={nombre} fecha={fecha} urgente={urgente} id={id}/>
                }
            >
                <Remito />
            </DropDownItem>
        </View>
        )

        return(
            <View style={{borderWidth:1}}>
                <ItemArmado nombre={nombre} fecha={fecha} urgente={urgente} id={id}/>
            </View>
        )

    }
    return (
        <>
        <Buttons navigation = {props.navigation}/>
        
        <FlatList 
            data={datos}
            renderItem = {({item}) => <Drop nombre={item.nombre} fecha={item.fecha} urgente={item.urgente} id={item.id}/>}
            keyExtractor = {item => item.id}
        />

        </>
    );
};

export default ArmadoPedido;