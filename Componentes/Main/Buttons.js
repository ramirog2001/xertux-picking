import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const Buttons = ({navigation}) => {
    return (
        <View style={{width: '100%', backgroundColor: '#9e5abf', flexDirection: 'row', borderTopWidth: 1,borderColor: '#F5F5F5',}}>
                <ScrollView horizontal>
                    <Button onPress = {() => navigation.navigate('RegistrarLote')} title='Registrar Lote' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('ControlLote')} title='Control de Lotes' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('Usuarios')} title='Usuarios' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('Informes')} title='Informes' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('ArmadoCarro')} title='Armado de Carro' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('ArmadoPedido')} title='Armado de Pedido' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('Despacho')} title='Despacho' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                </ScrollView>
            </View>
    );
};

export default Buttons;