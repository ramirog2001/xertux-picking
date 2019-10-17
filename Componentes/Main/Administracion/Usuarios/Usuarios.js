import React, { Component } from 'react';
import { Text, TextInput,ScrollView, FlatList, TouchableOpacity, View, Modal } from 'react-native';
import { Button, Overlay } from 'react-native-elements'
import Buttons from '../../Buttons';
import Item from './Item';

<<<<<<< Updated upstream
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
=======
const uuid = require('uuid/v1');

class Usuarios extends Component {
    state  = {
        data: [],
        xd: [], 
        isVisibleAdd: false,
        isVisibleModify: false,
        user: {
            id: '',
            Usuario: '',
            Nombre: '',
            Email: '',
            Roles: '',
        }
    }
    
    componentWillMount() {
        this.getData();
    }
    getData(){
        
        fetch('http://192.0.99.122:3000/posts')
        .then(res => res.json())
        .then(res => this.setState({data: res}))
        
    }
    
    userID = uuid();

    componentDidUpdate(){
        userID = uuid();
    }


    addUser(user){
        this.setState();
        fetch('http://192.0.99.122:3000/posts', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(this.getData())
    }

    removeUser = (id) => {
         a = this.state.data.filter(x => x.id != id);
         this.setState({data: a});

         fetch('http://192.0.99.122:3000/posts/' + id, {
             method: "DELETE"
         })
         .then(console.log("NICE"))
        
    }

    editUser(id){
        console.log('entrando a edit user con la id ', id);
        a = this.state.data.filter(x => x.id = id);
        console.log(a);
        this.setState({
            user: {
                id: a[0].id,
                Usuario: a[0].Usuario,
                Nombre: a[0].Nombre,
                Email: a[0].Email,
                Roles: a[0].Roles,
            },
            isVisibleModify: true    
        })
    }

    render() {
    return (
         <>  
             <Buttons navigation = {this.props.navigation}/>
             <ScrollView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
                 <FlatList 
                     extraData= {this.state}
                     data= {this.state.data}
                     renderItem = {({item}) => <Item Usuario = {item.Usuario} Nombre = {item.Nombre} Email = {item.Email} Roles = {item.Roles} Delete  = {this.removeUser} id = {item.id} Modificar = {(id) => this.editUser(id)} />}
                     keyExtractor={(item)=>item.id}
                 />
             </ScrollView>
                 <TouchableOpacity
                 onPress = {() => this.setState({isVisibleAdd: true})}
                 style={{padding: 5 ,position: "absolute", right: '50%', bottom: 20, borderWidth: 1 ,marginLeft:100, backgroundColor:'#ce65fd' ,borderRadius:20,elevation:6}}>
                 <Text style={{textAlign:'center',color:'#fff',fontSize:20,padding: 5,}}>añadir</Text>
                 </TouchableOpacity>
>>>>>>> Stashed changes

            <Overlay isVisible = {this.state.isVisibleAdd} onBackdropPress = {() => this.setState({isVisibleAdd: false})}>
                <Text>Overlay</Text>
            </Overlay>
            <Overlay 
                width = "auto"
                height = "auto"    
                isVisible = {this.state.isVisibleModify} onBackdropPress = {() => this.setState({isVisibleModify: false})}>
            <>    
                {console.log(this.state.user)}
                <Text>Editar Usuario</Text>
                <Text>ID</Text>
                <Text>Usuario</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({user: { ...prevState.user, Usuario: text}}))}>{this.state.user.Usuario}</TextInput>
                <Text>Nombre</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({user: {...prevState.user, Nombre: text}}))} >{this.state.user.Nombre}</TextInput>
                <Text>Email</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({user: {...prevState.user, Email: text }}))} >{this.state.user.Email}</TextInput>
                <Text>Roles</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({user: {...prevState.user, Roles: text}}))} >{this.state.user.Roles}</TextInput>
            </>
            </Overlay>
        </>
    ) 
}
};

export default Usuarios;