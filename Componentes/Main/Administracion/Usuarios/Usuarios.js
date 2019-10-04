import React from 'react';
import { Text, ScrollView, FlatList, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements'
import Buttons from '../../Buttons';
import Item from './Item';

const Usuarios = (props) => {
    return (
        <>
            <Buttons navigation = {props.navigation}/>
            <ScrollView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ScrollView>
                <TouchableOpacity
                style={{padding: 5 ,position: "absolute", right: '50%', bottom: 20, borderWidth: 1 ,marginLeft:100, backgroundColor:'#ce65fd' ,borderRadius:20,elevation:6}}>
                <Text style={{textAlign:'center',color:'#fff',fontSize:20,padding: 5,}}>añadir</Text>
                </TouchableOpacity>

        </>
    );
};

export default Usuarios;