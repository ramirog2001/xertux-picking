import React from 'react';
import { Text, View } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native'
const Administrador = () => {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <NavigationBar 
                componentLeft = {() => <Text>Prueba</Text>}
            />
            <View style={{width: '100%', backgroundColor: '#9e5abf'}}>
            
            </View>
        </View>
    );
};

export default Administrador;