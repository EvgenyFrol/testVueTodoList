/* eslint-disable no-unreachable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  state: {
    statusItems: [{
      id: '00',
      status: 'Ожидает выполнения',
      background: '#fffb00'
    },
    {
      id: '01',
      status: 'Выполняется',
      background: '#63b96a'
    },
    {
      id: '03',
      status: 'Выполнено',
      background: '#389aa7'
    }
    ],
    todos: [],
    searchValue: ''
  },
  mutations: {
    CHANGE_SEARCH_VALUE (state, payload) {
      state.searchValue = payload
    },
    ADD_TODOS (state, payload) {
      state.todos.push(payload)
    },
    EDITED_TODOS (state, payload) {
      state.todos.forEach(elem => {
        if (elem.id === payload.id) {
          const arr = state.todos.filter(el => el.id !== elem.id)
          state.todos = arr
          state.todos.push(payload)
        }
      })
    },
    REMOVE_TODOS (state, payload) {
      state.todos.forEach(elem => {
        if (elem.id === payload.id) elem.isDeleted = true
      })
    },
    RESTORE_TODOS (state, payload) {
      state.todos.forEach(elem => {
        if (elem.id === payload.id) elem.isDeleted = false
      })
    },
    CHANGE_BACKGROUND (state, payload) {
      state.todos.forEach(elem => {
        if (elem.id === payload.id) elem.background = payload.background
      })
    },
    CHANGE_STATUS (state, payload) {
      state.todos.forEach(elem => {
        if (elem.id === payload.id) elem.status = payload.status
      })
    }
  },
  actions: {},
  getters: {
    getTodoList (state) {
      return state.todos
    },
    getStatus (state) {
      return state.statusItems
    },
    getSearchValue (state) {
      return state.searchValue
    }
  }
})

export default store
