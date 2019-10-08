import React from 'react';
import { Text, View, Image, ScrollView ,StatusBar} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationBar } from 'navigationbar-react-native';
import Buttons from './Buttons';
import { ArmadoCarro, Admin} from './NavigationMaster';

import { getPermissions } from '../../Redux/store'

const Administrador = () => {
    user = getPermissions();
    return (
        <View style={{flex: 1, width: '100%'}}>
            <StatusBar hidden/>
            <NavigationBar 
                navigationBarStyle={{backgroundColor:'#9e5abf',padding: 5,}}
                componentLeft = {() => <Image source={require('../../Images/Untitled.png')}
                                        style={{height:'100%',width:120,}}  resizeMode='center'/>}
            />
            {   
                user === 'admin'?
                    <Admin />
                :   <ArmadoCarro />
            }
        </View>
    );
};

export default Administrador;