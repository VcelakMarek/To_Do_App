import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT, DELETE } from "connectors/fetch"
import type { TodoList } from "types/todoType"

const url = "todoLists"

export const getTodoLists: () => Promise<AxiosResponse<
  TodoList[]
> | null> = async () => {
  try {
    return await GET<TodoList[]>(url)
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
