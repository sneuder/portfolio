import { useContext } from 'react'
import GeneralContext from '../context'

const useGetStates = () => {
  const { state } = useContext(GeneralContext)
  return state
}

export default useGetStates
