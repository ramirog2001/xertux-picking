import React,{Component} from 'react';
import { Text,View,StyleSheet,ScrollView,Image ,CheckBox,TouchableOpacity} from 'react-native';

export default class DespachoItem extends Component {

    constructor(props){
        super(props);
        
        
        this.state = {
            ischecked: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../../Images/box.png')} style={{height:50,width:50}}/>
                <View style={{width:'20%',flexDirection: 'row',flexWrap:'wrap'}}>
                <Text style={{fontSize:14,paddingLeft: 20,fontWeight:'bold',width:'100%'}}>Numero de Remito</Text>
                <Text style={{fontSize:14,paddingLeft: 20,width:'100%'}}>{this.props.item.numeroRemito}</Text>
                </View>
                <View style={{width:'20%',flexDirection: 'row',flexWrap:'wrap'}}>
                <Text style={{fontSize:14,paddingLeft: 20,fontWeight:'bold',width:'100%'}}>Transporte</Text>
                <Text style={{fontSize:14,paddingLeft: 46,width:'100%',textAlign:'left'}}>{this.props.item.transporte}</Text>
                </View>
                <View style={{width:'40%',flexDirection: 'row',flexWrap:'wrap',alignItems:'center'}}>
                <Text style={{fontSize:14,paddingLeft: 20,fontWeight:'bold',width:'100%',textAlign:'center',}}>Cliente</Text>
                <Text style={{fontSize:14,paddingLeft: 40,width:'100%',textAlign:'center'}}>{this.props.item.cliente}</Text>
                </View>
                <View style={{alignItems:'flex-end',flex:1}}>
                    <CheckBox value={this.state.ischecked} onChange={()=>this.setState({ischecked: !this.state.ischecked})}/>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        height: 95,
        width:'100%',
        borderColor: '#000',
        borderWidth:.5,
        flexDirection: 'row',
        padding: 20,
    }
})