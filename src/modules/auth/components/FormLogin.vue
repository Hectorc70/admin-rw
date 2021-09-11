<template>
    <div id="container">
   <!--  <FieldForm textLabel="Usuario" textInt="Escribe tu Usuario" />
    <FieldForm textLabel="Usuario" textInt="Escribe tu Usuario" /> -->
    </div>
</template>

<script>
import FieldForm from '@/components/FieldForm.vue'


export default{
    components:{
        FieldForm
    },
    setup() {
        
    },
}
</script>

<style scoped>
    #container{
        display: block;
        display: 500px;
        height: 100px;
        background-color: black;
    }
</style>