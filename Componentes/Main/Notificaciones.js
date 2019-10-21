import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

class Notificaciones extends Component {


 

    render() {
        return (
            <View style={{width:'80%',flexDirection: 'row', justifyContent:'flex-end',flexWrap:'wrap'}}>
           
                <Ionicons
                    name="ios-notifications"
                    style={{padding: 10,}}
                    size={26}
                />
                <Ionicons
                    name="ios-person"
                    size={34}
                    style={{marginRight: 25,padding: 8, borderRadius: 7, backgroundColor: '#c0c0c0'}}
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