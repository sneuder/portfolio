import style from './index.module.scss'

const Button = ({text, link, children}) => {
  return (
    <a className={style.generalButton} href={link} target="_blank" rel="noreferrer" >
      {text}
      {children}
    </a>
  )
}

export default Button