import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {

  Auth = (AuthLevel) => {
    switch (AuthLevel) {
      case 'Admininstrador':
        
        break;

      case 'ArmadoPedidos':
        
        break;

      case 'ArmadoCarro':
        
        break;

      case 'Despacho':
        
        break;
    
      default:
        return(<Text>Login</Text>)
        break;
    }
  }

  AuthLevel = 'login';

  return (
    <View style={styles.container}>

      <Auth AuthLevel />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
