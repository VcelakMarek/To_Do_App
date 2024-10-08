import TodoForm from "components/TodoForm"
import { getItem } from "api/todoItemAPI"

type Props = {
  params: { id: string }
}

const Editor = async ({ params }: Props) => {
  const response = await getItem(params.id)

  if (!response?.data) return <div>No data</div>

  const todoItem = response.data

  return <TodoForm formValues={todoItem} />
}

export default Editor
