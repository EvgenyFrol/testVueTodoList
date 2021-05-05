<template lang="pug">
  transition(name="todoItem")
    .todoItems__item(:style="{backgroundColor: background}")
      .todoItems__itemStatus
        TodoSelect(:task="item"
          :statusList="status"
          :background="background"
          :item="item"
          @changeBackground="changeBackground"
          @changeStatus="changeStatus")
      .todoItems__itemTitle
        span(class="todoItems__itemLink" @click="shareData") {{title}}
      .todoItems__itemTitleDel(v-if="!item.isDeleted")
        span.todoItems__itemTitleDelButton(@click="removeTodos(item)")
      .todoItems__itemTitleRestore(v-if="item.isDeleted")
        span.todoItems__itemTitleRestoreButton(@click="restoreTodos(item)")
</template>

<script>
import TodoSelect from './UI/Select'
import TodoPage from './TodoPage'
import TodoPopup from './UI/TodoPopup'

export default {
  name: 'TodoItem',
  props: {
    title: String,
    status: Array,
    background: String,
    article: Array,
    id: Number,
    isDeleted: Boolean,
    item: Object
  },
  data () {
    return {
      backColor: this.background,
      itemStatus: this.status
    }
  },
  components: { TodoSelect, TodoPage, TodoPopup },

  methods: {
    removeTodos (item) {
      this.$store.commit('REMOVE_TODOS', item)
    },
    shareData () {
      this.$router.push({ name: 'todoPage', params: { id: this.id, item: { id: this.id, title: this.title, article: this.article } } })
    },
    changeBackground (value, id) {
      this.$emit('changeBackground', { background: value, id: this.id })
    },
    changeStatus (value, id) {
      this.$store.commit('CHANGE_STATUS', { status: value, id: this.id })
    },
    restoreTodos (item) {
      this.$store.commit('RESTORE_TODOS', item)
    }
  }
}
</script>

<style lang="scss">
.todoItems {
   &__item {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 10px auto;
    border: 5px solid #000;
    border-radius: 20px;
    padding: 20px 40px;
    transition: background-color 0.3s ease;
  }

  &__itemStatus {
    display: inline;
  }

  &__itemEdit {
    margin-right: 50px;
  }

  &__buttons {
    display: inline;
    float: right;
    position: relative;
  }

  &__itemTitleDel {
    position: relative;

    &:hover {
      cursor: pointer,
    }
  }

  &__itemTitleDelButton {
    position: absolute;
    top: -10px;
    right: 0;

    &::after,
    &::before {
      content: ' ';
      position: absolute;
      background-color:rgb(0, 0, 0);
      width: 4px;
      height: 24px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      transition: background-color 0.3s ease;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__itemTitleRestore {
    position: relative;

    &:hover {
      cursor: pointer,
    }
  }

  &__itemTitleRestoreButton {
    position: absolute;
    top: -20px;
    right: 10px;

    &::after {
      content: url('../assets/restore.png');
      position: absolute;
    }
  }

  &__itemTitle {
    display: inline;
    font: 300 16px/20px Ubuntu, sans-serif;
    margin-left: -40%;
  }

  &__itemLink {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }

  .todoItem-enter-active, .todoItem-leave-active {
    transition: opacity .5s;
  }
  .todoItem-enter, .todoItem-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
}
</style>
