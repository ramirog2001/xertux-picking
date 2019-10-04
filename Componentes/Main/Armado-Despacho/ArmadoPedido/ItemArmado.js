import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

const ItemArmado = ({nombre, fecha, urgente, id}) => {
    const estado = getEstado();

    function getEstado() {
        if(id === '1')
            return require('../../../../Images/CheckBox.png') 
        
        return require('../../../../Images/User.png')
        }

    return (
        
        <View style={{width: '95%', flexDirection: "row"}}>
            <View style={{width: '5%', borderRightWidth: 1 , backgroundColor: urgente ? 'red': 'yellow'  }} />
            <View style={{flexDirection: "row", paddingVertical: 5, flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: "bold", textAlign: "center"}}>
                        Lote
                    </Text>
                    <Text style={{textAlign: "center"}}>
                        {nombre}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: "bold", textAlign: "center"}}>
                        Fecha alta
                    </Text>
                    <Text style={{textAlign: "center"}}>
                        {fecha}
                    </Text>
                </View>
            </View>
            <View style={{flex: 1}} />
            <View style={{flex:1, flexDirection: "row", paddingVertical: 5}}>
                    <Image 
                        style={{height: 35, flex: 1}}
                        resizeMethod= "scale"
                        resizeMode="center"
                        source={estado}

                    />
                
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: "bold", textAlign: "center"}}>
                        Prioridad
                    </Text>
                    <Text style={{textAlign: "center"}}>
                        {urgente ? 'urgente' : 'normal'}
                    </Text>
                </View>
            </View>
        </View>
      
    );
};

export default ItemArmado;