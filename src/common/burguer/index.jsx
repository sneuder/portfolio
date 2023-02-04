import useModal from '../../hooks/useModal'

import style from './index.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Burguer = () => {
  const { handleModal } = useModal()
  return <FontAwesomeIcon icon={faBars} className={style.burguer} onClick={handleModal}/>
}

export default Burguer