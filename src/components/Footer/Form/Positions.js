import style from "./Form.module.css"
import {useEffect, useState} from "react"
import {useFormContext} from "react-hook-form"


const Positions = (props) => {
  const [positionList, setPositionList] = useState([])
  const {register, formState: {errors}} = useFormContext()

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setPositionList(data.positions)
      })

  }, [])

  return (
    <section>
      <span>Select your position</span>
      {errors.position_id?.message &&
        <span style={{marginLeft: 10}} className={style.error}>{errors.position_id?.message}</span>}
      <div className={style.container}>
        {
          positionList.map(elem =>
            <label key={elem.name}>
              <input  {...register('position_id')} type="radio" name="position_id" value={elem.id} id={elem.id}/>
              <label htmlFor={elem.id}/>{elem.name}
            </label>)
        }
      </div>
    </section>
  )
}

export default Positions