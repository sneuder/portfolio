import style from './index.module.scss'
import useTitle from '../../hooks/useTitle'

const Title = ({title, description}) => {
  const {partialTitle, highlightedWord} = useTitle(title)

  return (
    <div className={style.titleContainer}>
      <h2>{partialTitle} <span>{highlightedWord}</span></h2>
      <p>{description}</p>
    </div>
  )
}

export default Title