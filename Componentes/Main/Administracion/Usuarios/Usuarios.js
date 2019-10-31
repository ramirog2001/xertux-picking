import React, { Component } from 'react';
import { Text, TextInput,ScrollView, FlatList, TouchableOpacity, View, Modal } from 'react-native';
import { Button, Overlay } from 'react-native-elements'
import Buttons from '../../Buttons';
import Item from './Item';
import Axios from 'axios';


const uuid = require('uuid/v1');
class Usuarios extends Component {
    state  = {
        data: {
            user_fullname:'jotauno ',
            user_name:'cd',
            user_email:'fsd',
            user_password:'xds',
            user_type:'fsd',
        },
        isVisibleAdd: false,
        isVisibleModify: false,
        users: []
    }
    
    componentWillMount() {
        this.getData();
    }
    async getData(){
        res = await Axios({
            url: 'http://192.0.99.131:3000/user/list',
            method: 'get'
        }) 
        this.setState({users: res.data.data.user})
        console.log(this.state.users);
        
    }


     addUser(){
        this.setState({isVisibleAdd: true})
     }

    async addUserAccept(){
       console.log("enter to useraccept")
       console.log(this.state.data);
       
      this.setState({isVisibleAdd: false})
        Axios.post('http://192.0.99.131:3000/user/add', this.state.data)
        .then(res => console.log(res)).then(this.getData())
     }

    removeUser = (id) => {

       Axios.delete('http://192.0.99.131:3000/user/' + id)
        .then(res => res = 200 ? this.getData() : console.log("Server fail", res.status))

        console.log('http://192.0.99.131/:3000/user/'+id);
        
     }

    // editUser(id){
    //     a = this.state.data.filter(x => x.id = id);
    //     this.setState({
    //         user: {
    //             id: a[0].id,
    //             Usuario: a[0].Usuario,
    //             Nombre: a[0].Nombre,
    //             Email: a[0].Email,
    //             Roles: a[0].Roles,
    //         },
    //         isVisibleModify: true    
    //     })
    // }

    // async acceptEdit(){

    //     Axios.delete('http://192.0.99.122:3000/posts/' + this.state.user.id)
    //     .then(res => res.status = 200 ? Axios.post('http://192.0.99.122:3000/posts', this.state.user) : console.log("server failed", res.status))
    //     .then(res => status = 201 ? this.getData() : console.log("Server failed", res.status))

    //     this.setState({isVisibleModify: false})
    // }

    render() {
    return (
         <>  
         <Buttons navigation = {this.props.navigation}/>
             <ScrollView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
              <FlatList 
                     data= {this.state.users}
                     renderItem = {({item}) => <Item Usuario = {item.user_name} Nombre = {item.user_fullname} Email = {item.user_email} Delete={this.removeUser} Roles = {item.user_type} id = {item._id} />}
                     keyExtractor={(item)=>item._id}
                 /> 
             </ScrollView>
                 <TouchableOpacity
                 onPress = {() => this.addUser()}
                 style={{padding: 5 ,position: "absolute", right: '50%', bottom: 20, borderWidth: 1 ,marginLeft:100, backgroundColor:'#ce65fd' ,borderRadius:20,elevation:6}}>
                 <Text style={{textAlign:'center',color:'#fff',fontSize:20,padding: 5,}}>añadir</Text>
                 </TouchableOpacity>

            <Overlay 
                width = "80%"
                height = "auto"
                isVisible = {this.state.isVisibleAdd} onBackdropPress = {() => this.setState({isVisibleAdd: false})}>
                <>
                    <Text>Añadir Usuario</Text>
                    <Text>Nombre</Text>
                    <TextInput style = {{backgroundColor: "violet"}}
                    onChangeText = {(text) => this.setState(prevState => ({data: { ...prevState.data,user_fullname: text}}))}
                    ></TextInput>
                    <Text>Usuario</Text>
                    <TextInput style = {{backgroundColor: "violet"}}
                     onChangeText = {(text) => this.setState(prevState => ({data: { ...prevState.data, user_name: text}}))} 
                     ></TextInput>
                     <Text>Contraseña</Text>
                    <TextInput style = {{backgroundColor: "violet"}} 
                       onChangeText = {(text) => this.setState(prevState => ({data: { ...prevState.data, user_password: text}}))} 
                    ></TextInput>
                    <Text>Email</Text>
                    <TextInput style = {{backgroundColor: "violet"}}
                     onChangeText = {(text) => this.setState(prevState => ({data: { ...prevState.data, user_email: text}}))}
                      ></TextInput>
                    <Text>Roles</Text>
                    <TextInput style = {{backgroundColor: "violet"}} 
                       onChangeText = {(text) => this.setState(prevState => ({data: { ...prevState.data, user_type: text}}))} 
                    ></TextInput>
                   
                    <TouchableOpacity
                      onPress = {() => this.addUserAccept()}
                        style={{padding: 5, borderWidth: 1, backgroundColor:'#ce65fd', borderRadius:20, elevation:6, marginTop: 5}}>
                    <Text style={{textAlign:'center',color:'#fff',fontSize:20,padding: 5,}}>añadir</Text>
                    </TouchableOpacity>
                </>
            </Overlay>
         <Overlay 
                width = "80%"
                height = "auto"    
                isVisible = {this.state.isVisibleModify} onBackdropPress = {() => this.setState({isVisibleModify: false})}>
            <>    
                <Text>Editar Usuario</Text>
                <Text>ID</Text>
             {/* <Text>{this.state.user.id}</Text>  */}
                <Text>Usuario</Text>
                <TextInput style = {{backgroundColor: 'violet'}}
                 onChangeText = {(text) => this.setState(prevState => ({data: { ...prevState.data,  user_name: text}}))}>{this.state.data.user_name}</TextInput>
                <Text>Nombre</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({data: {...prevState.data, user_fullname: text}}))} >{this.state.data.user_fullname}</TextInput>
                <Text>Email</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({data: {...prevState.data, user_email: text }}))} >{this.state.data.user_email}</TextInput>
                <Text>Roles</Text>
                <TextInput style = {{backgroundColor: 'violet'}} onChangeText = {(text) => this.setState(prevState => ({data: {...prevState.data, user_type: text}}))} >{this.state.data.user_type}</TextInput>
                <Button title="Aceptar" onPress = {() => this.acceptEdit()}/>
            </> 
            </Overlay> 
        </>
    );
    } 
}

export default Usuarios;