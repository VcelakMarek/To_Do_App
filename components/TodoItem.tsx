"use client"
import { useState } from "react"
import { updateItem, deleteItem } from "api/todoItemAPI"
import type { TodoItem } from "types/todoType"
import Button from "./Button"
import Priority from "./Priority"

type Props = {
  itemData: TodoItem
}

const TodoItem = ({ itemData }: Props) => {
  const [isChecked, setIsChecked] = useState(itemData.completed)

  const handleChange = async () => {
    const updatedIsChecked = !isChecked
    setIsChecked(updatedIsChecked)
    await updateItem(itemData.id, {
      completed: updatedIsChecked,
    })
  }

  const handleDelete = async () => {
    await deleteItem(itemData.id)
  }

  return (
    <div className="mb-4 flex h-[72px] w-[65%] items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px]">
      <input
        id={itemData.id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <h4 className="basis-2/12">{itemData.title}</h4>
      <h2 className="basis-2/12">Due {itemData.dueDate}</h2>
      <Priority priority={itemData.priority} />
      <div className="flex basis-2/12 items-center gap-4">
        <Button
          color="grey"
          link={`/list/${itemData.todoListId}/edit/${itemData.id}`}
        >
          Edit
        </Button>
        <Button color="red" onClick={handleDelete}>
          {" "}
          Delete
        </Button>
      </div>
    </div>
  )
}

export default TodoItem
