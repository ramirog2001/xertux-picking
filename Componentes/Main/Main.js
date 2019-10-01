import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationBar } from 'navigationbar-react-native';
const Administrador = () => {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <NavigationBar 
                navigationBarStyle={{backgroundColor:'#9e5abf'}}
                componentLeft = {() => <Image source={require('../../Images/Untitled.png')} style={{height:'100%'}} resizeMode='contain' />}
            />
            <View style={{width: '100%', backgroundColor: '#9e5abf', flexDirection: 'row', borderTopWidth: 1}}>
                <ScrollView horizontal>
                    <Button title='Registrar Lote' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button title='Control de Lotes' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button title='Usuarios' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button title='Informes' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button title='Armado de Carro' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button title='Armado de Pedido' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                    <Button title='Despacho' buttonStyle={{backgroundColor:'#9e5abf'}}/>
                </ScrollView>
            </View>
        </View>
    );
};

export default Administrador;