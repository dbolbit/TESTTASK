import {useEffect, useRef, useState} from 'react'
import {Tooltip} from "react-tooltip"
import {uid} from "uid"

const TextWithTooltip = ({children, type}) => {
  const pId = uid()
  const pRef = useRef(null)
  const [isWithTooltip, setIsTooltip] = useState(false)
  useEffect(() => {
    const elem = pRef.current
    if (elem.scrollWidth > elem.clientWidth) {
      setIsTooltip(true)
    } else {
      setIsTooltip(false)
    }
  }, [])


  return (
    <>
      <p ref={pRef}
         data-tooltip-id={`${type}-${pId}`}
         style={{cursor: isWithTooltip && 'pointer' || 'initial'}}
      >{children}</p>
      {isWithTooltip &&
        <Tooltip
          className="tooltip"
          noArrow offset={25}
          float
          place="bottom"
          anchorSelect={`[data-tooltip-id^='${type}-${pId}']`}
          content={children}/>
      }
    </>
  )
}


export default TextWithTooltip