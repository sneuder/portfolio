import useGetStates from '../../hooks/useGetStates'
import useModal from '../../hooks/useModal'

import style from './index.module.scss'

const Modal = ({ children }) => {
  const { modal } = useGetStates()
  const { handleModal } = useModal()

  return (
    <dialog open={modal} onClick={handleModal}>
      {children}
    </dialog>
  )
}

export default Modal
