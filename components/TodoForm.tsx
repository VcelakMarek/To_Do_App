"use client"
import { FC } from "react"
import { Form } from "react-final-form"
import { FormApi } from "final-form"
import { useRouter } from "next/navigation"
import { updateItem, addItem } from "api/todoItemAPI"
import FormInput from "components/FormInput"
import Button from "components/Button"
import type { TodoList, TodoItem } from "types/todoType"

type Props = {
  form?: FormApi<FormData>
  formValues?: TodoItem
  listId?: string
}

const TodoForm: FC<Props> = ({ formValues, listId }) => {
  const { push } = useRouter()

  const onSubmit = (values: TodoItem) => {
    const newItem: TodoItem = {
      ...values,
      completed: false,
      todoListId: listId,
    }

    formValues ? updateItem(formValues.id, values) : addItem(newItem)
    push(`/list/${formValues?.todoListId ?? listId}`)
  }

  if (formValues) {
    return (
      <>
        <div className="bg-white-background grid h-full w-screen place-items-center p-10">
          <h1>Edit Item</h1>
          <Form
            id="editItem"
            className="w-screen"
            onSubmit={onSubmit}
            initialValues={formValues ?? null}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
                  <section className="mx-auto flex w-3/5 flex-col gap-1">
                    <FormInput inputName="Name" id="title" />

                    <FormInput inputName="Description" id="description" />
                    <div className="mt-10 flex gap-10">
                      <FormInput
                        inputName="Due Date"
                        size="small"
                        inputType="date"
                        id="dueDate"
                      />

                      <FormInput
                        id="priority"
                        inputName="Priority"
                        size="small"
                        inputType="select"
                        selectValues={["Low", "Medium", "High"]}
                      />
                    </div>

                    <div>
                      <Button submit color="purple">
                        Save changes
                      </Button>
                    </div>
                  </section>
                </main>
              </form>
            )}
          />
        </div>
      </>
    )
  }
  return (
    <>
      <div className="bg-white-background grid h-full w-screen place-items-center p-10">
        <h1>New Item</h1>
        <Form
          id="newItem"
          className="w-screen"
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
                <section className="mx-auto flex w-3/5 flex-col gap-1">
                  <FormInput inputName="Name" id="title" />

                  <FormInput inputName="Description" id="description" />
                  <div className="mt-10 flex gap-10">
                    <FormInput
                      inputName="Due Date"
                      size="small"
                      inputType="date"
                      id="dueDate"
                    />

                    <FormInput
                      id="priority"
                      inputName="Priority"
                      size="small"
                      inputType="select"
                      selectValues={["Low", "Medium", "High"]}
                    />
                  </div>

                  <div>
                    <Button submit color="purple">
                      Add Item
                    </Button>
                  </div>
                </section>
              </main>
            </form>
          )}
        />
      </div>
    </>
  )
}

export default TodoForm
