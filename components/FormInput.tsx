"use client"
import { Field } from "react-final-form"

type Size = "small" | "medium" | "large"

type Props = {
  size?: Size
  inputName?: string
  id: string
  inputType?: "text" | "number" | "select"
  inputPlaceholder?: string
  selectValues?: string[]
}

const inputSize: { [key in Size]: string } = {
  small: "w-[120px] sm:w-[240px]",
  medium: "w-[200px] sm:w-[300px]",
  large: "w-[250px] sm:w-[504px]",
}

const FormInput = ({
  size = "large",
  inputName,
  id,
  inputType = "text",
  inputPlaceholder,
  selectValues,
}: Props) => {
  if (inputType === "select") {
    return (
      <label htmlFor={id}>
        <h2>{inputName}</h2>
        <Field id={id} name={id} component="select" className={inputSize[size]}>
          {selectValues?.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Field>
      </label>
    )
  }

  return (
    <label htmlFor={id}>
      <Field name={id}>
        {({ input }) => (
          <div>
            <div className="flex justify-between">
              <h2>{inputName}</h2>
            </div>
            <input
              {...input}
              type={inputType}
              className={`${inputSize[size]} `}
              placeholder={inputPlaceholder}
              onChange={(e) => {
                input.onChange(e) //final-form's onChange
              }}
            />
          </div>
        )}
      </Field>
    </label>
  )
}

export default FormInput
