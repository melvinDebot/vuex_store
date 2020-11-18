<template>
  <div class="hello">
    <h2>{{ currentValue }}</h2>
    <h2>{{ this.$store.state.text }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  methods : {
    increment(){
      this.$store.commit('INCREMENT_COUNT');
    },
    decrement(){
      this.$store.commit('DECREMENT_COUNT')
    }
  },
  computed : {
    currentValue(){
      return this.$store.state.currentValue
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
