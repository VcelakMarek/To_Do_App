"use client"
import { FC } from "react"
import { Form } from "react-final-form"
import { FormApi } from "final-form"
import { useRouter } from "next/navigation"
import { addList } from "api/todoListAPI"
import FormInput from "components/FormInput"
import Button from "components/Button"
import type { TodoList } from "types/todoType"

type Props = {
  form?: FormApi<FormData>
}

const ListForm: FC<Props> = () => {
  const { push } = useRouter()

  const onSubmit = (values: TodoList) => {
    addList(values)
    push("/")
  }

  return (
    <div className="bg-white-background grid h-full w-screen place-items-center p-10">
      <h1>New List</h1>
      <Form
        id="newList"
        className="w-screen"
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
              <section className="mx-auto flex w-3/5 flex-col gap-1">
                <FormInput inputName="Name" id="name" size="large" />
                <div>
                  <Button submit color="purple">
                    Add List
                  </Button>
                </div>
              </section>
            </main>
          </form>
        )}
      />
    </div>
  )
}

export default ListForm
