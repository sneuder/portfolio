import style from './index.module.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const GoTo = ({ instruction }) => {
  const LinkToWork = () => {
    if (instruction.tab) {
      return (
        <a
          href={instruction.to}
          className={style.link}
          target="_blank"
          rel="noreferrer"
        >
          {instruction.text}
        </a>
      )
    }

    return (
      <Link to={instruction.to} className={style.link}>
        {instruction.text}
      </Link>
    )
  }

  const Arrow = () => {
    if (instruction.reverse) {
      return <FontAwesomeIcon icon={faArrowLeft} className={style.icon} />
    }

    return <FontAwesomeIcon icon={faArrowRight} className={style.icon} />
  }

  const directionClass = () => {
    return instruction.reverse ? style.reverse : ''
  }

  return (
    <div className={`${style.containerGoTo} ${directionClass()}`}>
      <LinkToWork />
      <Arrow />
    </div>
  )
}

export default GoTo
