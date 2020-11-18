import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

Vue.use(Vuex)

let store =  new Vuex.Store({
  // DATA
  state : {
    currentValue : 0,
    text : 'Melvin',
    todos : [],
    newTodo : ''
  },
  actions : {
    // MOUNTED EMITS FUNCTIONS
    getTodo({commit}, todo){
      commit('GET_TODO', todo)
    },
    addTodo({commit}){
      commit('ADD_TODO')
    },
    editTodo({commit}, todo){
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
  },
  mutations : {
    // METHODS
    INCREMENT_COUNT(state){
      state.currentValue += 1;
    },
    DECREMENT_COUNT(state){
      state.currentValue -= 1
    },
    GET_TODO(state, todo){
      state.newTodo = todo
    },
    ADD_TODO(state){
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },
    EDIT_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state){
      state.newTodo = ''
    }
  },
  getters: {
    // COMPUTED
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
    completedTodos: state => state.todos.filter((todo) => {return todo.completed})
  }
})

global.store = store

export default store