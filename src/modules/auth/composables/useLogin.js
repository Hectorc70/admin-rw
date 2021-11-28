//import { ref } from 'vue'
import { useStore} from 'vuex'

const UseLogin = () => {
    const store =  useStore();
    
    const login = async(user)=>{
        await store.dispatch('auth/getTokenUser', user)
        .catch(function (error){
            console.log(error)
            return { ok: false, message:error}
        })
        .then(function (resp){
            console.log(resp)
            return resp;
        }).finally((resp)=>resp

        )
        
    }

    return {
        login
    }
}

export default UseLogin
