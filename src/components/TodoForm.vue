<template lang="pug">
.todoForm
  form(:validates="$v.todo.title", @submit.prevent="submit")
    .todoFormAdds__inputs
      TodoInput(type='text' v-model="todo.title" :v="$v.todo.title" :error="!$v.todo.title.required" :name="'title'" placeholder="Название задачи")
      .error(v-if="!$v.todo.title.required") Поле не должно быть пустым!
      TodoInput(type='text' v-model.trim='todo.article1' placeholder="Пункт №1")
      TodoInput(type='text' v-model.trim='todo.article2' placeholder="Пункт №2")
      TodoInput(type='text' v-model.trim='todo.article3' placeholder="Пункт №3")
      TodoInput(type='text' v-model.trim='todo.article4' placeholder="Пункт №4")
      TodoInput(type='text' v-model.trim='todo.article5' placeholder="Пункт №5")
      .todoForm__buttons
        TodoButton(v-if="!isEdit"
                    :title="'Добавить'"
                   @click.native="addTodos"
                   :isDisabled="!$v.todo.title.required")
        TodoButton(v-if="isEdit"
                    :title="'Изменить'"
                   @click.native="editTodos"
                   :isDisabled="!$v.todo.title.required")
</template>

<script>
import TodoInput from './UI/TodoInput'
import TodoButton from './UI/TodoButton'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'TodoForm',
  components: {
    TodoInput,
    TodoButton
  },
  props: {
    isOpen: Boolean,
    taskId: Number,
    task: Object,
    isEdit: Boolean,
    data: Object
  },
  data () {
    return {
      itemData: this.data,
      isEditing: this.isEdit,
      isOpenForm: this.isOpen,
      todo: {
        id: '',
        title: '',
        article1: '',
        article2: '',
        article3: '',
        article4: '',
        article5: '',
        isDeleted: false,
        color: ''
      },
      submitStatus: null
    }
  },
  methods: {
    addTodos () {
      this.todo.id = this.$store.state.todos.length

      const arrTodo = [this.todo.article1, this.todo.article2, this.todo.article3, this.todo.article4, this.todo.article5]
      const articles = arrTodo.filter(el => el.length !== 0)

      this.$store.commit('ADD_TODOS', {
        id: this.todo.id,
        title: this.todo.title,
        article: articles,
        background: '#ffffff',
        status: 'Ожидает выполнения',
        isDeleted: false
      })

      this.isOpenForm = !this.isOpenForm
      this.$emit('isOpenPopup', this.isOpenForm)
    },
    editTodos () {
      const arrTodo = [this.todo.article1, this.todo.article2, this.todo.article3, this.todo.article4, this.todo.article5]
      const articles = arrTodo.filter(el => el !== undefined)

      this.$store.commit('EDITED_TODOS', {
        id: this.todo.id,
        title: this.todo.title,
        article: articles,
        background: '#ffffff',
        status: 'Ожидает выполнения',
        isDeleted: false
      })
    },
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  validations: {
    todo: {
      title: {
        required,
        minLength: minLength(1)
      }
    }
  },
  mounted () {
    if (this.isEditing) {
      this.todo.id = this.itemData.id
      this.todo.title = this.itemData.title
      this.todo.article1 = this.itemData.article[0]
      this.todo.article2 = this.itemData.article[1]
      this.todo.article3 = this.itemData.article[2]
      this.todo.article4 = this.itemData.article[3]
      this.todo.article5 = this.itemData.article[4]
    }
  }
}
</script>

<style lang="scss" scoped>
.todoForm {

  &__form {
  opacity: 0;
  height: 0;
  width: 100%;
  visibility: hidden;
  position: relative;
  transition: all 0.3s ease;
  }

  &__buttons {
    margin-top: 60px;
    display: flex;
    justify-content: space-evenly;
  }

  .error {
    color: red;
  }
}
</style>
