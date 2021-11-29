<template>
  <div class="home">
    <TopBar/>
    <MainLateral/>

    <div class="container-body">

    </div>
    <div class="container-cards">
      <CardOption/>
      <CardOption/>
      <CardOption/>
    </div>
    
    <div class="container-data">

    </div>
    
  </div>
</template>
<script>
import CardOption  from "@/components/CardModule.vue"
import MainLateral  from "@/components/MainLateral.vue"
import TopBar  from "@/components/TopBar.vue"

export default ({
  components: {
    CardOption,
    MainLateral,
    TopBar
  },
  setup() {
    
    
  },
})
</script>

<style scoped>

.home {
  display: block;
  margin: 60px 0px 0px 10%;
  width:  86%;
  height: calc(100vh - 120px);
  background-color: var(--color-secondary);
  border-radius: .9em;
  overflow:auto;
  padding: 20px;

}

.container-cards{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 80%vh;

}

.container-data{
  background-color: white;
  width: 100%;
  height: 75%;
  border-radius: .9em;
  margin: 30px auto;
}
</style>
