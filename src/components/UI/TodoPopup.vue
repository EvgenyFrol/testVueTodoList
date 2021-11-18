<template lang="pug">
  section.todoPopup
    .todoPopup__wrapper
      h3.todoPopup__title {{titlePopup}}
      slot
    .todoPopup__close
      TodoButton(
        :title="'Отменить'"
        @click.native="closePopup"
        :isDisabled="false")
</template>

<script>
import TodoForm from '../TodoForm'
import TodoButton from './TodoButton'

export default {
  name: 'TodoPopup',
  components: {
    TodoForm,
    TodoButton
  },
  props: {
    isOpen: Boolean,
    titlePopup: String
  },
  methods: {
    closePopup () {
      this.$emit('closePopup', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.todoPopup {
  width: 35%;
  height: 100vh;
  position: fixed;
  top:0;
  right: 0;
  border: 5px solid #000;
  border-radius: 20px;
  background: #fff;
  z-index: 4;
  padding: 88px 100px;

  &__wrapper {
    padding: 0 0 17px 0;
    position: relative;
  }

  &__title {
    font: 700 28px/36px 'Josefin Sans', sans-serif;
    margin-bottom: 50px;
  }

  &__close {
    display: flex;
    justify-content: center;
  }

  &__button {
    height: 30px;
    width: 30px;
    padding: 0 0 0 5px;
    position: relative;

    &::after,
    &::before {
      content: ' ';
      position: absolute;
      background-color:rgb(161, 183, 196);
      width: 2px;
      height: 30px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      transition: background-color 0.3s ease;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
      cursor: pointer;

      &::after,
      &::before {
        background-color: rgba(0, 124, 196, 0.35);
      }
    }
  }
}
</style>
