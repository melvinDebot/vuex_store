<template>
  <div class="about">
    <TodoInput/>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoInput from '@/components/TodoInput.vue'
export default {
  name : 'About',
  components : {
    TodoList,
    TodoInput
  }
}
</script>

