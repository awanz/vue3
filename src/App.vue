<template>
  <div id="v-model-multiple-checkboxes">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>
  <br><br>
  <div id="v-model-checkbox" class="demo">
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>
  <br><br>
  <div id="v-model-radiobutton">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
  <br><br>
  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  <br><br>
  <select v-model="selected2" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br />
  <span>Selected: {{ selected2 }}</span>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      checkedNames: [],
      checked: false,
      picked: '',
      selected: '',
      selected2: ''
    }
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
