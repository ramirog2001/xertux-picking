import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { getPermissions } from '../../Redux/store'


const Buttons = ({navigation}) => {
    const permissions = getPermissions();
    console.log('inButtons');
    console.log(permissions);
    return (
        <View style={{width: '100%', backgroundColor: '#9e5abf', flexDirection: 'row', borderTopWidth: 1,borderColor: '#F5F5F5',}}>
                <ScrollView horizontal>
                    {permissions == 'admin'? <>
                    <Button onPress = {() => navigation.navigate('RegistrarLote')} title='Registrar Lote' buttonStyle={{backgroundColor:'#9e5abf',}}/>
                    <Button onPress = {() => navigation.navigate('ControlLote')} title='Control de Lotes' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('Usuarios')} title='Usuarios' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('Informes')} title='Informes' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                        </>
                    : null}
                    {permissions == 'armadocarro'? <>
                    <Button onPress = {() => navigation.navigate('ArmadoCarro')} title='Armado de Carro' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('ArmadoPedido')} title='Armado de Pedido' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button onPress = {() => navigation.navigate('Despacho')} title='Despacho' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    </>
                    : null
                    }
                </ScrollView>
            </View>
    );
};

export default Buttons;