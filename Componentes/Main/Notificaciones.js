import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

class Notificaciones extends Component {


    BadgedIcon = withBadge(1)(Icon);

    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent:'center',flexWrap:'wrap'}}>
                <View style={{width:'50%'}}>
                    <Ionicons
                        name="ios-person"
                        size={30}
                    />
                </View>
                <View style={{width:'50%'}}>
                
                <BadgedIcon type="ionicon" name="ios-chatbubbles" />
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