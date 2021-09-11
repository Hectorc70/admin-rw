<template>
  <div class="login">
    <div class="container-login">
      <FormLogin />
    </div>

    <div class="container-image">
      <LogoImage />
    </div>
  </div>
</template>
<script>
//import BackGround from '../components/BackGround'
import LogoImage from "../components/LogoImage";
import FormLogin from "../components/FormLogin";

export default {
  name: "Login",
  components: {
    //BackGround,
    LogoImage,
    FormLogin,
  },
  setup() {},
};
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
.container-login {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 70%;
  min-height: 100vh;
  background-color: var(--color-secondary);
  clip-path: polygon(60% 0, 76% 51%, 59% 100%, 0 100%, 0% 50%, 0 0);
}

.container-image {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  display: block;
  width: 50%;
  min-height: 100vh;
}
</style>
