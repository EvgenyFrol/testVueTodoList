<template lang="pug">
  header.header
    .header__wrapper
      .header__logo
        router-link(:to="{name: 'main'}")
          img(src="../assets/logo.png" alt="logo")
      .header__search
        input(type='search')
      .header__link
        router-link(:to="{name: 'todoList'}") List
</template>

<script>
export default {
  name: 'TodoWrap'
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
}
</style>
