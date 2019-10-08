import { createStore } from 'redux';

const initState = {
  userPermission: '',
  userName: '',
}


const store = createStore(myReducer);


function myReducer(state = initState, action) {
    switch (action.type) {
        case 'USER_PERMISSIONS':
            return{
                userPermission: action.userPermission,
                userName: state.userName
            }
            
        case 'USER_NAME':
            return{
                userPermission: state.userPermission,
                userName: action.userName
            }
            
    
        default:
            break;
    }
 }


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
