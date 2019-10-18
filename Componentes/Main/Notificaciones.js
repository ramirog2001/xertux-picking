import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'
class Notificaciones extends Component {
    render() {
        return (
            <View>
                <Text style={styles.texto}>NOtificaciones</Text>
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