import { AxiosResponse, isAxiosError } from "axios"
import { GET, POST, PUT, DELETE } from "connectors/fetch"
import type { TodoItem } from "types/todoType"

export const getItems: (
  id: string,
) => Promise<AxiosResponse<TodoItem[]> | null> = async (id) => {
  try {
    return await GET<TodoItem[]>(`todoLists/${id}/todoItems`)
  } catch (e) {
    return handleError(e)
  }
}

export const getItem: (
  id: string,
) => Promise<AxiosResponse<TodoItem[]> | null> = async (id) => {
  try {
    return await GET<TodoItem>(`todoItems/${id}`)
  } catch (e) {
    return handleError(e)
  }
}

export const updateItem: (
  id: string,
  data: Partial<TodoItem>,
) => Promise<AxiosResponse<TodoItem> | null> = async (
  id,
  data: Partial<TodoItem>,
) => {
  console.log(data)
  try {
    return await PUT(`todoItems/${id}`, data as TodoItem)
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

export const deleteItem: (
  id: string,
) => Promise<AxiosResponse<TodoItem> | null> = async (id: string) => {
  try {
    return await DELETE(`todoItems/${id}`)
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
