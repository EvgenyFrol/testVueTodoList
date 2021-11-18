<template lang="pug">
.modal
  TodoButton(:title="title"
             :isDisabled="false"
             @click.native="setIsOpenPopup(true)")
  .modal-bg(v-if="onOpenModal")
  transition(name="modal")
    TodoPopup(v-if="onOpenModal"
              :titlePopup="title"
              @closePopup="setIsOpenPopup(false)"
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
      onOpenModal: false
    }
  },
  props: {
    title: String,
    isOpen: Boolean
  },
  watch: {
    isOpen (val) {
      this.onOpenModal = val
    }
  },

  methods: {
    setIsOpenPopup (val) {
      this.$emit('onOpenPopup', val)
      this.onOpenModal = val
    }
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

.modal-enter,
.modal-enter-active {
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.modal-enter-to {
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.modal-leave {
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.modal-leave-to {
  transition: transform 0.3s ease;
  transform: translateX(100%);
}

</style>
