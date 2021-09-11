<template>
  <LoginView />
</template>
<script>
  import LoginView from '@/modules/auth/views/LoginView.vue'
export default {
  components:{
    LoginView
  },
  setup() {},
};
</script>

<style >

  @font-face{
      font-family: "Poppins";
      src: url("fonts/Poppins/Poppins-Regular.ttf");
  }

  @font-face{
      font-family: "Poppins-Bold";
      src: url("fonts/Poppins/Poppins-Bold.ttf");
  }

  :root{
    --color-primary:#4B82FF;
    --color-secondary:#F1F5FF;
    --color-resalte:#D7C45F;
    --color-sombra-cards: #DBE6FF;
    --color-card:#FFFFFF;
    --color-texto: #79A2FF;

    --font-primary:"Poppins-Bold";
    --font-secondary:"Poppins";

  }

  *{
  padding: 0px;
  margin: 0px;
  }
  html, body{
    min-height:100vh;
  }
  
  input:focus{
    outline: none;
    outline-width: 0;
    
}

</style>