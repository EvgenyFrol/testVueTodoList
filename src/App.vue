<template>
  <div id="app">
    <TodoWrap></TodoWrap>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoWrap from './components/TodoWrap.vue'

export default {
  components: { TodoWrap },
  name: 'App'
}
</script>

<style>
.section-enter {
  transform: translateY(100%);
  transition: opacity 0.3s ease;
  opacity: 1;
}

.section-enter-to {
  opacity: 1;
  transform: none;
 }

.section-leave {
  opacity: 1;
}

.section-leave-to {
  opacity: 0;
}
</style>
