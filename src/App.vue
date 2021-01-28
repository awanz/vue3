<template>
  <div id="app">
    <fa-icon :icon="['fas', 'spinner']" size="4x" :spin="spin" />
    
    <fa-layer class="fa-4x">
      <fa-icon :icon="['fas', 'circle']" style="color: Tomato"/>
      <fa-icon :icon="['fas', 'times']" transform="shrink-8" inverse />
    </fa-layer>
    
    <fa-layer class="fa-4x">
      <fa-icon :icon="['fas', 'tag']" style="color: forestgreen"/>
      <fa-layer-text value="NEW" transform="shrink-13 rotate-45" style="color: white" />
    </fa-layer>

    <fa-icon :icon="['fas', 'grin-hearts']" size="4x" :mask="['fas', 'coffee']" transform="shrink-8 up-2 left-1" />
  </div>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      spin: true
    }
  },

}
</script>