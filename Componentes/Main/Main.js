import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationBar } from 'navigationbar-react-native';
import Buttons from './Buttons';
import NavigationMaster from './NavigationMaster';
const Administrador = () => {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <NavigationBar 
                navigationBarStyle={{backgroundColor:'#9e5abf'}}
                componentLeft = {() => <Image source={require('../../Images/Untitled.png')} style={{height:'100%'}} resizeMode='contain' />}
            />
            <NavigationMaster />
        </View>
    );
};

export default Administrador;