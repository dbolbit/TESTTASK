import style from './Form.module.css'
import Button from "../../others/Button"
import Positions from "./Positions"
import UploadFile from "./UploadFile"
import FormField from "./FormField"
import {useForm, FormProvider} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import {validationSchema} from "../../../validation"
import {useEffect, useState} from "react"
import {api_instance} from "../../../api/api_instance"
import formStyle from "./Form.module.css"
import Title from "../../others/Title"
import {useDispatch} from "react-redux"
import {fetchUsers, resetUser} from "../../../store/slices/usersSlice"
import useScroll from "../../../hooks/useScroll"


const PostForm = ({setStatusForm, setIsSending, statusForm}) => {
  const dispatch = useDispatch()
  const scroll = useScroll()
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),

  })
  const {handleSubmit, formState: {isValid}} = methods

  const onSubmit = async (data) => {
    setIsSending(true)
    const formData = createFormData(data)
    const sendForm = await sendFormWithToken(formData)
    if (sendForm.success) {
      dispatch(resetUser())
      dispatch(fetchUsers(1))
      setStatusForm({success: true, message: ''})
      scroll('users-list')
    } else {
      setStatusForm({success: false, message: sendForm.message})
    }
    setIsSending(false)
  }

  return (
    <div className={formStyle.form_wrapper}>
      <Title>Working with POST request</Title>
      <FormProvider {...methods}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <FormField type="text" text="Name" name="name"/>
          <FormField type="email" text="Email" name="email"/>
          <FormField type="tel" text="Phone" name="phone"/>
          <Positions/>
          <UploadFile/>
          {statusForm.message && <span className={style.error}>{statusForm.message}</span>}
          <Button isDisable={!isValid} type="submit">Sign Up</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default PostForm

async function sendFormWithToken(value) {
  try {
    const tokenResponse = await api_instance.get('/token')
    const {token} = tokenResponse.data
    const {data} = await api_instance.post('/users', value, {headers: {'Token': token}})
    return {success: data.success}

  } catch (e) {
    if (e.response.status === 409) {
      return e.response.data
    }
  }
}


function createFormData(data) {
  const {name, email, phone, position_id, photo} = data
  const form = new FormData()
  form.append('name', name)
  form.append('email', email)
  form.append('phone', phone)
  form.append('position_id', position_id)
  form.append('photo', photo[0])
  return form
}