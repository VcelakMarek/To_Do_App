import Button from "components/Button"
import ListItem from "components/ListItem"
import { getTodoLists } from "api/todoListAPI"

const TodoApp = async () => {
  const response = await getTodoLists()

  if (!response?.data) return <div>No data</div>

  const todoLists = response.data

  return (
    <div className="h-screen bg-light-bg">
      <div className="flex w-screen bg-light-bg">
        <main className="flex w-screen flex-col">
          <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
            <div>
              <h1>Todo Lists</h1>
              <h2>There are {todoLists.length} to-do Lists</h2>
            </div>
            <div className="flex gap-10">
              <Button color="purple" link="/newList">
                New Todo List
              </Button>
            </div>
          </header>
          <div className="mt-16 flex flex-col items-center justify-center">
            {Array.isArray(response.data) && todoLists.length > 0 ? (
              todoLists.map((todolist) => (
                <ListItem listData={todolist} key={todolist.id} />
              ))
            ) : (
              <p>List is empty</p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default TodoApp
