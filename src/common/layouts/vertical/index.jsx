import style from './index.module.scss'

const Vertical = ({ children, idPage }) => {
  return (
    <section className={style.verticalSection} id={idPage}>
      {children}
    </section>
  )
}

export default Vertical
