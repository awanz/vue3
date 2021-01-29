<template>
  
  <Button @click="test">
    <template #icon>
      <font-awesome-icon icon="user-secret" size="lg"/>
    </template>
    <span>
      {{ label }}
    </span>
  </Button>

  <Btn>
    <template #icon>
      <font-awesome-icon icon="user-secret" size="lg"/>
    </template>
    <template #label>
      Hai 
    </template>
  </Btn>
</template>

<script>
import Button from './components/Button.vue'
import Btn from './components/Btn.vue'

export default {
  name: 'App',
  data() {
    return {
      label: "Order Now"
    }
  },
  methods: {
    test(){
      console.log("hais");
    }
  },
  components: {
    Button,
    Btn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
