"use client"
import { Form } from "react-final-form"
import { useRouter } from "next/navigation"
import FormInput from "components/FormInput"
import Button from "components/Button"
import { addList } from "api/todoListAPI"
import type { TodoList } from "types/todoType"
import revalidate from "utils/actions"

const ListForm = () => {
  const router = useRouter()

  const onSubmit = async (values: TodoList) => {
    await addList(values)

    revalidate()
    router.replace("/")
  }

  return (
    <div className="bg-white-background grid h-full w-screen place-items-center pt-10">
      <h1>New List</h1>
      <Form
        id="newList"
        className="w-screen"
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
              <section className="mx-auto flex flex-col gap-1">
                <FormInput inputName="Name" id="name" size="large" />
                <div>
                  <Button type="submit" color="purple">
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
