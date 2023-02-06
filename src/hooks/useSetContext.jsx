import { useState } from "react";
import initialContext from '../context/context'

const useSetContext = () => {
  const [state, setState] = useState(initialContext)

  const reduceModal = () => {
    setState({...state, modalState: !state.modalState})
  }

  const reduceData = (pro) => {
    setState((prev) => ({...prev, [pro]: !prev[pro]}))
  }

  return {
    state: {
      modal: state.modalState,
      loading: state.loading,
      formSent: state.formSent
    },
    reduceData,
    postStateMethods: {
      reduceModal,
    }
  }
}

export default useSetContext