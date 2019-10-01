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
                <Text style={{fontSize:14,paddingLeft: 20,}}>Numero de Remito</Text>
                <Text style={{fontSize:14,paddingLeft: 40,}}>Transporte</Text>
                <Text style={{fontSize:14,paddingLeft: 40,width:300,textAlign:'right'}}>Cliente</Text>
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