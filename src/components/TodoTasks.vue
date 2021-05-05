<template lang="pug">
.todoTasks
  transition(name="todoItem")
    .todoTasks__isActive(v-if="isActive == 0")
      TodoItem(v-for="(item) in data"
            v-if="!item.isDeleted"
            :isActive="isActive"
            :key="item.id"
            :title="item.title"
            :article="item.article"
            :item="item"
            :background="item.isDeleted ? '#ff837e' : item.background"
            :status="status"
            :id="item.id"
            @changeBackground="changeBackground"
            )
    .todoTasks__isDeleted(v-if="isActive == 1")
      TodoItem(v-for="(item) in data"
            v-if="item.isDeleted"
            :isActive="isActive"
            :key="item.id"
            :title="item.title"
            :article="item.article"
            :item="item"
            :background="item.isDeleted ? '#ff837e' : item.background"
            :status="status"
            :id="item.id"
            @changeBackground="changeBackground"
            )
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoTasks',
  components: {
    TodoItem
  },
  data () {
    return {
      data: this.$store.getters.getTodoList,
      status: this.$store.getters.getStatus,
      background: ''
    }
  },
  props: {
    isActive: Number
  },
  methods: {
    openPopup () {
      this.isOpenPopup = !this.isOpenPopup
    },
    changeBackground (value) {
      this.background = value.background

      this.$store.commit('CHANGE_BACKGROUND', value)
    }
  },
  mounted () {
    this.background = '#ffffff'
  }
}
</script>

<style lang="scss" scoped>
  .todoItem-enter-active, .todoItem-leave-active {
    transition: opacity .2s;
  }
  .todoItem-enter, .todoItem-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
