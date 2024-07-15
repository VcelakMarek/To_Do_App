import axios, { AxiosResponse } from "axios"
import type { TodoList, TodoItem } from "types/todoType"

const BASE_URL = "https://669116e026c2a69f6e8e6442.mockapi.io/"

export const GET = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "GET", baseURL: BASE_URL, url })
}

export const POST = async <T>(
  url: string,
  data: TodoList | TodoItem,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "POST", baseURL: BASE_URL, url, data })
}

export const PUT = async <T>(
  url: string,
  data: Partial<TodoList | TodoItem>,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "PUT", baseURL: BASE_URL, url, data })
}

export const DELETE = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "DELETE", baseURL: BASE_URL, url })
}
