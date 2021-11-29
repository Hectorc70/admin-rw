// export const myAction = async ({ commit }) => {

// }

import authApi from "../api/authApi";

export const getTokenUser = async ({ commit }, user) => {
    const { idUser, password } = user;

    let ok = true;

    try{    
        const {status,data} = await authApi.post("/api-token-auth/", {
            username: idUser,
            password: password,
        },
        { validateStatus: false }
        );
        

        if(status ==200){
            delete user.password
            const token = data['token']
            commit('loginUser',{
                user,
                token,})
            return { ok: ok}
        }
        ok = false; 
        return { ok: ok, message:data['non_field_errors'][0]}
    }catch(error){
        ok = false;
        return { ok: ok, message:error}
    }
    

};
