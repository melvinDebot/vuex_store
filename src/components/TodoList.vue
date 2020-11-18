<template>
  <div>
    <h1>TodoList</h1>
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name : 'TodoList',
  components : {
    TodoItem
  }
}
</script>

