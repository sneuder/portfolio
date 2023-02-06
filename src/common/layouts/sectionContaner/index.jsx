import style from './index.module.scss'

const SectionContainer = ({ children }) => {
  return <div className={style.sectionContainer}>{children}</div>
}

export default SectionContainer
