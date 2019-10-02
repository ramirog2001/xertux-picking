import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Remito extends Component {
    state = {
        TextView: false
    }

    changeHeight = () => {
        this.setState(
            {
                TextView: !this.state.TextView
            }
        )
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.changeHeight()} style={{height: 80, backgroundColor: 'green'}}>
            <View style={{height: this.state.TextView? 0 : 255, overflow: "hidden"}}>
                <Text>
                    Consequat veniam irure dolore dolor consequat irure aliqua Lorem id do. Eiusmod et velit adipisicing id id occaecat in. Veniam nisi amet ipsum cillum deserunt occaecat qui ex dolore eiusmod dolore cillum mollit id. Minim nisi magna ut quis eiusmod aliquip.
                </Text>
            </View>
            </TouchableOpacity>
        );
    }
}

export default Remito;