import React from "react"
import Link from "next/link"
import { TodoList } from "types/todoType"

type Props = {
  listData: TodoList
}

const ListItem = ({ listData }: Props) => {
  console.log(listData.name)
  return (
    <Link
      href={{
        pathname: `/todoList`,
        query: { todoList: listData.name },
      }}
      className="mb-4 flex h-[72px] w-[65%] items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA]"
    >
      <h3>{listData.name}</h3>
    </Link>
  )
}

export default ListItem
