import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import Buttons from '../../Buttons'
import Table from './Table'
import TableTop from './TableTop';
import { addListener } from 'expo/build/Updates/Updates';


class RegistrarLote extends Component {
    state = {
        nroRemitos: [
        ],
        text: '',
        endPressed: true,
    }

    aniadirDatos = () => {
        let aux;
        aux = this.state.nroRemitos;
        aux.push(this.state.text);
        this.setState({
            datos: aux
        });
    }

    _handleEnd = () => {
        if(this.state.text != ''){
        this.aniadirDatos();
        this.setState({endPressed: false})
        this.setState({text: ''});
        this.nro.focus()
    }
    }
    render() {


    return (
        <>
            <Buttons navigation = {this.props.navigation}/>
            <View style={{flex: 5,borderWidth: 1, borderRadius: 25, margin: 10, padding: 0, overflow: "hidden"}}>
                <TableTop />
                
                <FlatList
                data = {this.state.nroRemitos}
                renderItem = {({item, index}) => <Table nroRemito = {item} nro = {index}/>}
                keyExtractor = {(item) => item}
                extraData = {this.state}
                />
                    
                <TextInput 
                style={{paddingLeft:10,paddingBottom:10}}
                onEndEditing = {() => {this.state.endPressed? this._handleEnd(): null}} keyboardType="numeric" placeholder='nroRemito' value={this.state.text} onChangeText = {(texto) => this.setState({text: texto})} returnKeyType='done' onSubmitEditing={() => this.setState({endPressed: true})} autoFocus={true} ref = {(ref) => this.nro = ref} />
            
            </View>
            <View style={{flexDirection: "row"}}>
                <View style={{width: 180, borderRadius: 5, borderWidth: 1, margin: 10, marginTop: 0, padding: 3, paddingLeft: 12, flexDirection: "row"}}>
                    <Text>TotalUnidades: </Text>
                    <Text>{this.state.nroRemitos.length}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent:"space-evenly", flex: 1, marginBottom: 5}}>
                    <TouchableOpacity style={{padding: 5, width: 100, borderWidth: 1,backgroundColor:'#ce65fd', borderRadius:20,elevation:6}}>
                        <Text style={{textAlign:'center',color:'#fff', }}>Crear Lote</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress = {() => this.setState({nroRemitos: []})} style={{padding: 5, width: 100, borderWidth: 1,backgroundColor:'#ce65fd', borderRadius:20,elevation:6}}>
                            <Text style={{textAlign:'center',color:'#fff', }}>Limpiar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}};

export default RegistrarLote;