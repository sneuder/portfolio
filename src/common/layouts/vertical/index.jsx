import style from './index.module.scss'

const Vertical = ({ children }) => {
  return (
    <section className={style.verticalSection}>
      {children}
    </section>
  )
}

export default Vertical