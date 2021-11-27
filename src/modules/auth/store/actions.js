// export const myAction = async ({ commit }) => {

// }

import authApi from "../api/authApi";

export const getTokenUser = async ({ commit }, user) => {
    const { idUser, password } = user;

    const resp = await authApi.post("/api-token-auth/", {
        username: idUser,
        password: password,
    });

    console.log(resp.status)

    if (resp.status == 200) {
        const respUser = await authApi.get("/api/user/" + idUser, {
        headers: {
        Authorization: "Token " + resp.data["token"],
        },
        });

        if(respUser.status == 200){
            delete user.password
            const token = resp.data["token"]
            commit('loginUser',{
                user,
                token,
            })
            return { ok: true, message: respUser.data };
        }
        return { ok: false, message: respUser.data };

    }
    //mutation
    return { ok: false, message: resp.data };
    
};
