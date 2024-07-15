import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT, DELETE } from "connectors/fetch"
import type { TodoItem } from "types/todoType"

export const getItems = async (
  id: string,
): Promise<AxiosResponse<TodoItem[]> | null> => {
  try {
    return await GET<TodoItem[]>(`todoLists/${id}/todoItems`)
  } catch (e) {
    return handleError(e)
  }
}

export const getItem = async (
  id: string,
): Promise<AxiosResponse<TodoItem> | null> => {
  try {
    return await GET<TodoItem>(`todoItems/${id}`)
  } catch (e) {
    return handleError(e)
  }
}

export const updateItem = async (
  id: string,
  data: Partial<TodoItem>,
): Promise<AxiosResponse<TodoItem> | null> => {
  console.log(data)
  try {
    return await PUT(`todoItems/${id}`, data)
  } catch (e) {
    return handleError(e)
  }
}

export const addItem: (
  data: TodoItem,
) => Promise<AxiosResponse<TodoItem> | null> = async (data: TodoItem) => {
  try {
    return await POST("todoItems", data)
  } catch (e) {
    return handleError(e)
  }
}

export const deleteItem = async (
  listId: string,
  todoId: string,
): Promise<AxiosResponse<TodoItem> | null> => {
  try {
    return await DELETE(`todoLists/${listId}/todoItems/${todoId}`)
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
