import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT, DELETE } from "connectors/fetch"
import type { TodoItem } from "types/todoType"

const url = "todoItems"

export const getTodoItems: () => Promise<AxiosResponse<
  TodoItem[]
> | null> = async () => {
  try {
    return await GET<TodoItem[]>(url)
  } catch (e) {
    return handleError(e)
  }
}

const handleError = (error: unknown) => {
  if (!isAxiosError(error)) {
    return null
  }

  return error.response ? error.response : null
}
