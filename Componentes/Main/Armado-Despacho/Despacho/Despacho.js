import React,{Component} from 'react';
import { Text,View,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import Buttons from '../../Buttons';

//componentes
import DespachoItem from './DespachoItem'

export default class Despacho extends Component{

    constructor(props){
        super(props);

        this.state = {
            lotes: [
                {numeroRemito:'090930242',transporte: 7,cliente:'Cliente 1'},
                {numeroRemito:'543252352',transporte: 6,cliente:'Cliente 2'},
                {numeroRemito:'76576376',transporte: 6,cliente:'Cliente 2'},
                {numeroRemito:'5432543265',transporte: 6,cliente:'Cliente 5'},
                {numeroRemito:'124246345',transporte: 7,cliente:'Cliente 8'},
                {numeroRemito:'651562456',transporte: 8,cliente:'Cliente 10'},
            ]
        }
    }

    despacharLote = () => {
    
    }

    render(){
    return (
        <>
        <Buttons navigation = {this.props.navigation}/>
        <View style={styles.container}>
            <ScrollView>
                {
                    this.state.lotes.map(item => (
                        <DespachoItem item={item}
                            key={item.numeroRemito}
                        />
                    ))
                }
            </ScrollView>
            <TouchableOpacity style={{position:'absolute',top:'80%',left:'42%',width:140,borderRadius: 100,height:50,backgroundColor:'#9e5abf',elevation:7}}
                activeOpacity={.9}
                onPress={this.despacharLote}
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