"use client"
import { useState } from "react"
import Link from "next/link"
import { updateItem } from "api/todoItemAPI"
import type { TodoItem } from "types/todoType"

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

  return (
    <Link
      href={`/list/${itemData.todoListId}/edit/${itemData.id}`}
      className="mb-4 flex h-[72px] w-[65%] items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA]"
    >
      <div className="mb-4 flex h-[72px] w-[65%] items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA]">
        <h3 className="basis-2/12">
          <span className="font-bold text-grey"></span>
          {itemData.completed}
        </h3>
        <input
          id={itemData.id}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <h2 className="basis-2/12">Due {itemData.dueDate}</h2>
        <h2 className="basis-2/12">{itemData.title}</h2>
        <h4 className="basis-2/12">{itemData.priority}</h4>
        <div className="flex basis-2/12 items-center gap-5"></div>
      </div>
    </Link>
  )
}

export default TodoItem
