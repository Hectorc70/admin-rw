// export const myAction = async ({ commit }) => {

// }

import authApi from "../api/authApi";

export const getTokenUser = async ({ commit }, user) => {
    const { idUser, password } = user;


    
    
    const {data, status, config} = await authApi.post("/api-token-auth/", {
        username: idUser,
        password: password,
    });
    console.log(status)
    if(status ==200){
        delete user.password
        const token = data["token"]
        commit('loginUser',{
            user,
            token,})
    
            return { ok: true}
    }

    return { ok: false, message:config}


};
