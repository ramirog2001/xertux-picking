import React from 'react';
import { View, Text } from 'react-native';

const TableTop = () => {
    return (
        <View style={{flexDirection: "row", borderWidth: 0, borderBottomWidth: 1, borderTopEndRadius: 25, borderTopStartRadius: 25}}>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >N.</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Remito</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Farmacia</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Cuenta</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Transporte</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Unidades</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Provincia</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text style={{fontWeight: "bold"}} >Localidad</Text></View>
            <View style={{justifyContent: "center" ,flexDirection: "row", flex: 1}}><Text style={{fontWeight: "bold"}}>Direccion</Text></View>
        </View>
    );
};

export default TableTop;