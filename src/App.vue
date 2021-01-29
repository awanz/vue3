<template>
  <dir class="app">
    <p>Counter: {{ counter }}</p>
    <p>{{ name }}</p>
    <button v-on:click="awan">Generate</button>
    <p>{{message}}</p>
    <input v-model="message">
    
    <ol>
      <li v-for="nl in namelists" :key="nl.message">
        {{ nl }}
      </li>
    </ol>
    <p v-if="seen">Now you see me</p>
  </dir>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      counter: 3,
      name: '',
      message: '',
      seen: false,
      namelists: [
        { text: 'awan'},
        { text: 'bintang'},
        { text: 'bulan'}
      ]
    }
  },
  mounted() {
    setInterval(() => {
      if (this.counter % 2 == 0) {
        this.seen = true
      }else{
        this.seen = false
      }
      this.counter++
    }, 200)
  },
  methods: {
    awan(){
      this.name="awan"
    }
  },
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
