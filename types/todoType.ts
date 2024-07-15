export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export type TodoItem = {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: Priority
  todoListId: string
}

export type TodoList = {
  id: string
  name: string
  items: TodoItem[]
}
