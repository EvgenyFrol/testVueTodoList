<template lang="pug">
.modal
  TodoButton(:title="title"
             :isDisabled="false"
             @click.native="isShowModal = !isShowModal")
  .modal-bg(v-if="isShowModal")
  transition(name="modal")
    TodoPopup(v-if="isShowModal"
              :titlePopup="title"
              @closePopup="isShowModal = !isShowModal"
              key="modal")
      slot
</template>

<script>
import TodoButton from './TodoButton'
import TodoPopup from './TodoPopup'

export default {
  name: 'TodoModal',
  components: { TodoButton, TodoPopup },
  data () {
    return {
      isShowModal: this.isOpen
    }
  },
  props: {
    title: String,
    isOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  background: rgba(66, 66, 66, 0.5);
}
.modal-enter {
  transition: transform 0.3s ease;
  transform: translateX(100%);
  opacity: 1;
}

.modal-enter-active {
  opacity: 1;
}

.modal-enter-to {
  opacity: 1;
  transform: none;
}

.modal-leave {
  opacity: 1;
}

.modal-leave-to {
  opacity: 0;
}

</style>
