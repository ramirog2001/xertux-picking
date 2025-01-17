import React, { Component } from 'react';
import { Text, View, Image, ScrollView ,StatusBar} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationBar } from 'navigationbar-react-native';
import Buttons from './Buttons';
import Notificaciones from './Notificaciones';
import { ArmadoCarro, Admin} from './NavigationMaster';

import { getPermissions, getNotification,setNotification } from '../../Redux/store'

class Administrador extends Component {


    updateNotifications = () => {
        setNotification(1);
    }

    render(){
        user = getPermissions();
        notificaciones = getNotification();
    return (
        
        <View style={{flex: 1, width: '100%'}}>
            <StatusBar hidden/>
            <NavigationBar 
                navigationBarStyle={{backgroundColor:'#9e5abf',padding: 5,}}
                componentLeft = {() => <Image source={require('../../Images/Recurso2mdpi.png')}
                                            style={{height:'100%',width:120,}} resizeMode='center'/>}
                componentRight = {()=> <Notificaciones      
                    notificaciones={notificaciones}
                />}
            />
            {   
                user === 'admin'?
                    <Admin updateNotifications={this.updateNotifications}/>
                :   <ArmadoCarro />
            }
        </View>
    );
    }
};

export default Administrador;