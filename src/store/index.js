import { createStore } from 'vuex'

import Auth from '../modules/daybook/store/journal'


const store = createStore({
    modules: {
        journal
    }
})




export default store