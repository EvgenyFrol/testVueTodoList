<template lang="pug">
  span.todoButton(:class="isDisabled ? 'todoButton__isDisabled' : ''") {{title}}
</template>

<script>
export default {
  name: 'TodoButton',
  props: {
    title: String,
    isDisabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
.todoButton {
  border: 1px solid #000;
  padding: 12px 14px;
  color: #000;
  background: #fff;
  transition: all 0.3s ease;
  font: 700 16px/18px Ubuntu, sans-serif;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: #000;
  }

  &__isDisabled {
    pointer-events: none;
    background: rgb(179, 177, 177);
    color: rgb(255, 255, 255);
    border: none;
  }
}
</style>
