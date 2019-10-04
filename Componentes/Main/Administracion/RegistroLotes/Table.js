import React from 'react';
import { View, Text } from 'react-native';

const Table = ({nroRemito, nro}) => {
    return (
<View style={{flexDirection: "row", borderWidth: 0, borderBottomWidth: 1, borderTopEndRadius: 25, borderTopStartRadius: 25}}>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >{nro+1}</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >{nroRemito}</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >XD</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >45886</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >Holaxd</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >48</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >BSAS</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", borderRightWidth: 1, flex: 1}}><Text numberOfLines={1} >Mar del Plata</Text></View>
    <View style={{justifyContent: "center" ,flexDirection: "row", flex: 1}}><Text numberOfLines={1}>Direccion</Text></View>
</View>
    );
};

export default Table;