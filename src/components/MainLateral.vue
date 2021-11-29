<template>
  <div id="container-main-l">
    <div id="container-logo">
      <a> <img src="@/assets/logo_rw.png" alt="Logo de RW Servicios"/></a>
    </div>
    <div id="container-options">
      <div class="c-option"></div>
      <a class="c-option" href="/home/">
        <div class="c-icon">
          <svg
            class="icon"
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m1 135v362c0 8.284 6.716 15 15 15h22.5v-77c0-8.284 6.716-15 15-15s15 6.716 15 15v77h37.5v-392h-90c-8.284 0-15 6.716-15 15zm52.5 45c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 60c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 60c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 60c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15z"
              />
              <path
                d="m496 120h-90v392h37.5v-77c0-8.284 6.716-15 15-15s15 6.716 15 15v77h22.5c8.284 0 15-6.716 15-15v-362c0-8.284-6.716-15-15-15zm-37.5 270c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z"
              />
              <path d="m211 450h30v62h-30z" />
              <path d="m271 450h30v62h-30z" />
              <path
                d="m361 0h-210c-8.284 0-15 6.716-15 15v497h45v-77c0-8.284 6.716-15 15-15h120c8.284 0 15 6.716 15 15v77h45v-497c0-8.284-6.716-15-15-15zm-165 390c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm60 300c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm60 300c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z"
              />
            </g>
          </svg>
        </div>
        <div class="c-text">
          <p class="text-title">Inicio</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  setup() {
    return;
  },
};
</script>
<style scoped>
/* MENU LATERAL */
#container-main-l {
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 10%;
}
#container-logo {
  margin-top: 20px;
  display: block;
  width: 80%;
}

#container-logo img {
  display: block;
  width: 100%;
}

#container-options {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 30px;
}
.c-option {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
}

.c-option:hover {
  background-color: var(--color-resalte);
}
.c-text {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
}
.c-text .text-title {
  font-family: var(--font-secondary);
  color: var(--color-card);
  font-size: 1.4rem;
}
.c-icon {
  display: block;
  width: 30%;
  height: 60%;
}
.c-icon .icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: white;
}
</style>
