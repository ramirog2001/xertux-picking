import React, { Component } from 'react';
import { Text, View, Image, ScrollView ,StatusBar} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationBar } from 'navigationbar-react-native';
import Buttons from './Buttons';
import Notificaciones from './Notificaciones';
import { ArmadoCarro, Admin} from './NavigationMaster';

import { getPermissions } from '../../Redux/store'

class Administrador extends Component {

    constructor(props){
        super(props);
        this.state={
            notificaciones: 1
        }
    }

    handleNotifications = () => {
        this.setState({
            notificaciones: this.state.notificaciones+1
        })
    }

    render(){
        user = getPermissions();
    return (
        <View style={{flex: 1, width: '100%'}}>
            <StatusBar hidden/>
            <NavigationBar 
                navigationBarStyle={{backgroundColor:'#9e5abf',padding: 5,}}
                componentLeft = {() => <Image source={require('../../Images/Recurso2mdpi.png')}
                                            style={{height:'100%',width:120,}} resizeMode='center'/>}
                componentRight = {()=> <Notificaciones
                    notifications={this.state.notificaciones}
                    handleNotifications={this.handleNotifications}
                />}
            />
            {   
                user === 'admin'?
                    <Admin 
                        notifications={this.state.notificaciones}
                    />
                :   <ArmadoCarro />
            }
        </View>
    );
    }
};

export default Administrador;