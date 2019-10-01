import React, { Component } from 'react';
import {
    View, 
    Text,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableOpacity
}   from 'react-native'


import {LinearGradient} from 'expo-linear-gradient'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
          colors={['#3a0088', '#8b1bbf']}
          style={{ padding: 15, alignItems: 'center',width: '100%',height:'100%',alignItems: 'center',justifyContent:'center'}}>
                <View style={styles.card}>
                    <View style={{width:'50%',}}>
                    <LinearGradient
                        colors={['#9e5abf', '#ffffff']}
                        style={{ padding: 15, alignItems: 'center',width: '100%',height:'100%',alignItems: 'center',justifyContent:'center',borderBottomLeftRadius: 8,borderTopLeftRadius: 8,}}>
                            {/* To Do - agregar imagen de XertuX Picking */}
                    </LinearGradient>  
                    </View>
                    <View style={{width:'50%',flexDirection: 'row',flexWrap:'wrap',alignItems: 'center'}}>
                        <Text style={{width:'100%',fontSize:24,textAlign:'center',padding:30,color:'#767676'}}>LOG IN</Text>
                        <TextInput
                            placeholder="Ingrese su Usuario"
                            style={{width:'80%',marginLeft: 30,borderRadius:30,borderWidth: 1,padding: 10,borderColor: '#ce65fd',}}
                        />
                        <TextInput
                            placeholder="Ingrese su Clave"
                            style={{width:'80%',marginTop:30,marginLeft: 30,borderRadius:30,borderWidth: 1,padding: 10,borderColor: '#ce65fd',}}
                        />
                        <TouchableOpacity
                            style={{width:150,marginLeft:100,backgroundColor:'#ce65fd',alignSelf: 'center',borderRadius:20,elevation:6}}
                            onPress={()=> this.props.navigation.navigate('App')}
>
                            <Text style={{textAlign:'center',color:'#fff',fontSize:20,padding: 5,}}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


        </LinearGradient>
            </View>
        );
    }
}

 const styles = StyleSheet.create({
     container:{
         flex:1,
         width:'100%',
         height: '100%',
         marginTop: StatusBar.currentHeight ,
     },
     card:{
        width:'90%',
        height:'80%',
        backgroundColor:'#fff',
        borderRadius: 8,
        elevation: 7,
        flexDirection: 'row',
     }
 })