import VueRouter from 'vue-router'
import TodoList from '../components/TodoList.vue'
import TodoPage from '../components/TodoPage.vue'
import TodoMain from '../components/TodoMain.vue'
import TodoPopup from '../components/UI/TodoPopup.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: TodoMain },
    { path: '/list', name: 'todoList', component: TodoList },
    { path: '/list/:id', name: 'todoPage', component: TodoPage },
    { path: '/list/:id/edit', name: 'todoPopup', component: TodoPopup }
  ]
})
