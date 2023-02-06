import { useContext } from 'react'
import GeneralContext from '../context'

const useModal = () => {
  const { postStateMethods, state } = useContext(GeneralContext)
  const { reduceModal } = postStateMethods

  const handleModal = () => {
    reduceModal()
    if (!state.modal) return (document.body.style.overflow = 'hidden')
    document.body.style.overflow = 'auto'
  }

  return {
    handleModal,
  }
}

export default useModal
