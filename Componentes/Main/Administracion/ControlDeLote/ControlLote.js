import React,{Component} from 'react';
import { Text,View,StatusBar,StyleSheet,TouchableOpacity } from "react-native";
import Buttons from '../Buttons';

export default class ControlLote extends Component{

    render(){
        return (
            <>
                <Buttons navigation = {props.navigation}/>
                <View>

                </View>
            </>
        );
    }
};


const styles = StyleSheet.create({

})