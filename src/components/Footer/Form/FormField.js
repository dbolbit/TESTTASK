import {useEffect, useState} from 'react'
import style from "./Form.module.scss"
import {useFormContext} from "react-hook-form"


const FormField = ({text, name, ...props}) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [isError, setIsError] = useState(false)
  const {register, formState: {errors}} = useFormContext()
  const handlerFocus = e => setIsEmpty(false)

  const handlerBlur = e => {
    if (!e.target.value) {
      setIsEmpty(true)
    }
  }
  useEffect(() => {
    errors[name] && !isEmpty ? setIsError(true) : setIsError(false)
  },)


  return (
    <section className={style.input_wrapper}>
      <label
        style={{color: isError ? '#CB3D40' : false}}
        className={!isEmpty ? style.label_active : null}
        htmlFor={name}>{text}</label>
      <input
        className={isError ? style.border_error : null}
        {...register(name, {onBlur: handlerBlur})}
        onFocus={handlerFocus}

      />
      {isError && <div className={`${style.error} ${style.input_error}`}>{errors[name]?.message}</div>}
    </section>
  )
}

export default FormField


