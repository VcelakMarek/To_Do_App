import { Priority as PriorityEnum } from "types/todoType"

type PrioritiesTypes = {
  [key in PriorityEnum]: string[]
}

const priorities: PrioritiesTypes = {
  Low: ["bg-[#33D69F]", "text-[#33D69F]"],
  Medium: ["bg-[#FF8F00]", "text-[#FF8F00]"],
  High: ["bg-[#D53333]", "text-[#CC0000]"],
}

type Props = {
  priority: PriorityEnum
}

const Priority = ({ priority }: Props) => {
  const color = priorities[priority]

  return (
    <div className={`flex h-10 w-[104px] rounded-md bg-opacity-10 ${color[0]}`}>
      <div className="m-auto flex items-center text-xs font-bold">
        <div className={`mr-2 h-2 w-2 rounded-full opacity-100 ${color[0]}`} />
        <p className={`pt-0.5 first-letter:uppercase ${color[1]}`}>
          {priority}
        </p>
      </div>
    </div>
  )
}

export default Priority
