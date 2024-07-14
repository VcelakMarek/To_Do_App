import { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

type Props = {
  color?: "red" | "purple" | "grey" | "darkBlue" | "transparent"
  children?: ReactNode
  dropDown?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  addNew?: boolean
  DropDownMenu?: ReactNode
  goBack?: boolean
  icon?: boolean
  disabled?: boolean
  isOpen?: boolean
  submit?: boolean
  full?: boolean
  invisible?: boolean
  link?: string
}

const backgroundColor = {
  red: "bg-red hover:bg-red-hover",
  purple: "bg-purple hover:bg-purple-hover",
  grey: "bg-[#e6e8f5] hover:bg-light-grey",
  darkBlue: "bg-blue hover:bg-black",
  transparent: "",
}

const textColor = {
  red: "text-white",
  purple: "text-white",
  grey: "text-light-blue",
  darkBlue: "text-grey",
  transparent: "",
}

const Button = ({
  color = "transparent",
  dropDown,
  goBack,
  onClick,
  addNew,
  children,
  icon,
  disabled,
  isOpen,
  submit,
  full,
  invisible,
  link,
}: Props) => {
  const border = !dropDown && "rounded-full"
  const dimensions = !icon
    ? `h-12 ${addNew ? "pl-2" : "pl-6"} pr-6 ${full ? "w-full" : null}`
    : " pl-5 pb-2"
  const text = "font-bold text-xs tracking-[1px]"
  const flex = "flex items-center gap-4"

  const baseClasses = [
    backgroundColor[color],
    textColor[color],
    border,
    dimensions,
    text,
    invisible ? "invisible" : null,
  ]

  const dropDownClasses = [text, flex]
  const todoClasses = baseClasses.concat(flex)

  if (dropDown) {
    return (
      <button className={dropDownClasses.join(" ")} onClick={onClick}>
        {children}
        <img
          className={isOpen ? "rotate-180 duration-500" : "duration-500"}
          src="/todo_app/assets/icon-arrow-down.svg"
          alt="arrow-down"
        ></img>
      </button>
    )
  }

  if (addNew) {
    return (
      <button className={todoClasses.join(" ")} onClick={onClick}>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white">
          <Image
            className="pl-px pt-px"
            src="public/icon-plus.svg"
            width={500}
            height={500}
            alt="plus"
          />
        </div>
        {children}
      </button>
    )
  }

  if (goBack) {
    return (
      <button className="mb-6 flex justify-between gap-5" onClick={onClick}>
        <img
          src="/todo_app/assets/icon-arrow-left.svg"
          alt="go back"
          className="m-auto h-2"
        />
        <h3 className="mt-0.5 hover:text-grey">Go back</h3>
      </button>
    )
  }

  if (link) {
    return (
      <Link href={link} className={baseClasses.join(" ")}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={submit ? "submit" : "button"}
      className={baseClasses.join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
