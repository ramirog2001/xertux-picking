import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'
const RemitoItem = () => {
    return (
        <View style={{flexDirection: "row"}}>
            <View style={{flex: 1}} />
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Tipo del Producto</Text>
                <Text>PTV</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Numero del producto</Text>
                <Text style={{textAlign: "center", textAlignVertical: "center"}}>R0000000000000</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Descripcion del producto</Text>
                <Text>Descripcion</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Cantidad</Text>
                <Text>99</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Fecha de Vencimiento</Text>
                <Text>2019-09-19</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center", marginTop:20}}>
                <Button title=' ' buttonStyle={{width: '100%', borderRadius: 25, backgroundColor: "green"}}/>
            </View>
        </View>
    );
};

export default RemitoItem;