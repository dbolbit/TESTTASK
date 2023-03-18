import style from './Form.module.css'
import {useState} from "react"
import {useFormContext} from "react-hook-form"

const UploadFile = () => {
  const [fileName, setFileName] = useState('')
  const {register, formState: {errors}} = useFormContext()

  const handlerFile = e => {
    setFileName(e.target.files[0]?.name)
  }

  return (
    <section className={style.upload_wrapper}>
      <label className={`${style.upload_btn} ${errors.photo ? style.border_error : ''}`} htmlFor="photo">Upload</label>
      <input
        {...register('photo', {onChange: handlerFile})}
        name="photo"
        id="photo"
        type="file"
      />
      <label htmlFor="photo" className={`${style.upload_info} ${errors.photo ? style.border_error : ''}`}>
        {fileName || 'Upload your photo'}
      </label>
      {errors.photo &&
        <div style={{position: 'absolute'}} className={`${style.error} ${style.input_error}`}>
          {errors.photo?.message}
        </div>}
    </section>
  )
}
export default UploadFile