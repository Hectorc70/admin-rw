<template>
  <div class="container">
    <Title-1 TitleText="Login" />
    <FieldForm textLabel="Usuario" textInt="Escribe tu Usuario" />
    <FieldForm textLabel="Usuario" textInt="Escribe tu Usuario" />
  </div>
</template>

<script>
import FieldForm from "@/components/FieldForm.vue";
import Title1 from "./Title1.vue";

export default {
  components: {
    FieldForm,
    Title1,
  },
  setup() {},
};
</script>

<style scoped>
.container {
display: block;
width: 400px;
height: 400px;
padding: 25px;
background-color: var(--color-card);
border-radius: 0.9em;
box-shadow: 0px 0px 20px 10px var(--color-sombra-cards);
}
</style>