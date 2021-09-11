<template>
  <div class="content">
    <div class="container-title">
      <p>Panel</p>
    </div>
    <div clas="container-img">
      <img src="@/assets/logo_rw.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "LogoImage",
  setup() {},
};
</script>

<style  scoped>
.container-img {
  display: block;
  width: 100px;
  height: 100px;
  background: blue;
}

.container-img img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>