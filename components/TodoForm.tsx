"use client"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { FormApi } from "final-form"
import { Form } from "react-final-form"
import FormInput from "components/FormInput"
import Button from "components/Button"
import { updateItem, addItem } from "api/todoItemAPI"
import type { TodoItem } from "types/todoType"

type Props = {
  form?: FormApi<FormData>
  formValues?: TodoItem
  listId?: string
}

const TodoForm: FC<Props> = ({ formValues, listId }) => {
  const router = useRouter()

  const onSubmit = async (values: TodoItem) => {
    const newItem: TodoItem = {
      ...values,
      description: values.description ?? "",
      completed: false,
      priority: values.priority ?? "Low",
      todoListId: listId ?? values.todoListId,
    }

    formValues
      ? await updateItem(formValues.id, values)
      : await addItem(newItem)
    router.back()
    setTimeout(() => {
      router.refresh()
    }, 200)
  }

  return (
    <div className="bg-white-background grid h-screen w-screen place-items-center pt-10">
      <h1>{formValues ? "Edit Item" : "New Item"}</h1>
      <Form
        id={formValues ? "editItem" : "newItem"}
        className="w-screen"
        onSubmit={onSubmit}
        initialValues={formValues ?? null}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
              <section className="mx-auto flex flex-col gap-1">
                <FormInput inputName="Name" id="title" />

                <FormInput inputName="Description" id="description" />

                <FormInput
                  id="priority"
                  inputName="Priority"
                  size="small"
                  inputType="select"
                  selectValues={["Low", "Medium", "High"]}
                />

                <div>
                  <Button submit color="purple">
                    {formValues ? "Save changes" : "Add Item"}
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

export default TodoForm
