import TodoModal from '../components/UI/TodoModal.vue'

export default {
  component: TodoModal,
  title: 'Components/Button'
}

const Template = (args, { argTypes }) => ({
  components: { TodoModal },
  props: Object.keys(argTypes),
  template: '<TodoModal :title="title" />'
})

export const Primary = Template.bind({})
Primary.args = { title: 'Добавить задачу' }
