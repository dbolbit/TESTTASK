import * as Yup from "yup"

const nameReg = /^[a-zA-Zа-яА-Я]{2,60}$/igu,
  emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig,
  phoneReg = /^[+]?380([0-9]{9})$/gi

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required").min(2, 'Min length 2').max(60, 'Max length 60').matches(nameReg, 'Invalid name'),
  email: Yup.string().required('Required').matches(emailReg, 'Invalid email'),
  phone: Yup.string().required("Required").matches(phoneReg, 'Invalid phone (380xxxxxxxxx)'),
  position_id: Yup.string().required('Required'),
  photo: Yup.mixed()
    .test('Required', 'Required', value => value)
    .test("fileFormat", "Invalid format", value => value ? ['image/jpg', 'image/jpeg']?.includes(value[0]?.type) : false)
    .test('fileSize', 'Invalid file size (max 5MB)', value => value[0]?.size <= 5 * 1024 * 1024)
})


