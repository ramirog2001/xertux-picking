import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import {getNotification} from '../../Redux/store'

import {connect} from 'react-redux'



class Notificaciones extends Component {


    


    render() {
        
        notifications = getNotification();
        const BadgedIcon = withBadge(notifications)(Icon)

        return (
            <View style={{width:'80%',flexDirection: 'row', justifyContent:'flex-end',flexWrap:'wrap'}}>
           
                {/* <Ionicons
                    name="ios-notifications"
                    style={{padding: 10,}}
                    size={26}
                /> */}
                <BadgedIcon type="ionicon" name="ios-chatbubbles"
                color="#fff" 
    
                />
                <Ionicons
                    name="ios-person"
                    size={34}
                
                    style={{marginLeft:30,marginRight: 25,paddingHorizontal: 15,paddingVertical: 5, borderRadius: 14, backgroundColor: '#999999'}}
                />
      
            </View>
        );
    }
}

export default Notificaciones;



const styles = StyleSheet.create({
    texto: {
        color: '#fff'
    }
})