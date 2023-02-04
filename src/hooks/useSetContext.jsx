import { useState } from "react";
import initialContext from '../context/context'

const useSetContext = () => {
  const [state, setState] = useState(initialContext)

  const reduceModal = () => {
    setState({...state, modalState: !state.modalState})
  }

  return {
    state: {
      state,
      modal: state.modalState
    },
    postStateMethods: {
      reduceModal
    }
  }
}

export default useSetContext