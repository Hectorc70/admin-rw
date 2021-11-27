<template>
  <div class="container">
    <form @submit.prevent="onSubmit" class="form">
      <Title1 titleText="Login" />

      <Line />
      <div class="container-field">
        <label class="labe-field" for="password">Usuario</label>
        <input
          v-model="userForm.idUser"
          class="input-field"
          type="text"
          placeholder="Escribe tu usuario"
        />
      </div>
      <div class="container-field">
        <label class="labe-field" for="password">Password</label>
        <input
          type="password"
          v-model="userForm.password"
          class="input-field"
          placeholder="Escribe tu contraseña"
        />
      </div>
      <div class="container-button">
        <Button textButton="Login" functionButton="{}" />
      </div>
    </form>

    >
  </div>
</template>

<script>
import { ref } from "vue";
//import FieldForm from "@/components/FieldForm.vue";
import Title1 from "@/components/Title1.vue";
import Line from "./LineSeparator.vue";
import Button from "@/components/ButtonSubmit.vue";
import useLogin from '../composables/useLogin'

export default {


  components: {
    Title1,
    Line,
    Button,
  },
  setup() {
	const {login} = useLogin()
    const userForm = ref({
      idUser: "",
      password: "",
    })

    return {
      userForm,
      onSubmit: async () => {
        const {ok, message} = await login(userForm.value)
        console.log(ok, message)
      },
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
}
.form {
  display: block;
  width: 300px;
  height: 350px;
  padding: 25px;
  background-color: var(--color-card);
  border-radius: 0.9em;
  box-shadow: 0px 0px 20px 5px var(--color-sombra-cards);
}
.container-button {
  margin-top: 50px;
}

/* CAMPOS DE FORMULARIO */
.container-field {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}

.labe-field {
  color: var(--color-texto);
  font-size: 1rem;
  font-family: var(--font-secondary);
  margin-bottom: 5px;
}
.input-field {
  display: block;
  background-color: var(--color-secondary);
  width: 95%;
  height: 25px;
  padding: 2px;
  padding-left: 10px;
  border-radius: 0.5em;
  text-align: left;
  border: none;
  color: var(--color-primary);
  font-size: 1rem;
}

.input-field::placeholder {
  color: var(--color-texto);
  font-size: 0.8rem;
  font-family: "Poppins";
  font-weight: 100;
}
</style>
