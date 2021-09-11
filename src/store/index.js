import { createStore } from 'vuex'

import Auth from '@/modules/auth/store'


const store = createStore({
    modules: {
        Auth
    }
})




export default store