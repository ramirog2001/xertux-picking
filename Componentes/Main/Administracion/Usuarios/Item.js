import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Items = ({Usuario, Nombre, Email, Roles}) => {

    console.log(Usuario);

    return (
        <>
        <View style={{flexDirection: 'row', widht: '100%', borderWidth: 1, height: 50}}>
            <View style={{flex: 1}}>
                <Text numberOfLines = {1}>
                    Usuario
                </Text>
                <Text numberOfLines = {1}>
                    {Usuario}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text numberOfLines = {1}>
                    Nombre
                </Text>
                <Text numberOfLines = {1}>
                    {Nombre}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text numberOfLines = {1}>
                    Email
                </Text>
                <Text numberOfLines = {1}>
                    {Email}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text numberOfLines = {1}>
                    Roles
                </Text>
                <Text numberOfLines = {1}>
                    {Roles}
                </Text>
            </View>
            <View style={{flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "stretch"}}>
                <TouchableOpacity
                    style={{padding: 5, width: 100, margin: 5, borderWidth: 1,backgroundColor:'#ce65fd', borderRadius:20,elevation:6}}>
                        <Text style={{textAlign:'center',color:'#fff', marginVertical: 5,}}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{padding: 5, width: 100, margin: 5, borderWidth: 1,backgroundColor:'#ce65fd', borderRadius:20,elevation:6}}>
                        <Text style={{textAlign:'center',color:'#fff', marginVertical: 5,}}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
            );
        };
        
        export default Items;