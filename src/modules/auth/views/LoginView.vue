<template>
    <div class="login" id="container">
        <BackGround />
        <div id="container-logo">
            <img src="@/assets/logo_rw.png" alt="">
        </div>
    </div>
    <!-- <FormLogin /> -->
</template>
<script>
//import FormLogin from '@/modules/auth/components/FormLogin.vue'
import BackGround from '@/modules/auth/components/BackGround.vue'


export default {
    name:'login',
    Components:{
        
        BackGround
    },
    setup() {
        
    },
}
</script>

<style scoped>
    #container{
        display: block;
        max-width: 100%;
        max-height: 100%;
        background: blueviolet;
    }
</style>