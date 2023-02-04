import { useContext } from 'react';
import GeneralContext from '../context';

const useModal = () => {
  const { postStateMethods } = useContext(GeneralContext)
  const { handleModal } = postStateMethods

  return {
    handleModal
  }
}

export default useModal