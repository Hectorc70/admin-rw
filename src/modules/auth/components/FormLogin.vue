<template>
    <div class="container">
        <div class="form">
    <Title1 titleText="Login" />
    <Line />
    <FieldForm textLabel="Usuario" textInt="Escribe tu Usuario" />
    <FieldForm textLabel="Contraseña" textInt="Escribe tu Contraseña" />
    </div>
    
>
</div>

</template>

<script>
import FieldForm from "@/components/FieldForm.vue";
import Title1 from "@/components/Title1.vue";
import Line from "./LineSeparator.vue";

export default {
  components: {
    FieldForm,
    Title1,
    Line
  },
  setup() {},
};
</script>

<style scoped>
.container{
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

</style>