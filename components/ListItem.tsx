"use client"
import React from "react"
import Link from "next/link"
import Button from "components/Button"
import { deleteList } from "api/todoListAPI"
import type { TodoList } from "types/todoType"
import revalidate from "utils/actions"

type Props = {
  listData: TodoList
}

const ListItem = ({ listData }: Props) => {
  const handleDelete = async () => {
    await deleteList(listData.id)

    revalidate()
  }

  return (
    <Link
      href={`/list/${listData.id}`}
      className="mb-4 flex h-[72px] w-[65%] items-center justify-between rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA] sm:w-11/12"
    >
      <h3>{listData.name}</h3>
      <Button
        color="red"
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          handleDelete()
        }}
      >
        Delete
      </Button>
    </Link>
  )
}

export default ListItem
