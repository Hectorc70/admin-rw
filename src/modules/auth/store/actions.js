// export const myAction = async ({ commit }) => {

// }

//import authApi from "../api/authApi";
import axios from "axios";

export const getTokenUser = async (/* {  commit }*/ ) => {
    //const { idUser, password } = user;

    try {
    const authApi = await axios.create({
        baseURL:"https://rwapi.herokuapp.com/api/user/2225403176",
        headers:{
            'Authorization':'Token 25d2feed31bafd1a7ab15f4bda9fe116ca4ef12a',
        }
    });

    const resp = await authApi.get(
        );

/*     const resp = await authApi.get(
        "https://rwapi.herokuapp.com/api/user/2225403176",
        { 'headers': { 

            'Authorization': 'Token 25d2feed31bafd1a7ab15f4bda9fe116ca4ef12a',
        } }

        ); */
    //console.log(authApi);
    //mutation
    return { ok: true, message: resp.data };
    } catch (e) {
    console.log(e);
    return { ok: false, message: e };
    }
};
