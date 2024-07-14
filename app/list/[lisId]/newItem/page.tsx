import TodoForm from "components/TodoForm"

type Props = {
  params: { lisId: string }
}

const Editor = async ({ params }: Props) => {
  return <TodoForm listId={params.lisId} />
}

export default Editor
