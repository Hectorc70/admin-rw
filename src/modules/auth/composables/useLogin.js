//import { ref } from 'vue'
import { useStore} from 'vuex'

const UseLogin = () => {
    const store =  useStore();
    
    const login = async(user)=>{
        const resp = await store.dispatch('auth/getTokenUser', user)
        
        return resp;
    }

    return {
        login
    }
}

export default UseLogin
