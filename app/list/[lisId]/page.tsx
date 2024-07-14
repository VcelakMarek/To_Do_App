import Button from "components/Button"
import TodoItem from "components/TodoItem"
import { getItems } from "api/todoItemAPI"

type Props = {
  params: { lisId: string }
}

const TodoList = async ({ params }: Props) => {
  const response = await getItems(params.lisId)
  if (!response?.data) return <div>No data</div>
  const todoItems = response?.data

  return (
    <div className="h-screen bg-light-bg">
      <div className="flex w-screen bg-light-bg">
        <main className="flex w-screen flex-col">
          <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
            <div>
              <h1>To Do</h1>
              <h2>There are {todoItems?.length} to-do's</h2>
            </div>
            <div className="flex gap-10">
              <Button color="purple" link={`/list/${params.lisId}/newItem`}>
                New Todo
              </Button>
            </div>
          </header>
          <div className="mt-16 grid place-items-center">
            <div className="mb-2 flex w-[65%] items-start gap-24 pl-[85px]">
              <h4>Name</h4>
              <h4>Due Date</h4>
              <h4>Priority</h4>
            </div>
            {todoItems?.map((todoItem) => (
              <TodoItem itemData={todoItem} key={todoItem.id} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default TodoList
