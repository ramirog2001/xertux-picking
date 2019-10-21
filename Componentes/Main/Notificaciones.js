import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

class Notificaciones extends Component {


 

    render() {
        return (
            <View style={{width:'100%',flexDirection: 'row', justifyContent:'center',flexWrap:'wrap', backgroundColor:'red'}}>
              <View style={{width:'50%'}}>
                <Ionicons
                    name="ios-notifications"
                    style={{}}
                    size={30}
                />
              </View>
              <View style={{width:'50%'}}>
                <Ionicons
                    name="ios-person"
                    size={30}
                />
              </View>
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