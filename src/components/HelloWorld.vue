<template>
  <div class="hello">
    <h2>{{ currentValue }}</h2>
    <h2>{{ this.$store.state.text }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h3 @click="change">{{ text }}</h3>
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
    },
    change(){
      this.$store.commit('CHANGE_TEXT')
    }
  },
  computed : {
    currentValue(){
      return this.$store.state.currentValue
    },
    text(){
      return this.$store.getters.text
    }
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
