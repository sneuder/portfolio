import style from './index.module.scss'

const Responsive = ({ children }) => {
  return <div className={style.responsiveContainer}>{children}</div>
}

export default Responsive
