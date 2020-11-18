<template>
  <div>
    <input 
      type="text" 
      :v-model="newTodo"
      :value="newTodo"
      @change="get"
      placeholder="I need to..."
    />
    <button @click="add">add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name : 'TodoInput',

  methods : {
    get(e){
      this.$store.dispatch('getTodo', e.target.value)
    },
    add(){
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    }
  },
  computed : {
    newTodo(){
      return this.$store.getters.newTodo
    }
  },
  mounted(){

  }
}
</script>

