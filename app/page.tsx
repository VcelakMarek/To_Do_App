"use client"
import { useState, useEffect } from "react"
import Button from "components/Button"
import ListItem from "components/ListItem"
import { getTodoLists } from "api/todoListAPI"
import type { TodoList } from "types/todoType"

const TodoApp = () => {
  const [todoLists, setTodoList] = useState<TodoList[] | null>(null)

  useEffect(() => {
    const fetch = async () => {
      const response = await getTodoLists()
      if (response?.data) {
        setTodoList(response.data)
        console.log(response.data)
      }
    }
    fetch()
  }, [])

  return (
    <div className="h-screen bg-light-bg">
      <div className="flex w-screen bg-light-bg">
        <main className="flex w-screen flex-col">
          <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
            <div>
              <h1>Todo Lists</h1>
              <h2>There are {todoLists?.length} to-do Lists</h2>
            </div>
            <div className="flex gap-10">
              <Button color="purple" addNew>
                New Todo List
              </Button>
            </div>
          </header>
          <div className="mt-16 grid place-items-center">
            {todoLists?.map((todolist) => (
              <ListItem listData={todolist} key={todolist.id} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default TodoApp
