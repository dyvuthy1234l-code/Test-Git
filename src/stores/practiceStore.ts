import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface PracticeTopic {
  id: number
  title: string
  completed: boolean
}

export const usePracticeStore = defineStore('practice', () => {
  const topics = ref<PracticeTopic[]>([
    { id: 1, title: 'Git clone & branch setup', completed: true },
    { id: 2, title: 'Git commit & push workflow', completed: false },
    { id: 3, title: 'Pull Request & Code Review', completed: false },
    { id: 4, title: 'Merge Conflict Resolution', completed: false },
  ])

  const toggleTopic = (id: number): void => {
    const topic = topics.value.find((t) => t.id === id)
    if (topic) {
      topic.completed = !topic.completed
    }
  }

  return {
    topics,
    toggleTopic,
  }
})
