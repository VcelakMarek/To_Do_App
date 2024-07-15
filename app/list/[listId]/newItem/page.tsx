import TodoForm from "components/TodoForm"

type Props = {
  params: { listId: string }
}

const NewItem = async ({ params }: Props) => {
  return <TodoForm listId={params.listId} />
}

export default NewItem
