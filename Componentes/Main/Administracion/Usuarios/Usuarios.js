import React from 'react';
import { Text, ScrollView, FlatList, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements'
import Buttons from '../../Buttons';
import Item from './Item';

const Usuarios = (props) => {
    data = [
        {
            Usuario: 'Default_User',
            Nombre: 'Jhon Ramirez',
            Email: 'jramirez@gmail.com',
            Roles: 'Admin',
        },
        {
            Usuario: 'Default_User',
            Nombre: 'Jhon Ramirez',
            Email: 'jramirez@gmail.com',
            Roles: 'Admin',
        },
        {
            Usuario: 'Default_User',
            Nombre: 'Jhon Ramirez',
            Email: 'jramirez@gmail.com',
            Roles: 'Admin',
        },
        {
            Usuario: 'Default_User',
            Nombre: 'Jhon Ramirez',
            Email: 'jramirez@gmail.com',
            Roles: 'Admin',
        },
        {
            Usuario: 'Default_User',
            Nombre: 'Jhon Ramirez',
            Email: 'jramirez@gmail.com',
            Roles: 'Admin',
        },
    ]
    return (
        <>
            <Buttons navigation = {props.navigation}/>
            <ScrollView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
                <FlatList 
                    data= {data}
                    renderItem = {({item}) => <Item Usuario = {item.Usuario} Nombre = {item.Nombre} Email = {item.Email} Roles = {item.Roles} />}
                />
            </ScrollView>
                <TouchableOpacity
                style={{padding: 5 ,position: "absolute", right: '50%', bottom: 20, borderWidth: 1 ,marginLeft:100, backgroundColor:'#ce65fd' ,borderRadius:20,elevation:6}}>
                <Text style={{textAlign:'center',color:'#fff',fontSize:20,padding: 5,}}>añadir</Text>
                </TouchableOpacity>

        </>
    );
};

export default Usuarios;