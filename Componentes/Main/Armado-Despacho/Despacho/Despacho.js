import React,{Component} from 'react';
import { Text,View,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import Buttons from '../../Buttons';

//componentes
import DespachoItem from './DespachoItem'

export default class Despacho extends Component{

    constructor(props){
        super(props);

        this.state = {
            lotes: []
        }
    }

    render(){
    return (
        <>
        <Buttons navigation = {this.props.navigation}/>
        <View style={styles.container}>
            <ScrollView>
                <DespachoItem/>
                <DespachoItem/>
                <DespachoItem/>
                <DespachoItem/>
            </ScrollView>
            <TouchableOpacity style={{position:'absolute',top:'80%',left:'42%',width:140,borderRadius: 100,height:50,backgroundColor:'#9e5abf',elevation:7}}
                activeOpacity={.9}
            >
                <Text style={{color:'#fff',fontSize:18,textAlign:'center',padding: 10,}}>Despachar</Text>
            </TouchableOpacity>
        </View>
        </>
    );
    }
};



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f6f6f6'
    }
})