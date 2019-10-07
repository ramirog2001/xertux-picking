import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'
const RemitoItem = ({tipo, numero, descripcion, cantidad, fvencimiento, counter}) => {

    const [bcolor, setbcolor] = useState('red');

    const handlePress = () => {
        if(bcolor === 'red'){
        setbcolor('green')
        counter(true);}
        else{
            setbcolor('red')
            counter(false)
        }
    }

    return (
        <View style={{flexDirection: "row"}}>
            <View style={{flex: 1}} />
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Tipo del Producto</Text>
                <Text>{tipo}</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Numero del producto</Text>
                <Text style={{textAlign: "center", textAlignVertical: "center"}}>{numero}</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Descripcion del producto</Text>
                <Text>{descripcion}</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Cantidad</Text>
                <Text>{cantidad}</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: "bold"}}>Fecha de Vencimiento</Text>
                <Text>{fvencimiento}</Text>
            </View>
            <View style={{flex: 1, margin: 5, alignItems: "center", justifyContent: "center", marginTop:20}}>
                <Button title=' ' onPress={() => handlePress()} buttonStyle={{width: '100%', borderRadius: 25, backgroundColor: bcolor}}/>
            </View>
        </View>
    );
};

export default RemitoItem;