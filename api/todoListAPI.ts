import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT, DELETE } from "connectors/fetch"
import type { TodoList } from "types/todoType"

const URL = "todoLists"

export const getTodoLists = async (): Promise<AxiosResponse<
  TodoList[]
> | null> => {
  try {
    return await GET<TodoList[]>(URL)
  } catch (e) {
    return handleError(e)
  }
}

export const addList = async (
  data: TodoList,
): Promise<AxiosResponse<TodoList> | null> => {
  try {
    return await POST("todoLists", data)
  } catch (e) {
    return handleError(e)
  }
}

export const deleteList = async (
  listId: string,
): Promise<AxiosResponse<TodoList> | null> => {
  try {
    return await DELETE(`todoLists/${listId}`)
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
