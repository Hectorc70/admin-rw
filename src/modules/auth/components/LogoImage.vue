<template>
  <div class="content">
    <div class="container-title">
      <Title1 titleText="PANEL DE ADMINISTRACIÓN" />
    </div>
    <div clas="container-img">
      <img src="@/assets/logo_rw.png" alt="" />
    </div>
  </div>
</template>
<script>
import Title1 from "@/components/Title1.vue";
export default {
  props: {
  },
  components: {
    Title1,
  },
  created() {},
  name: "LogoImage",
  setup() {},
};
</script>

<style  scoped>
.content {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
}
.container-title{
  background-color: var(--color-secondary);
  width: 400px;
  padding: 10px;
  border-radius: .5em;
  margin-top: 100px;
  margin-bottom: 100px;
}
.container-img {
  display: block;
  width: 350px;
  height: 350px;
}

img {
  display: block;
  width: 350px;
  height: 350px;
  object-fit: cover;
}
</style>