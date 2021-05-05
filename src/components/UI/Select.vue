<template lang="pug">
  .select
    input.select__input(type='select' :value='value')
    .select__head(@click="openBody=!openBody") {{!task.isDeleted ? value : 'Удалено'}}
    .select__body(v-if="!task.isDeleted" :class="openBody ? 'select__body--active':''")
      .select__bodyItem(v-for="(item) in statusList")
        .select__bodyItemText(@click="changeValue(item, $event)" ref="statusItem") {{item.status}}
</template>

<script>
export default {
  name: 'TodoSelect',
  data () {
    return {
      value: '',
      openBody: false
    }
  },
  props: {
    background: String,
    statusList: Array,
    item: Object,
    isDeleted: Boolean,
    task: Object
  },
  methods: {
    changeValue (i, e) {
      this.value = e.target.innerHTML
      this.openBody = !this.openBody
      this.background = i.background

      this.$emit('changeBackground', this.background)
      this.$emit('changeStatus', this.value)
    }
  },
  mounted () {
    this.value = 'Ожидает выполнения'
  },
  updated () {
    this.value = this.item.status
  }
}
</script>

<style lang="scss">
.select {
  display: inline;
  position: relative;

  &__input {
    display: none;
  }

  &__head {
    width: 170px;
    height: 30px;
    padding: 5px;
    background: transparent;
    border: 2px solid #000;
    border-radius: 10px;
    text-align: center;
  }

  &__body {
    width: 170px;
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    opacity: 0;
    height: 0;
    border: 2px solid #000;
    border-radius: 10px;
    z-index: 1;

    &--active {
      opacity: 1;
      visibility: visible;
      height: auto;
      background: #fff;
    }
  }

  &__bodyItem {
    display: block;
    padding: 5px;
  }
}
</style>
