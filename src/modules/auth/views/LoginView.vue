<template>
    <div class="login">
        <LogoImage />
        <FormLogin />
    </div>
</template>
<script>
//import BackGround from '../components/BackGround'
import LogoImage from '../components/LogoImage'
import FormLogin from '../components/FormLogin'


export default {
    name:'Login',
    components:{
        //BackGround,
        LogoImage,
        FormLogin
    },setup() {},
    
};
</script>
<style scoped>
    .login{
        display: flex;
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>