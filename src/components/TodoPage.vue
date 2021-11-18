<template lang="pug">
  section.item
    .item__wrapper
      h1.item__title {{todoData.title}}
      .item__points
        ol
          li(v-for="(item, i) in todoData.article" :key="i") {{item}}
        router-link.item__closeButton(:to="{name: 'todoList'}") Назад к списку
      TodoModal(:title="'Изменить задачу'")
        TodoForm(@isOpen="isClosePopup"
                  :isEdit="true"
                  :data="todoData"
                  )
</template>

<script>
import TodoForm from './TodoForm'
import TodoModal from './UI/TodoModal'

export default {
  name: 'TodoSelect',
  components: { TodoModal, TodoForm },
  data () {
    return {
      isOpenPopup: false
    }
  },
  props: {
    item: Object
  },
  methods: {
    openPopup () {
      this.isOpenPopup = !this.isOpenPopup
    },
    isClosePopup (value) {
      this.isOpenPopup = !value
    }
  },
  computed: {
    todoData () {
      return this.$store.getters.getTodoList.find(el => el.id === +this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 50%;
  border: 5px solid #000;
  border-radius: 20px;
  margin: 0 auto;

  &__wrapper {
    padding: 50px 70px;
    height: 60%;
  }

  &__points {
    margin: 0px 0px 25px 0
  }

  &__title {
    font: 700 28px/36px 'Josefin Sans', sans-serif;
    text-align: center;
    margin: 0 0 20px 0;
  }

  &__article {
    font: 300 20px/28px 'Josefin Sans', sans-serif;
    margin: 0 0 10px 0;
  }

  &__closeButton {
    margin-bottom: 30pх;
    font: 300 15px/20px 'Josefin Sans', sans-serif;
  }
}
</style>
