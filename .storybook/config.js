import { configure } from '@storybook/vue'

function loadStories() {
  require('../src/stories/TodoModal.js')
}

configure(loadStories, module)