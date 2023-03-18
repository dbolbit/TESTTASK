import style from './Title.module.css'

const Title = ({children, ...props}) => {
  return <h1 className={style.title} {...props}>{children}</h1>
}

export default Title