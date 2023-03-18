import style from './Button.module.scss'

const Button = (props) => {
  const {children, isDisable = false, ...ethProps} = props
  return <button disabled={isDisable} {...ethProps} className={style.button}>{children}</button>
}
export default Button