import style from './index.module.scss'

const Horizontal = ({ children }) => {
  return <div className={style.horizontalSection}>{children}</div>
}

export default Horizontal
