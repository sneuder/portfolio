import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import useData from '../../hooks/useData'

const RepositoryButton = () => {
  const { links } = useData('links')

  return (
    <a
      className={style.containerRepository}
      href={links.github}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faGithubSquare} />
      <p>Check repositories</p>
    </a>
  )
}

export default RepositoryButton
