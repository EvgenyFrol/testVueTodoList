<template lang="pug">
  .todoItems
    .todoItems__wrap
      .todoItems__buttonAdds
        TodoModal(:title="'Добавить задачу'"
                  :isOpen="isOpenPopup"
                  @onOpenPopup="isOpen")
          TodoForm(@closeForm="isOpen"
                  :isOpen="isOpenPopup"
                  :isEdit="false"
                  )
    transition(name="todos")
      .todoItems__todos
        .todoItems__sections
          span.todoItems__sectionsLinks(v-for="(item, i) in sections"
                                        :index="i"
                                        ref="taskGroup"
                                        @click="filteredItems(i, $event)") {{item.title}}
        .todoItems__sectionLine(:style="{width: lineWidth + 'px', marginLeft: marginLeft + 'px'}")
        TodoTasks(:isActive="isActive")
</template>

<script>
import TodoItem from './TodoItem'
import TodoTasks from './TodoTasks'
import TodoForm from './TodoForm'
import TodoModal from './UI/TodoModal'

export default {
  name: 'List',
  components: {
    TodoItem,
    TodoTasks,
    TodoForm,
    TodoModal
  },
  data () {
    return {
      activeElements: this.$store.getters.getActiveItems,
      deletedElements: this.$store.getters.getDeletedItems,
      isOpenPopup: false,
      sections: [
        {
          id: 1,
          title: 'Активные',
          isDeleted: false
        },
        {
          id: 2,
          title: 'Удалённые',
          isDeleted: true
        }],
      lineWidth: 0,
      marginLeft: 0,
      isActive: 0,
      taskId: 0
    }
  },
  methods: {
    isOpen (value) {
      this.isOpenPopup = value
    },
    filteredItems (i, e) {
      this.lineWidth = e.target.offsetWidth
      this.marginLeft = e.target.offsetLeft
      this.isActive = i
    }
  },
  mounted () {
    this.background = '#ffffff'
    this.lineWidth = this.$refs.taskGroup[0].offsetWidth
    this.marginLeft = this.$refs.taskGroup[0].offsetLeft
    this.isActive = 0
  }
}
</script>

<style lang="scss">
.todoItems {
  display: flex;
  flex-direction: column;

  &__buttonAdds {
    width: 100%;
    padding: 20px 5%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__sections {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__sectionsLinks {
    font: 600 16px/18px Ubuntu, sans-serif;
    padding: 5px 10px;
    background: #fff;
    transition: all 0.3s ease;

    &:hover {
      background: rgb(236, 234, 234);
      cursor: pointer;
    }
  }

  &__sectionLine {
    height: 2px;
    background: #000;
    transition: all 0.3s ease;
  }

  &__wrapItems {
      visibility: visible;
      opacity: 1;
      height: auto;

    &--hidden {
      visibility: hidden;
      opacity: 0;
      height: 0;
    }
  }

  &__silence {
    display: flex;
    justify-content: center;
    font: 300 16px/20px Ubuntu, sans-serif;
    margin: 40px auto;
  }
}

</style>
