"use server"

import { revalidatePath } from "next/cache"

export default async function revalidate(param = "/") {
  revalidatePath(param)
}
