import style from './Container.module.css'

const Container = (props) => {
  const {children, ...ethProps} = props
  return <div {...ethProps} className={style.container}>{children}</div>

}

export default Container