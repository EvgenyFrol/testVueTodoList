<template lang="pug">
  header.header
    .header__wrapper
      .header__logo
        router-link(:to="{name: 'main'}")
          img(src="../assets/logo.png" alt="logo")
      .header__search
        TodoInput(type='text' v-model.trim='searchValue' placeholder="Поиск")
      .header__link
        router-link(:to="{name: 'todoList', params: {value: searchValue}}") List
</template>

<script>
import TodoInput from './UI/TodoInput.vue'

export default {
  name: 'TodoWrap',
  components: {
    TodoInput
  },
  data: () => {
    return {
      searchValue: '',
      pathName: ''
    }
  },
  watch: {
    searchValue (val) {
      this.$store.commit('CHANGE_SEARCH_VALUE', val)
    }
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  background: rgb(201, 201, 201);
  padding: 12px 0;
  margin: 0;

  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__logo {
    width: 60px;
  }

  &__link {
    font: 700 18px/24px Ubuntu, sans-serif;

    a {
      text-decoration: none;
    }
  }
}
</style>
