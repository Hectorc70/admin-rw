import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://rwapi.herokuapp.com',
    params:{
        
    },
    /* headers:{
        'Authorization':'Token 25d2feed31bafd1a7ab15f4bda9fe116ca4ef12a'
    }, */
    
})

export default authApi