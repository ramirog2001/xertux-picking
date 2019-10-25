import { createStore } from 'redux';

const initState = {
  userPermission: '',
  userName: '',
  notification: 0
}


const store = createStore(myReducer);


function myReducer(state = initState, action) {
    switch (action.type) {
        case 'USER_PERMISSIONS':
            return{
                userPermission: action.userPermission,
                userName: state.userName,
                notification: state.notification
            }
            
        case 'USER_NAME':
            return{
                userPermission: state.userPermission,
                userName: action.userName,
                notification: state.notification
            }
        case 'NOTIFICATION':
            return {
                userPermission: state.userPermission,
                userName: state.userName,
                notification: state.notification + action.notification
            }
            
    
        default:
            break;
    }
 }


//Notificationes
export let setNotification = (notification) => {
    const notificationxd = {type: 'NOTIFICATION', notification}
    store.dispatch(notificationxd)
}
export let getNotification = ()=>{
    return(store.getState().notification)
}

//Permissions
export let setPermissions = (userPermission) => { 
    const permissions = {type: 'USER_PERMISSIONS', userPermission}
    store.dispatch(permissions)
}

export let setuserName = (userName) => {
    const username = {type: 'USER_NAME', userName}
    store.dispatch(username)
}

export let getPermissions = () => {
    return(store.getState().userPermission)
}
