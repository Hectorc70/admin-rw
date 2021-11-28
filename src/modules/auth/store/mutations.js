
// export const myAction = ( state ) => {

// }



export const loginUser = ( state,{user, idToken} ) => {

    if(idToken){
        localStorage.setItem('idToken',idToken)
        state.idToken = idToken
    }
    
    state.user = user
    state.status = 'auth'
}

