<template lang="pug">
.todoInput(:class="{'todoInput--invalid': error }")
  label.todoInput__label
    input.todoInput__input(
      :placeholder="placeholder"
      v-bind="$attrs",
      :type="type",
      v-model="computedValue",
    )

</template>

<script>
export default {
  name: 'TodoInput',
  inheritAttrs: false,
  data: () => {
    return {
      result: []
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    v: {
      type: Object
    },
    error: {
      type: Boolean
    },
    name: {
      type: String
    }
  },
  computed: {
    computedValue: {
      set (val) {
        if (this.v) this.v.$touch()
        this.localValue = val
        this.$emit('input', val)
      },
      get () {
        return this.value || this.localValue
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/src/style/style.scss';

.todoInput {
  width: 100%;
  position: relative;
  display: block;
  min-height: 54px;
  border: 3px solid #000000;
  border-radius: 20px;
  transition: border-bottom-color, 0.2s;
  cursor: text;
  padding: 15px;
  margin: 10px;
  background-color: #fff;

  &--invalid {
    border-color: #8f1f1f;
  }

  &__input {
    font-size: 18px;
    min-height: 20px;
    border: 0;
    width: 100%;
    padding: 0;
    line-height: 25px;
    background: #fff;
    display: block;

    &:placeholder {
      opacity: 0.3;
      font: 600 16px/18px 'Ubuntu', sans-serif;
      position: absolute;
      margin-bottom: 3px;
      top: 33%;
    }
  }

   &__textInput {
    font-size: 18px;
    min-height: 80px;
    margin-bottom: 3px;
    border: 0;
    width: 100%;
    padding: 0;
    line-height: 25px;
    background: #fff;
    display: block;
  }

  &--shrink &__placeholder {
    opacity: 0;
  }

  &__clear {
    height: 15px;
    width: 15px;
    position: absolute;
    right: 0;
    bottom: 14px;
    opacity: 1;
    transition: opacity 0.2s;
    stroke: #ff2323;

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
}

</style>
