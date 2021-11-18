<template lang="pug">
  section.main
    .main__tasks
      h2.main__taskLength Всего задач: {{taskLength}}
      h2.main__taskLength Задач в архиве: {{archiveTaskLength}}
      h2.main__taskLength Выполнено задач: {{doneTaskLength}}
      h2.main__taskLength Задач в работе: {{workedTaskLength}}
      h2.main__taskLength Задач в ожидании выполнения: {{waitTaskLength}}
</template>

<script>
export default {
  name: 'TodoWrap',
  data () {
    return {
      taskLength: this.$store.getters.getTodoList.length,
      archiveTaskLength: this.$store.getters.getTodoList.filter(el => el.isDeleted).length,
      doneTaskLength: this.$store.getters.getTodoList.filter(el => el.status === 'Выполнено').length,
      workedTaskLength: this.$store.getters.getTodoList.filter(el => el.status === 'Выполняется').length,
      waitTaskLength: this.$store.getters.getTodoList.filter(el => el.status === 'Ожидает выполнения').length
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
.main {
  margin: 0 auto;

  &__tasks {
    margin: 40px 0 0 0;
  }

  &__taskLength {
    font: 500 24px/48px Oswald, sans-serif;
    text-align: center;
  }
}
</style>
