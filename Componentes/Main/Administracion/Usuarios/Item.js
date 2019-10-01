import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Items = () => {
    return (
        <>
        <View style={{flexDirection: 'row', widht: '100%', borderWidth: 1, height: 50}}>
            <View style={{flex: 1}}>
                <Text>
                    Usuario
                </Text>
                <Text>
                    Usuario
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text>
                    Nombre
                </Text>
                <Text>
                    Nombre
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text>
                    Email
                </Text>
                <Text>
                    Email
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text>
                    Roles
                </Text>
                <Text>
                    Roles
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