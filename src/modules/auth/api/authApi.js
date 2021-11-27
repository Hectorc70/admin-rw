import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://rwapi.herokuapp.com',
    params:{
        
    },
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'multipart/form-data; boundary=something',
        'Authorization':'Token 62dfd379af87f103c5c94106532bf124fa073111'
    },
    
})

export default authApi