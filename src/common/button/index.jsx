import style from './index.module.scss'

const Button = ({text, link, buttonType, children}) => {
  return (
    <a className={`${style.generalButton} ${style[buttonType]}`} href={link} target="_blank" rel="noreferrer" >
      {text}
      {children}
    </a>
  )
}

export default Button